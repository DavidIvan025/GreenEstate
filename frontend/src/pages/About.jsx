import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../components/ui/Button";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const overlayHeight = useTransform(scrollYProgress, [0, 1], ["30px", "100%"]);
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

      <section className="noPaddingSection">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative p-12 lg:order-2">
            <div className="absolute inset-0 min-w-[90rem] bg-black"></div>
            <img
              className="relative z-10 min-w-full rounded-3xl object-cover object-center"
              src="./images/img.jpg"
              alt="discover_grid_2"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 py-6 lg:px-6">
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
      <section className="noPaddingSection">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative p-12">
            <div className="absolute inset-0 -left-[50rem] min-w-full bg-black"></div>
            <img
              className="relative z-10 min-w-full rounded-3xl object-cover object-center"
              src="./images/img.jpg"
              alt="discover_grid_2"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 py-6 lg:px-6">
            <h3>
              Our singular goal is to assist you in finding your dream home.
            </h3>
            <p>
              At AirEstates we pride ourselves on delivering exceptional service
              and expertise to our clients. With our deep market knowledge and
              successful track record, we are committed to helping you achieve
              your real estate goals.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                <div className="justify-self-center" ref={ref}>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-fs-lg font-bold text-white">
                    1
                  </div>
                  <div className="relative ml-6 mt-2 flex min-h-20 w-[2px] bg-primary-light">
                    <motion.div
                      className="absolute left-0 top-0 w-full bg-primary"
                      style={{ height: overlayHeight }}
                    ></motion.div>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-y-3 pl-6">
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

      <section>
        <Testimonials />
      </section>

      <section>
        <div className="space-y-6 text-center">
          <h2>Meet the agents in our real estate firm</h2>
          <p className="text-fs-md">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col rounded-xl bg-primary-light px-4 py-6 shadow-lg">
            <div>
              <img
                className="min-w-full rounded-md object-cover object-center"
                src="./images/img.jpg"
                alt="discover_grid_2"
              />
              <div className="mt-4 flex flex-1 flex-col items-center justify-center">
                <p className="text-fs-lg">Emiliano Zapata</p>
                <p className="text-fs-md">Network Specialist</p>
                <div className="mt-6">
                  <svg
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect width="24" height="24" fill="white"></rect>
                      <path
                        className="fill-primary"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.55879 3.6972C10.7552 2.02216 13.2447 2.02216 14.4412 3.6972L14.6317 3.96387C14.8422 4.25867 15.1958 4.41652 15.5558 4.37652L16.4048 4.28218C18.3156 4.06988 19.9301 5.68439 19.7178 7.59513L19.6235 8.44415C19.5835 8.8042 19.7413 9.15774 20.0361 9.36831L20.3028 9.55879C21.9778 10.7552 21.9778 13.2447 20.3028 14.4412L20.0361 14.6317C19.7413 14.8422 19.5835 15.1958 19.6235 15.5558L19.7178 16.4048C19.9301 18.3156 18.3156 19.9301 16.4048 19.7178L15.5558 19.6235C15.1958 19.5835 14.8422 19.7413 14.6317 20.0361L14.4412 20.3028C13.2447 21.9778 10.7553 21.9778 9.55879 20.3028L9.36831 20.0361C9.15774 19.7413 8.8042 19.5835 8.44414 19.6235L7.59513 19.7178C5.68439 19.9301 4.06988 18.3156 4.28218 16.4048L4.37652 15.5558C4.41652 15.1958 4.25867 14.8422 3.96387 14.6317L3.6972 14.4412C2.02216 13.2447 2.02216 10.7553 3.6972 9.55879L3.96387 9.36831C4.25867 9.15774 4.41652 8.8042 4.37652 8.44414L4.28218 7.59513C4.06988 5.68439 5.68439 4.06988 7.59513 4.28218L8.44415 4.37652C8.8042 4.41652 9.15774 4.25867 9.36831 3.96387L9.55879 3.6972ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L11.8882 14.526C11.3977 15.0166 10.6023 15.0166 10.1118 14.526L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z"
                        fill="#323232"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <FAQ />
      </section>
    </>
  );
}
