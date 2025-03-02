import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">Showcase and sell your art in the most awesome art marketplace</h1>
        <a href="/upload" className="inline-block mt-8 text-purple-400 font-bold text-lg hover:underline">
          Upload your work &rarr;
        </a>
      </div>
    </div>
  </section>
  );
}
