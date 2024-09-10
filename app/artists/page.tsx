import React from "react";
import AppBar from "@/components/layout/AppBar";
import Footer from "@/components/layout/Footer";
import { Search, Upload } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AppBar />

      {/* Backdrop Section */}
      <div
        className="w-screen h-[400px] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/black-geometry-bg.png')" }}
      >
        <div className="flex flex-col items-center justify-center h-full w-full px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center leading-snug">
            Welcome Artists
          </h1>
          <p className="mt-4 text-md md:text-lg text-gray-300 text-center max-w-xl">
            Share your talent with the world with AfriCanvas
          </p>
        </div>
      </div>

      {/* Banner Image Section */}
      <div className="hidden md:flex justify-center mt-16 px-4">
        <a
          href="#"
          className="block w-full max-w-[1400px] h-[250px] rounded-[25px_0_0_0] bg-cover bg-center"
          style={{ backgroundImage: "url('/artists-page-banner.png')" }}
        ></a>
      </div>

      {/* Search Bar and Controls Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-16 px-4 space-y-6 md:space-y-0 md:space-x-6 max-w-6xl mx-auto">
        <div className="relative w-full flex-grow">
          <input
            type="text"
            placeholder="Search for a model by name or attribute"
            className="w-full py-3 pl-12 pr-4 bg-transparent text-white border border-gray-500 focus:outline-none rounded-md hover:border-white transition-all"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search />
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <Select defaultValue="low-to-high">
            <SelectTrigger className="bg-transparent text-white border border-gray-500 rounded-md px-4 py-6 hover:border-white transition-all">
              <span>Sort by</span>
            </SelectTrigger>
            <SelectContent className="bg-black text-white border border-gray-500 rounded-md">
              <SelectItem value="low-to-high">Price: Low to High</SelectItem>
              <SelectItem value="high-to-low">Price: High to Low</SelectItem>
              <SelectItem value="most-recent">Most Recent</SelectItem>
              <SelectItem value="most-popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative flex-shrink-0">
          <button className="flex items-center justify-center px-6 py-3 bg-[#A259FF] text-white border border-[#A259FF] rounded-md hover:bg-purple-300 transition-all">
            <Upload size={20} className="mr-2" />
            <span>Upload</span>
          </button>
        </div>
      </div>

      {/* Cards Grid Section */}
      <div className="mt-14 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {/* Card Example */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-lg overflow-hidden w-full transform hover:scale-105 transition-transform"
            >
              {/* Top 2/3: Image */}
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: "url('/example-art.png')" }}
              ></div>

              {/* Bottom 1/3: Art Name & Artist */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">Art Piece Name</h3>
                <div className="flex items-center mt-3">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/avatar-placeholder.png"
                    alt="Artist Avatar"
                  />
                  <span className="ml-2 text-gray-300">ArtistUsername</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 bg-transparent border text-[#A259FF] border-[#A259FF] rounded-md hover:bg-purple-300 transition-all">
          Load More
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Page;
