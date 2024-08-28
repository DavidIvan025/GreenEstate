import React from "react";
import { Link } from "react-router-dom";
import Articles from "../../components/Articles";
import EmailForm from "../../components/EmailForm";

export default function BlogPost() {
  return (
    <>
      
        <section className="flex flex-col">
          <div className="flex items-center space-x-2 pb-4">
            <Link to="/blog">Blog</Link>
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
                <path
                  d="M10 7L15 12L10 17"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            <Link to="/blog" className="flex-1">
              Articles
            </Link>
            <div className="flex">
              <svg
                className="inline-flex size-5"
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
                    d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </g>
              </svg>
              <svg
                className="inline-flex size-6"
                fill="#000000"
                viewBox="-5.5 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>linkedin</title>
                  <path d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"></path>
                </g>
              </svg>
            </div>
          </div>
          <div>
            <h2>Turning Dreams into Achievable Targets</h2>
          </div>
        </section>
        <section className="noPaddingSection">
          <img
            className="aspect-[2/1] max-w-full rounded-2xl object-cover object-center"
            src="./images/img.jpg"
            alt="article_id"
          />
        </section>
      

      <section className="mx-auto flex flex-col max-w-[75ch]">
        <div className="flex flex-col space-y-6 mb-12">
          <h3>Introduction</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            cumque id, inventore expedita delectus quidem non placeat maxime
            sequi quibusdam nesciunt veritatis ea ratione, amet vitae saepe
            voluptatibus quo sunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            dolores voluptates quaerat blanditiis non magni ea perferendis quo
            quos accusamus mollitia autem a natus facere temporibus sunt, sed
            dolore porro!
          </p>
          <br />

          <img
            className="aspect-[2/1] max-w-full mb-3 rounded-2xl object-cover object-center"
            src="./images/img.jpg"
            alt="article_id"
          />
          <div className="border-l-black border-l-2 p-4 ">
            <p className="text-fs-md">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              facilis commodi explicabo natus obcaecati ea necessitatibus odio
              molestiae id, vel iste voluptatum pariatur sed amet veritatis
              harum tempore fugiat possimus."
            </p>
          </div>
          <br />

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
            aliquam non. Odit harum maxime quis esse fugiat non, ipsa, error
            sunt accusamus saepe perspiciatis. Ab facilis magnam corrupti cum
            minima!
          </p>
        </div>

        <div className="flex flex-col space-y-6">
          <h3>Conclusion</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
            cupiditate numquam. Blanditiis aliquid officiis dolore inventore
            iure deleniti sit enim accusantium. Distinctio dignissimos nobis
            iusto harum delectus voluptatem quas natus!
          </p>
        </div>
      </section>

      <section>
        <Articles />
      </section>

      <section>
        <div className="flex flex-col hc-Background--primary rounded-3xl">
          <div className="flex flex-col justify-center text-center items-center space-y-6 py-16">
            <h2 className="font-bold">Subscribe to our newsletter</h2>
            <p className="text-fs-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>

            <EmailForm confirmText={true} />
          </div>
        </div>
      </section>
    </>
  );
}
