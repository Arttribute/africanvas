import React from "react";
import AppBar from "@/components/layout/AppBar";
import { Search, Grid, List, LayoutGrid, SendHorizontal } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

function page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AppBar />

      {/* Backdrop Section */}
      <div
        className="w-screen h-[397px] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/black-geometry-bg.png')" }}
      >
        <div className="flex flex-col items-center justify-center h-full w-full px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Welcome Artists
          </h1>
          <p className="mt-4 text-md md:text-lg text-white text-center">
            Share your talent with the world with AfriCanvas
          </p>
        </div>
      </div>

      {/* Banner Image Section */}
      <div className="hidden md:flex justify-center mt-14 px-4">
        <a
          href="#"
          className="block w-full max-w-[1387px] h-[248px] rounded-[25px_0_0_0] bg-cover bg-center"
          style={{ backgroundImage: "url('/artists-page-banner.png')" }}
        ></a>
      </div>

      {/* Search Bar and Controls Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 px-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full max-w-4xl flex-grow">
          <input
            type="text"
            placeholder="Search for a model by name or attribute"
            className="w-full py-2 pl-12 pr-4 bg-transparent text-white border border-gray-500 focus:outline-none rounded-md"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search />
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <Select defaultValue="low-to-high">
            <SelectTrigger className="bg-transparent text-white border border-gray-500 rounded-md">
              <span>Sort by</span>
            </SelectTrigger>
            <SelectContent className="bg-transparent text-white border border-gray-500 rounded-md">
              <SelectItem value="low-to-high">Price: Low to High</SelectItem>
              <SelectItem value="high-to-low">Price: High to Low</SelectItem>
              <SelectItem value="most-recent">Most Recent</SelectItem>
              <SelectItem value="most-popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative flex-shrink-0">
          <ToggleGroup type="single" defaultValue="grid-2x2">
            <ToggleGroupItem
              value="grid-2x2"
              className="flex items-center justify-center p-2 bg-transparent text-white border border-gray-500 rounded-md"
              aria-label="2x2 Grid Layout"
            >
              <Grid size={20} />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="list"
              className="flex items-center justify-center p-2 bg-transparent text-white border border-gray-500 rounded-md"
              aria-label="List Layout"
            >
              <List size={20} />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="grid-3x3"
              className="flex items-center justify-center p-2 bg-transparent text-white border border-gray-500 rounded-md"
              aria-label="3x3 Grid Layout"
            >
              <LayoutGrid size={20} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="relative flex-shrink-0">
          <button className="flex items-center justify-center px-4 py-2 bg-[#A259FF] text-white border border-[#A259FF] rounded-md">
            <SendHorizontal size={20} className="mr-2" />
            <span>Message</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
