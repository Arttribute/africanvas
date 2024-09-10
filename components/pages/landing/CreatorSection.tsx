import React from "react";
import CreatorCard from "@/components/ui/CreatorCard";

export default function TopCreatorsSection() {
  const creators = [
    { rank: 1, avatar: "/assets/Frame2.png", name: "Keepitreal", sales: "34.5K" },
    { rank: 2, avatar: "/assets/Frame2.png", name: "DigiLab", sales: "34.5K" },
    { rank: 3, avatar: "/assets/Frame2.png", name: "GravityOne", sales: "34.5K" },
    { rank: 4, avatar: "/assets/Frame2.png", name: "Juanie", sales: "34.5K" },
    { rank: 5, avatar: "/assets/Frame2.png", name: "BlueWhale", sales: "34.5K" },
    { rank: 6, avatar: "/assets/Frame2.png", name: "Mr Fox", sales: "34.5K" },
    { rank: 7, avatar: "/assets/Frame2.png", name: "Shroomie", sales: "34.5K" },
    { rank: 8, avatar: "/assets/Frame2.png", name: "Robotica", sales: "34.5K" },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-white">Top Creators</h2>
          <div className="lg:w-1/4 flex justify-end">
            <button className="text-white border border-purple-600 rounded-lg px-4 py-2 hover:bg-purple-600">
              <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l4-4 4 4m0-6l-4-4-4 4" />
              </svg>
              View Rankings
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {creators.map((creator) => (
            <CreatorCard
              key={creator.rank}
              rank={creator.rank}
              avatar={creator.avatar}
              name={creator.name}
              sales={creator.sales}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
