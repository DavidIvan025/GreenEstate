import React from "react";
import Button from "../components/ui/Button";

export default function Contact() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-[68%,1fr]">
          <div className="mb-16 flex flex-col gap-3 lg:mr-44">
            <p className="text-fs-md">Contact Us</p>
            <h3>Get In Touch With Us</h3>
            <p className="text-fs-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              harum nostrum voluptate id excepturi quaerat deserunt veniam
              eligendi quisquam qui. Aspernatur vero autem dolor minus est
              accusantium. Quisquam, eos asperiores.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-center">
                <div className="inline-flex max-w-[4.375rem] items-center justify-center bg-primary-light p-2">
                  <img
                    className="min-w-full object-cover object-center"
                    src="./images/img.jpg"
                    alt="about_id"
                  ></img>
                </div>
                <div className="px-4">
                  <p className="pb-3 text-fs-md">Our Location</p>
                  <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <form
            action="#"
            className="relative grid grid-flow-row gap-y-3 rounded-lg bg-white p-6 shadow-xl"
          >
            <img
              className="absolute right-0 top-0 -z-10 size-48 -translate-y-12 translate-x-10 object-cover object-center"
              src="./images/bg-wall.jpg"
              alt="about_id8"
            ></img>
            <input
              className="rounded-md border border-gray px-5 py-3 text-fs-sm"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
            <input
              className="rounded-md border border-gray px-5 py-3 text-fs-sm"
              type="text"
              name="mail"
              id="mail"
              placeholder="Your Email"
            />
            <input
              className="rounded-md border border-gray px-5 py-3 text-fs-sm"
              type="text"
              name="c_name"
              id="c_name"
              placeholder="Company Name"
            />
            <textarea
              className="mb-3 rounded-md border border-gray p-5 text-fs-sm"
              name="msg"
              id="msg"
              placeholder="Your Message"
            />
            <Button>Submit</Button>
            <img
              className="absolute bottom-0 left-0 -z-10 size-24 -translate-x-8 -translate-y-6 object-cover object-left-bottom"
              src="./images/dots-1.png"
              alt="about_id7"
            ></img>
          </form>
        </div>
      </section>
    </>
  );
}
