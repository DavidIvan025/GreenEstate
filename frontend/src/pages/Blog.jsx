import React from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Blog() {
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
            <Button className="w-full md:max-w-fit">View All</Button>
            <Button className="w-full md:max-w-fit" intent="secondary">
              Resources
            </Button>
            <Button className="w-full md:max-w-fit" intent="secondary">
              News
            </Button>
            <Button className="w-full md:max-w-fit" intent="secondary">
              Articles
            </Button>
          </div>
        </div>

        <div className="article grid grid-flow-row grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="article-Card relative min-h-[450px] w-full rounded-2xl border border-gray shadow-sm">
            <img
              className="max-w-full rounded-t-2xl object-cover object-center"
              src="./images/img.jpg"
              alt="article_id"
            />
            <div className="mb-6 space-y-4 p-6">
              <div className="flex space-x-1">
                <p className="text-fs-sm">March 5, 2024 •</p>
                <p className="text-fs-sm">5 min read</p>
              </div>
              <h5 className="font-bold">
                Turning Dreams into Achievable Targets
              </h5>
              <p className="text-fs-base">
                Discuss how virtual reality is revolutionizing the way potential
                buyers explore
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
