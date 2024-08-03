import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import BrowseButtons from "../components/BrowseButtons";
import FeaturedCard from "../components/FeaturedCard";
import { cards } from "../services/providers/testData";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Browse({ title, linkTitle, description }) {
  const [filteredCards, setFilteredCards] = useState(cards);
  const navigate = useNavigate();
  const query = useQuery();

  // Get the current page from the URL, default to 1 if not present
  const page = parseInt(query.get("page")) || 1;

  // Index calculation based on page number
  const index = (page - 1) * 12;

  useEffect(() => {
    // Filtering logic can go here if needed, for now it just uses all cards
    setFilteredCards(cards);
  }, []);

  const handleNext = () => {
    if (index + 12 < filteredCards.length) {
      navigate(`?page=${page + 1}`);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      navigate(`?page=${page - 1}`);
    }
  };

  return (
    <>
      <main className="hc-Background--primary full-width">
        <section className="flex flex-col items-center space-y-4">
          <h1>{title}</h1>
          <div className="flex">
            <Link to="/">Home/</Link>
            <p className="text-primary">{linkTitle}</p>
          </div>
        </section>
      </main>

      <section>
        <div className="mb-12 text-center">
          <h3 className="font-bold">Browse {linkTitle}</h3>
          <p>{description}</p>
        </div>

        <BrowseButtons setFilteredCards={setFilteredCards} />

        <div>
          {filteredCards.length > 0 ? (
            <div className="grid grid-flow-row grid-cols-1 gap-12 py-10 md:grid-cols-2 lg:grid-cols-3">
              {filteredCards.slice(index, index + 12).map((card) => (
                <FeaturedCard key={card.id} card={card} />
              ))}
            </div>
          ) : (
            <div className="py-10 text-center">
              <p>No properties found.</p>
            </div>
          )}
          <div className="flex items-center justify-center gap-x-4">
            <Button
              className="min-w-full md:min-w-fit"
              onClick={handlePrev}
              disabled={index === 0}
            >
              Previous
            </Button>
            <Button
              className="min-w-full md:min-w-fit"
              onClick={handleNext}
              disabled={index + 12 >= filteredCards.length}
            >
              Next
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
