import React from "react";
import { FaTh, FaList, FaComments } from "react-icons/fa";

export default function SearchFilterSection() {
  return (
    <section className="bg-black text-white py-4">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <input
          type="text"
          placeholder="Search for a model by name or attribute"
          className="w-full max-w-xs p-3 rounded-lg border border-white bg-black text-white placeholder-gray-500"
        />
        <div className="flex items-center lg:space-x-2 space-x-2"> 
          <select className="p-3 rounded-lg border border-white bg-black text-white">
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <div className="flex space-x-2">
            <FaTh />
            <FaList />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
            <FaComments />
            <span>Message</span>
          </button>
        </div>
      </div>
    </section>
  );
}

