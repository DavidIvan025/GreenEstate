import React, { useEffect, useMemo, useRef, useState } from "react";
import Button from "../components/ui/Button";
import { cards } from "../services/providers/postData";
import { Link, useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Blog() {
  const [filteredCards, setFilteredCards] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Track if there's more data to load
  const navigate = useNavigate();
  const query = useQuery();

  const initialFilter = query.get("filter") || "all";
  const [filter, setFilter] = useState(initialFilter);

  const observer = useRef();

  useEffect(() => {
    applyFilter();
  }, [filter]);

  const applyFilter = () => {
    let filtered;
    if (filter === "all") {
      filtered = cards;
    } else {
      filtered = cards.filter((card) => card.tags.includes(filter));
    }

    setFilteredCards(filtered.slice(0, page * 9));

    if (filtered.length <= page * 9) {
      setHasMore(false); // No more data to load
    } else {
      setHasMore(true);
    }
  };

  const loadMoreCards = () => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      const moreCards = cards.filter(
        (card) => filter === "all" || card.tags.includes(filter),
      );
      const nextCards = moreCards.slice(0, (page + 1) * 9);
      if (nextCards.length === filteredCards.length) {
        setHasMore(false); // No more cards to load
      } else {
        setFilteredCards(nextCards);
        setPage((prev) => prev + 1);
      }
      setLoading(false);
    }, 3000); // Simulate a 3-second load time
  };

  const lastCardRef = useRef();

  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreCards();
      }
    });

    if (lastCardRef.current) {
      observer.current.observe(lastCardRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [loading, filteredCards]);

  const handleFilterClick = (newFilter) => {
    setFilter(newFilter);
    setPage(1); // Reset to the first page of results
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
            <Button
              className="w-full md:max-w-fit"
              onClick={() => handleFilterClick("all")}
            >
              View All
            </Button>
            <Button
              className="w-full md:max-w-fit"
              intent="secondary"
              onClick={() => handleFilterClick("Resources")}
            >
              Resources
            </Button>
            <Button
              className="w-full md:max-w-fit"
              intent="secondary"
              onClick={() => handleFilterClick("News")}
            >
              News
            </Button>
            <Button
              className="w-full md:max-w-fit"
              intent="secondary"
              onClick={() => handleFilterClick("Articles")}
            >
              Articles
            </Button>
          </div>
        </div>

        <div className="article grid grid-flow-row grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredCards.map((card, index) => {
            if (index === filteredCards.length - 1) {
              return (
                <div
                  ref={lastCardRef}
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
              );
            } else {
              return (
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
              );
            }
          })}
        </div>
        {loading && hasMore && <p className="text-center mt-3">Loading more articles...</p>}
      </section>
    </>
  );
}
