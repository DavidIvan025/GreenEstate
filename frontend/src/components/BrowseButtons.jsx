import React, { useEffect, useState } from "react";
import { cards } from "../services/providers/testData";

export default function BrowseButtons({ setFilteredCards }) {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const filtered = cards.filter((card) =>
      card.location.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setFilteredCards(filtered);
  }, [searchInput, setFilteredCards]);

  const [filters, setFilters] = useState({
    location: "",
    type: "",
    price: "",
    prop_type: "",
  });

  useEffect(() => {
    let filtered = cards;

    if (filters.location) {
      filtered = filtered.filter((card) =>
        card.location.toLowerCase().includes(filters.location.toLowerCase()),
      );
    }
    if (filters.type) {
      filtered = filtered.filter(
        (card) => card.type.toLowerCase() === filters.type.toLowerCase(),
      );
    }
    if (filters.price) {
      filtered =
        filters.price === "lth"
          ? filtered.sort((a, b) => a.price - b.price)
          : filtered.sort((a, b) => b.price - a.price);
    }
    if (filters.prop_type) {
      filtered = filtered.filter(
        (card) =>
          card.prop_type.toLowerCase() === filters.prop_type.toLowerCase(),
      );
    }

    setFilteredCards(filtered);
  }, [filters]);

  const updateFilter = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex min-h-12 w-full flex-col gap-4 md:flex-row md:flex-wrap">
      <div className="relative flex max-w-full flex-[2] items-center">
        <input
          className="min-h-full min-w-full rounded-3xl border border-gray py-2 pl-4 pr-20 text-fs-sm"
          type="text"
          name="search"
          id="search"
          placeholder="Search location"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <input
          className="absolute right-3 p-2 text-primary"
          type="button"
          id="btn-search"
          value="Search"
        />
      </div>
      <FilterButton
        title="Location"
        name="location"
        options={[
          "Churchill Walk, London",
          "Las Vegas",
          "United Kingdom",
          "Florida",
          "London",
          "Washington D.C",
        ]}
        updateFilter={updateFilter}
      />
      <FilterButton
        title="Type"
        name="type"
        options={["Industrial", "Commercial", "Residential"]}
        updateFilter={updateFilter}
      />
      <FilterButton
        title="Price"
        name="price"
        options={[
          { label: "Lowest to High", value: "lth" },
          { label: "High to Low", value: "htl" },
        ]}
        updateFilter={updateFilter}
      />
      <FilterButton
        title="Property Type"
        name="prop_type"
        options={[
          "Sale",
          "New Listing",
          "Rent",
          "Land",
          "Shared Ownership",
          "Construction",
        ]}
        updateFilter={updateFilter}
      />
    </div>
  );
}

function FilterButton({ title, name, options, updateFilter }) {
  return (
    <div className="min-w-56 flex-1 rounded-3xl border border-gray py-2 pl-[1.8rem] pr-1 align-middle">
      <div className="flex items-center">
        <svg
          className="mr-3 size-5 stroke-black"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
        </svg>
        <label htmlFor={name}>{title}</label>
        <svg
          className="ml-auto mr-3 size-6 stroke-black"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>

      <select
        className="min-w-full"
        id={name}
        name={name}
        onChange={(e) => updateFilter(name, e.target.value)}
      >
        {options.map((option) =>
          typeof option === "object" ? (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ) : (
            <option key={option} value={option}>
              {option}
            </option>
          ),
        )}
      </select>
    </div>
  );
}
