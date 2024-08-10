import React from "react";
import { Link } from "react-router-dom";

export default function Utility({
  title,
  linkTitle,
  paragraph = [],
  listItem = [],
}) {
  return (
    <>
      <main className="full-width">
        <section className="flex flex-col items-center space-y-4 text-center">
          <h1>{title}</h1>
          <div className="flex">
            <Link to="/">Home/</Link>
            <p className="text-primary">{linkTitle}</p>
          </div>
        </section>
      </main>

      <section className="mx-auto flex max-w-[75ch] flex-col space-y-6">
        <h2>{title}</h2>

        {paragraph.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
        <ul>
          {listItem.map((li, index) => (
            <li key={index} className="list-inside list-disc">
              {li}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
