import React from "react";

export default function Testimonials() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 pb-12">
        <h2 className="font-bold">Customer Testimonials</h2>
        <p className="text-fs-md">Read what our clients have to say about us</p>
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
    </>
  );
}
