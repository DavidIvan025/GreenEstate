import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import BrowseButtons from "../components/BrowseButtons";
import FeaturedCard from "../components/FeaturedCard";
import { cards } from "../services/providers/testData";

export default function Browse({ title, linkTitle, description }) {
  const [filteredCards, setFilteredCards] = useState(cards);

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
              {filteredCards.map((card) => (
                <FeaturedCard key={card.id} card={card} />
              ))}
            </div>
          ) : (
            <div className="py-10 text-center">
              <p>No properties found.</p>
            </div>
          )}
          <div className="flex items-center justify-center">
            <Button className="min-w-full md:min-w-fit">Next</Button>
          </div>
        </div>
      </section>
    </>
  );
}
