import React from "react";
import Button from "./ui/Button";

export default function FAQ() {
  return (
    <>
      <div className="wrapper-Faq">
        <div className="mb-12 flex flex-col items-center space-y-6">
          <h2 className="text-center font-bold">Frequently Asked Questions</h2>
          <p className="text-fs-md">
            Find answers to commonly asked questions about real estate
            transactions and using our website.
          </p>
        </div>

        <details className="border-y-2 border-gray py-4">
          <summary className="flex cursor-pointer items-center" open>
            <div className="grow select-none text-fs-md font-bold">
              How do I search for properties?
            </div>
            <svg
              className="size-4"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </summary>
          <p className="mt-4 text-fs-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </details>

        <div className="mx-auto mt-12 flex max-w-[35rem] flex-col items-center justify-center space-y-4 rounded-2xl bg-primary-light p-6 text-center">
          <h4 className="font-bold">Still have questions</h4>
          <p className="text-fs-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button>Contact</Button>
        </div>
      </div>
    </>
  );
}
