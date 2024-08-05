import React from "react";
import Button from "../components/ui/Button";

export default function About() {
  return (
    <>
      <main>
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

      <section className="full-width">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="min-w-full bg-black p-12 lg:order-2">
            <img
              className="min-w-full rounded-3xl object-cover object-center"
              src="./images/img.jpg"
              alt="discover_grid_2"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 pt-6 lg:pr-6">
            <h3>
              Experience the Difference with Our Personalized Real Estate
              Services
            </h3>
            <p>
              At AirEstates we pride ourselves on delivering exceptional service
              and expertise to our clients. With our deep market knowledge and
              successful track record, we are committed to helping you achieve
              your real estate goals.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h6>Personalized Services</h6>
                <p>
                  We understand that every client is unique, and we tailor our
                  services to meet your specific needs.
                </p>
              </div>
              <div>
                <h6>Market Knowledge</h6>
                <p>
                  Our team has extensive knowledge of the local real estate
                  market, giving you a competitive edge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col space-y-6">
            <p className="font-bold">Excellence</p>
            <h2>Our Journey in Real Estate</h2>
            <Button intent="secondary" className="min-w-auto md:max-w-fit">
              Explore More
            </Button>
          </div>
          <div>
            <div className="mt-6 grid grid-cols-1 gap-3">
              <div className="grid grid-cols-[4rem,1fr]">
                <div className="justify-self-center">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-light font-bold text-white">
                    1
                  </div>
                  <div className="ml-[1.128rem] mt-1 min-h-20 w-[2px] bg-primary-light"></div>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-y-3">
                  <h6>Building Trust</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
