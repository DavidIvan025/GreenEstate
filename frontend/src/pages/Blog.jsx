import React, { useEffect, useRef, useState } from "react";
import Button from "../components/ui/Button";
import { cards } from "../services/providers/postData";
import { Link, useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ITEMS_PER_PAGE = 9;

export default function Blog() {
  const [filteredCards, setFilteredCards] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState(useQuery().get("filter") || "all");
  const navigate = useNavigate();
  const observer = useRef();

  useEffect(() => {
    applyFilter();
  }, [filter]);

  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreCards();
      }
    });

    const lastCard = document.querySelector(".article-Card:last-child");
    if (lastCard) observer.current.observe(lastCard);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [loading, filteredCards]);

  const applyFilter = () => {
    const filtered =
      filter === "all"
        ? cards
        : cards.filter((card) => card.tags.includes(filter));

    setFilteredCards(filtered.slice(0, page * ITEMS_PER_PAGE));
    setHasMore(filtered.length > page * ITEMS_PER_PAGE);
  };

  const loadMoreCards = () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setTimeout(() => {
      const filtered =
        filter === "all"
          ? cards
          : cards.filter((card) => card.tags.includes(filter));

      setFilteredCards(filtered.slice(0, (page + 1) * ITEMS_PER_PAGE));
      setHasMore(filtered.length > (page + 1) * ITEMS_PER_PAGE);
      setPage((prev) => prev + 1);
      setLoading(false);
    }, 3000); // Simulate a 3-second load time
  };

  const handleFilterClick = (newFilter) => {
    setFilter(newFilter);
    setPage(1);
    navigate(`?filter=${newFilter}`);
  };

  return (
    <>
      <main className="hc-Background--primary full-width">
        <section className="flex flex-col items-center space-y-4 text-center">
          <h1>Articles & Resources</h1>
          <div className="flex">
            <Link to="/">Home/</Link>
            <p className="text-primary">Blog</p>
          </div>
        </section>
      </main>

      <section>
        <div className="mb-12 flex flex-col lg:flex-row">
          <h2 className="grow">Latest Posts</h2>
          <div className="flex-row space-x-2 space-y-2 pt-6 lg:pt-0">
            {["all", "Resources", "News", "Articles"].map((category) => (
              <Button
                key={category}
                className="w-full md:max-w-fit"
                intent={filter === category ? "primary" : "secondary"}
                onClick={() => handleFilterClick(category)}
              >
                {category === "all" ? "View All" : category}
              </Button>
            ))}
          </div>
        </div>

        <div className="article grid grid-flow-row grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredCards.map((card) => (
            <div
              className="article-Card relative min-h-[450px] w-full rounded-2xl border border-gray shadow-sm"
              key={card.id}
            >
              <img
                className="max-w-full rounded-t-2xl object-cover object-center"
                src={card.image}
                alt={card.alt}
              />
              <div className="mb-6 space-y-4 p-6">
                <div className="flex space-x-1">
                  <p className="text-fs-sm">{card.date} •</p>
                  <p className="text-fs-sm">{card.readTime}</p>
                </div>
                <h5 className="font-bold">{card.title}</h5>
                <p className="text-fs-base">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        {loading && hasMore && (
          <p className="mt-3 text-center">Loading more articles...</p>
        )}
      </section>
    </>
  );
}
