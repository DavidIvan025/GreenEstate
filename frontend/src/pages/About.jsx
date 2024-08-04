import React from "react";

export default function About() {
  return (
    <>
      <main>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <h1>Transforming Real Estate</h1>
          <p className="text-fs-md">
            We are dedicated to revolutionizing the real estate industry with
            cutting-edge technology and exceptional service.
          </p>
        </section>
      </main>

      <section className="breakout">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:flex-[70%]">
            <img
              className="rounded-r-xl object-cover object-center"
              src="./images/img.jpg"
              alt="about_id"
            ></img>
          </div>
          <div className="my-auto lg:flex-[30%]">
            <div className="grid grid-flow-row grid-cols-[auto] items-center justify-start gap-4 md:grid-flow-col md:grid-rows-[auto,auto] md:justify-center md:p-12 lg:grid-flow-row lg:grid-cols-[auto]">
              <h4>400+</h4>
              <h5>Featured Projects</h5>
              <h4>1,400+</h4>
              <h5>Successful sales</h5>
              <h4>99%</h4>
              <h5>Customer satisfaction</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="mediumSection">
        <p className="text-center text-fs-md font-bold">
          Used by the world's most average companies
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <img
            className="h-12 w-24 object-cover object-center"
            src="./images/img.jpg"
            alt="about_id"
          />
          <img
            className="h-12 w-24 object-cover object-center"
            src="./images/img.jpg"
            alt="about_id"
          />
          <img
            className="h-12 w-24 object-cover object-center"
            src="./images/img.jpg"
            alt="about_id"
          />
          <img
            className="h-12 w-24 object-cover object-center"
            src="./images/img.jpg"
            alt="about_id"
          />
          <img
            className="h-12 w-24 object-cover object-center"
            src="./images/img.jpg"
            alt="about_id"
          />
          <img
            className="h-12 w-24 object-cover object-center"
            src="./images/img.jpg"
            alt="about_id"
          />
          <img
            className="h-12 w-24 object-cover object-center"
            src="./images/img.jpg"
            alt="about_id"
          />
        </div>
      </section>
    </>
  );
}
