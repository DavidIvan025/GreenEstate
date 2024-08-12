import React from "react";
import FAQ from "../components/FAQ";

export default function Shop() {
  return (
    <>
      <main>
        <section className="flex flex-col justify-center lg:flex-row">
          <div className="flex-[50%]">
            <p className="pb-2 font-semibold">Shop</p>
            <h3>Shop our branding materials</h3>
          </div>
          <div className="mt-8 flex-[50%] lg:mt-0">
            <p className="text-fs-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
        </section>
      </main>

      <section className="full-width bg-[#F5FAFF]">
        <div className="mb-12 flex flex-col text-center">
          <h2>Our Products</h2>
          <p className="pt-6 text-fs-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-flow-row grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl p-4 shadow-md">
            <img
              className="rounded-t-xl object-cover object-center"
              src="./images/img.jpg"
              alt="about_id"
            ></img>
            <div className="pt-4">
              <h5>Product Name</h5>
              <p className="pt-4 text-fs-lg">$55</p>
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
