import React from "react";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";
import { containerMotion } from "../services/providers/componentsMotion";

export default function Home() {
  return (
    <>
      <main>
        <div className="hc-Background grid grid-cols-1 items-center rounded-xl lg:grid-cols-2">
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

            <form>
              <div className="flex flex-col md:flex-row items-center relative mr-8">
                <input
                  className="min-h-16 min-w-full md:min-w-[24rem] rounded-full py-2 pl-6"
                  type="email"
                  name="email"
                  maxLength="256"
                  placeholder="Enter your email"
                  required
                ></input>
                <Button
                  className="md:absolute left-64"
                  type="submit"
                  data-wait="Please wait..."
                >
                  Get Started
                </Button>
              </div>
            </form>
          </motion.div>

          <div>
            <img
              className="aspect-[1/1] bg-cover object-cover"
              src="images/img.jpg"
              alt="greenestate_hero"
              loading="eager"
            />
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
        <div className="flex flex-col space-y-6">
          <span className="font-bold">Luxury</span>
          <h2>Featured</h2>
          <div className="flex items-center pb-12">
            <p className="grow text-fs-md">
              Discover our curated selection of luxury properties.
            </p>
            <div className="cc-Button drop-shadow-sm">
              <svg
                className="size-6 stroke-2"
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
                    d="M15 7L10 12L15 17"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="cc-Button drop-shadow-sm">
              <svg
                className="size-6 stroke-2"
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
                    d="M10 7L15 12L10 17"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="featured-slider grid grid-flow-row grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="featured__card relative min-h-[450px] w-full rounded-3xl border border-gray p-4 shadow-sm hover:shadow-lg">
            <img
              className="aspect[1/2] max-w-full rounded-3xl object-cover object-center"
              src="images/img.jpg"
              alt="feature_1"
            />
            <div className="properties-img">
              <div className="properties__button absolute left-6 top-6 inline-flex gap-3 rounded-full bg-black p-2">
                <p className="text-fs-sm text-white">Recently Added</p>
                <svg
                  className="size-5 stroke-white"
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
                      d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
                <p className="text-fs-sm text-white">1/5</p>
              </div>
              <svg
                className="absolute right-6 top-6 size-9 stroke-white"
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="ml-2 flex-col space-y-3">
              <div className="properties__location mt-3 inline-flex">
                <svg
                  className="size-5 stroke-black"
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
                <span>Churchill Walk, London</span>
              </div>

              <div className="properties__price">
                <span>
                  $ <Number>2500</Number>
                </span>
                <span>Offer Available</span>
              </div>

              <div className="properties__heading space-y-2">
                <h6>3 bedroom detached house for sale</h6>
                <p>2bed 1bath 818sqdr 5,619sqft lot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <span className="font-bold">Our Services</span>
        <div className="flex items-center py-6">
          <h2 className="font-bold">
            Explore the myriad ways we can be of assistance.
          </h2>
          <Button>See more</Button>
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
          <div className="hc-Background max-h-[450px] rounded-3xl p-6">
            <img
              className="size-full rounded-3xl object-cover"
              src="./images/img.jpg"
              alt="dicover_house"
            />
          </div>

          <div className="flex flex-col space-y-6 lg:p-4">
            <h3>Discover the Power of Our Proprietary Market Analysis Tool</h3>
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
        <div className="flex flex-col items-center justify-center space-y-4 pb-12">
          <h2 className="font-bold">Customer Testimonials</h2>
          <p className="text-fs-md">
            Read what our clients have to say about us
          </p>
        </div>

        <div className="grid grid-flow-row grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="testimonials_Card min-h-max w-full space-y-6 rounded-3xl border border-gray p-8 shadow-sm">
            <svg
              className="size-6"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  sketch:type="MSPage"
                >
                  <g
                    className="fill-primary opacity-50"
                    id="Icon-Set-Filled"
                    sketch:type="MSLayerGroup"
                    transform="translate(-154.000000, -881.000000)"
                  >
                    <path
                      d="M186,893.244 L174.962,891.56 L170,881 L165.038,891.56 L154,893.244 L161.985,901.42 L160.095,913 L170,907.53 L179.905,913 L178.015,901.42 L186,893.244"
                      id="start-favorite"
                      sketch:type="MSShapeGroup"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <p className="text-fs-base">
              We had an exceptional experience with this real estate agency, and
              we highly recommend their services to others.
            </p>
            <div className="flex">
              <img
                className="size-12 rounded-full object-cover"
                src="./images/img.jpg"
                alt="person_id"
              />
              <div className="ml-3 flex flex-col">
                <p className="text-fs-base font-bold">John Doe </p>
                <p className="text-fs-base">CEO, ABC Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hc-Background hc-Background_break">
        <div className="grid grid-flow-row grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-bold">Subscribe to our newsletter</h2>
            <p className="text-fs-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>

            <form>
              <div className="flex flex-col md:flex-row items-center relative mr-8">
                <input
                  className="min-h-16 min-w-full md:min-w-[24rem] rounded-full py-2 pl-6"
                  type="email"
                  name="email"
                  maxLength="256"
                  placeholder="Enter your email"
                  required
                ></input>
                <Button
                  className="md:absolute left-64"
                  type="submit"
                  data-wait="Please wait..."
                >
                  Get Started
                </Button>
              </div>
            </form>
            <p className="text-fs-xs">
              By clicking Sign Up you're confirming that you agree with our
              Terms and Conditions.
            </p>
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
        <div className="wrapper-Faq">
          <div className="flex flex-col items-center space-y-6 mb-12">

            <h2 className="font-bold">Frequently Asked Questions</h2>
            <p className="text-fs-md">
              Find answers to commonly asked questions about real estate
              transactions and using our website.
            </p>
          </div>

          <div className="border-y-2 border-gray py-4">
            <div className="flex mb-4 items-center cursor-pointer">
              <p className="text-fs-md font-bold grow">How do I search for properties?</p>
              <svg className="size-4" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
            </div>
            <p className="text-fs-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
              imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>


          <div className="bg-primary-light rounded-2xl max-w-[35rem] mx-auto flex flex-col items-center justify-center space-y-4 p-6 mt-12 text-center">
            <h4 className="font-bold">Still have questions</h4>
            <p className="text-fs-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button>Contact</Button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row pb-12">
          <h2 className="font-bold grow">Read our latest articles</h2>
          <Button className="max-w-56">Browse all articles</Button>
        </div>
        <div className="article grid grid-flow-row grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="article-Card relative min-h-[450px] w-full rounded-2xl border border-gray shadow-sm">
            <img className="object-cover object-center aspect-[1/1] max-w-full rounded-t-2xl" src="./images/img.jpg" alt="article_id" />
            <div className="p-6 mb-6 space-y-4">
              <div className="flex space-x-1">
                <p className="text-fs-sm">March 5, 2024 •</p>
                <p className="text-fs-sm">5 min read</p>
              </div>
              <h5 className="font-bold">Turning Dreams into Achievable Targets</h5>
              <p className="text-fs-base">
                Discuss how virtual reality is revolutionizing the way potential
                buyers explore
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-bold pb-12">Get in touch to schedule avisit to our open house</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          <div className="schedule bg-primary-light border border-gray shadow-sm rounded-2xl mt-2">
            <form className="grid grid-cols-2 py-8 px-6 gap-6">
              <div className="col-span-2 xl:col-start-1 xl:col-end-2">
                <label>Full name</label>
                <input className="min-h-12 min-w-full rounded-lg py-2 pl-6" type="text" name="full_name" id="fullName" />
              </div>
              <div className="col-span-2 xl:col-start-2 xl:col-end-3">
                <label>Your Email</label>
                <input className="min-h-12 min-w-full rounded-lg py-2 pl-6" type="email" name="email" id="email" />
              </div>
              <div className="col-span-2">
                <label>Phone number</label>
                <input className="min-h-12 min-w-full rounded-lg py-2 pl-6" type="tel" name="tel" id="tel" />
              </div>
              <div className="col-span-2">
                <label>Message</label>
                <textarea className="min-h-44 min-w-full rounded-lg pl-6 pt-3" name="msg" id="msg" />
              </div>

              <div className="col-span-2">
                <Button>Send Message</Button>
              </div>

            </form>
          </div>
          <div className="bg-black text-gray rounded-2xl py-28">
            <div className="contactBox flex border-b-2 border-gray py-4 max-w-lg mx-auto">
              <div className="bg-gray inline-flex items-center justify-center size-10 rounded-full">
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
              <div className="flex-col ml-12">
                <h6>Our Office Location</h6>
                <p className="text-fs-base">
                  Al Abraj Street, Al Manara Tower Office 2007 - Dubai - United
                  Arab Emirates
                </p>
              </div>
            </div>
            <div className="contactBox">
              <div>
                <svg>
                  <path></path>
                </svg>
              </div>
              <h6>Our Office Location</h6>
              <p className="text-fs-base">
                Mauris at tincidunt mauris a, nisl mattis eu facilisi
              </p>
              <p className="text-fs-base">Suport.airtachx@gmail.com</p>
            </div>
            <div className="contactBox">
              <div>
                <svg>
                  <path></path>
                </svg>
              </div>
              <h6>Our Office Location</h6>
              <p className="text-fs-base">
                Al Abraj Street, Al Manara Tower Office 2007 - Dubai - United
                Arab Emirates
              </p>
              <p className="text-fs-base">(414) 946 - 4530</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
