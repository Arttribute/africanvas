import React from "react";

export default function ImageBanner() {
  return (
    <section className="relative bg-black text-white">
    <div className="relative w-full">
      <img 
        src="/assets/banner.png" 
        alt="Art Banner" 
        className="w-full h-64 object-cover" 
      />
    </div>
  </section>
  );
}
