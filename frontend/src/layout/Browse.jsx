import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import BrowseButtons from "../components/BrowseButtons";
import FeaturedCard from "../components/FeaturedCard";

export default function Browse({ title, linkTitle, description }) {
  return (
    <>
      <main>
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

        <BrowseButtons />

        <div>
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-10">
            <FeaturedCard />
          </div>
          <div className="flex items-center justify-center">
            <Button className="min-w-full md:min-w-fit">Next</Button>
          </div>
        </div>
      </section>
    </>
  );
}
