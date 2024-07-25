import React from "react";

export default function BrowseButtons() {
  return (
    <div className="flex min-h-12 w-full flex-col gap-4 md:flex-row md:flex-wrap">
      <div className="relative flex max-w-full flex-[2] items-center">
        <input
          className="min-w-full rounded-3xl border border-gray py-2 pl-4 pr-20"
          type="text"
          name="search"
          id="search"
          placeholder="Search location"
        />
        <input
          className="absolute right-3 p-2 text-primary"
          type="button"
          id="btn-search"
          value="Search"
        />
      </div>
      <div className="min-w-56 flex-1 rounded-3xl border border-gray py-2 pl-[1.8rem] pr-1 align-middle">
        <div className="flex items-center">
          <svg
            className="mr-3 size-5 stroke-black"
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
          <label className="" for="location">
            Location
          </label>
          <svg
            className="ml-auto mr-3 size-6 stroke-black"
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
                d="M7 10L12 15L17 10"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </div>

        <select className="hidden" id="location" name="location">
          <option value="brisol">Brisol</option>
          <option value="liverpool">Liverpool</option>
          <option value="manchester">Manchester</option>
          <option value="gosport">Gosport</option>
          <option value="london">London</option>
        </select>
      </div>
    </div>
  );
}
