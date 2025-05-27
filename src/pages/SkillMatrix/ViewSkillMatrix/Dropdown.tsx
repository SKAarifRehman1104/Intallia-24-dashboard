import React from "react";

const Dropdown = () => {
  return (
    <div className="w-full max-w-3xl mx-auto font-plusJakarta">
      <div className="relative">
        <select className="w-full  appearance-none border border-gray-300 rounded px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option>Select Scenario</option>

          <option>Scenario 1</option>
          <option>Scenario 2</option>
          <option>Scenario 3</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.516 7.548L10 12.032l4.484-4.484 1.032 1.032L10 14.096 4.484 8.58z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
