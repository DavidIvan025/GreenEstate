import React from "react";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";
import { containerMotion } from "../services/providers/componentsMotion";
import LuxurySlideShow from "../components/LuxurySlideShow";
import EmailForm from "../components/EmailForm";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <div className="heroWrapper hc-Background--primary grid grid-cols-1 items-center rounded-2xl lg:grid-cols-2">
          <motion.div
            className="flex flex-col space-y-6 md:py-28 md:pl-8"
            {...containerMotion}
          >
            <p className="text-fs-md">Welcome to Greenestates</p>
            <h1>Find Your Dream Home Today</h1>
            <p className="text-fs-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>

            <EmailForm confirmText={false} />
          </motion.div>

          <div>
            <motion.div {...containerMotion}>
              <img
                className="aspect-[1/1] rounded-2xl bg-cover object-cover"
                src="images/img.jpg"
                alt="greenestate_hero"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </main>

      <section>
        <h3 className="text-center font-bold">
          Find Your Dream Home with Ease
        </h3>
        <div className="my-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col space-y-5">
            <img
              src="./images/house-svgrepo-com.svg"
              alt="explore_property"
              width="35"
              height="35"
            />
            <h5>Explore Property Listings</h5>
            <p className="text-fs-base">
              Our user-friendly search functionality allows you to easily find
              properties that match your criteria.
            </p>
          </div>
          <div className="flex flex-col space-y-5">
            <img
              src="./images/house-svgrepo-com.svg"
              alt="explore_property"
              width="35"
              height="35"
            />
            <h5>Explore Property Listings</h5>
            <p className="text-fs-base">
              Our user-friendly search functionality allows you to easily find
              properties that match your criteria.
            </p>
          </div>
          <div className="flex flex-col space-y-5">
            <img
              src="./images/house-svgrepo-com.svg"
              alt="explore_property"
              width="35"
              height="35"
            />
            <h5>Explore Property Listings</h5>
            <p className="text-fs-base">
              Our user-friendly search functionality allows you to easily find
              properties that match your criteria.
            </p>
          </div>
        </div>
      </section>

      <section>
        <LuxurySlideShow />
      </section>

      <section>
        <span className="font-bold">Our Services</span>
        <div className="flex flex-col items-center py-6 md:flex-row">
          <h2 className="mb-4 grow font-bold">
            Explore the myriad ways we can be of assistance.
          </h2>
          <Button className="min-w-full md:min-w-fit">See more</Button>
        </div>
        <p>Discover our curated selection of luxury properties.</p>

        <div className="services-list grid grid-flow-row grid-cols-1 gap-12 pt-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="services__card min-h-[450px] w-full space-y-6 border border-gray p-8 shadow-md hover:border-b-4 hover:border-b-primary hover:transition-all hover:ease-linear">
            <span className="text-fs-base">01</span>
            <h4 className="font-bold">Buy Properties</h4>
            <p className="text-fs-base">
              Discover a wide range of properties available for purchase. Our
              expert team will guide you through the buying process, ensuring a
              seamless experience from start to finish.
            </p>
            <button className="inline-flex pt-9">
              Learn More
              <svg
                className="ml-4 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12.9983H16.17L11.29 17.8783C10.9 18.2683 10.9 18.9083 11.29 19.2983C11.68 19.6883 12.31 19.6883 12.7 19.2983L19.29 12.7083C19.3827 12.6158 19.4563 12.5059 19.5064 12.3849C19.5566 12.2639 19.5824 12.1342 19.5824 12.0033C19.5824 11.8723 19.5566 11.7426 19.5064 11.6216C19.4563 11.5007 19.3827 11.3908 19.29 11.2983L12.71 4.69827C12.6174 4.60569 12.5075 4.53225 12.3865 4.48214C12.2656 4.43204 12.1359 4.40625 12.005 4.40625C11.8741 4.40625 11.7444 4.43204 11.6235 4.48214C11.5025 4.53225 11.3926 4.60569 11.3 4.69827C11.2074 4.79085 11.134 4.90076 11.0839 5.02173C11.0338 5.14269 11.008 5.27234 11.008 5.40327C11.008 5.5342 11.0338 5.66385 11.0839 5.78481C11.134 5.90578 11.2074 6.01569 11.3 6.10827L16.17 10.9983H5C4.45 10.9983 4 11.4483 4 11.9983C4 12.5483 4.45 12.9983 5 12.9983Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="hc-Background--primary max-h-[450px] rounded-3xl p-6">
            <img
              className="size-full rounded-3xl object-cover"
              src="./images/img.jpg"
              alt="dicover_house"
            />
          </div>

          <div className="flex flex-col space-y-6 lg:p-4">
            <h3 className="font-bold">
              Discover the Power of Our Proprietary Market Analysis Tool
            </h3>
            <p className="text-fs-md">
              Gain valuable insights and make informed decisions with our
              advanced market analysis tool. It provides accurate and up-to-date
              information to help you navigate the real estate market with
              confidence.
            </p>
            <div className="inline-flex items-center">
              <svg
                className="mr-4 size-8"
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
              <p className="text-fs-base">
                Uncover hidden market trends and opportunities
              </p>
            </div>
            <Button className="md:max-w-36">See more</Button>
          </div>
        </div>
      </section>

      <section>
        <Testimonials />
      </section>

      <section className="full-width hc-Background--primary hc-Background--primary_break">
        <div className="grid grid-flow-row grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-bold">Subscribe to our newsletter</h2>
            <p className="text-fs-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>

            <EmailForm confirmText={true} />
          </div>

          <div className="mt-6">
            <img
              className="aspect-[1/2] max-h-[450px] w-full rounded-br-3xl object-cover"
              src="./images/img.jpg"
              alt="newsletter_img"
            />
          </div>
        </div>
      </section>

      <section>
        <FAQ />
      </section>

      <section>
        <div className="flex flex-col pb-12 lg:flex-row">
          <h2 className="mb-4 grow font-bold">Read our latest articles</h2>
          <Button className="min-w-full md:min-w-56">
            Browse all articles
          </Button>
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

      <section>
        <h2 className="pb-24 font-bold">
          Get in touch to schedule avisit to our open house
        </h2>
        <div className="grid grid-flow-row grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          <div className="schedule z-10 overflow-hidden rounded-2xl border border-gray bg-white shadow-lg">
            <form className="grid grid-cols-2 gap-6 px-6 py-8">
              <div className="col-span-2 xl:col-start-1 xl:col-end-2">
                <label className="font-bold">Full name</label>
                <input
                  className="min-h-12 min-w-full rounded-lg bg-gray py-2 pl-6"
                  type="text"
                  name="fullName"
                  id="fullName"
                />
              </div>
              <div className="col-span-2 xl:col-start-2 xl:col-end-3">
                <label className="font-bold">Your Email</label>
                <input
                  className="min-h-12 min-w-full rounded-lg bg-gray py-2 pl-6"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="col-span-2">
                <label className="font-bold">Phone number</label>
                <input
                  className="min-h-12 min-w-full rounded-lg bg-gray py-2 pl-6"
                  type="tel"
                  name="tel"
                  id="tel"
                />
              </div>
              <div className="col-span-2">
                <label className="font-bold">Message</label>
                <textarea
                  className="min-h-44 min-w-full rounded-lg bg-gray pl-6 pt-3"
                  name="msg"
                  id="msg"
                />
              </div>

              <div className="col-span-2">
                <Button>Send Message</Button>
              </div>
            </form>
          </div>
          <div className="lg:px-18 relative min-h-fit py-28 text-gray md:min-h-full md:px-9">
            <div className="mx-auto flex max-w-lg border-b-2 border-gray before:absolute before:bottom-0 before:left-[-2.5rem] before:right-[-2.5rem] before:top-0 before:-z-10 before:translate-y-[-2rem] before:rounded-2xl before:bg-black">
              <div className="inline-flex size-11 items-center justify-center rounded-full bg-gray p-2">
                <svg
                  className="size-7 stroke-black"
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
                    <path
                      d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="mb-3 ml-6 flex-col lg:mr-14">
                <h6 className="font-bold">Our Office Location</h6>
                <p className="text-fs-base">
                  Al Abraj Street, Al Manara Tower Office 2007 - Dubai - United
                  Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
