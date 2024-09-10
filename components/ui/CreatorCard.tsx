import React from "react";

interface CreatorCardProps {
  rank: number;
  avatar: string;
  name: string;
  sales: string;
}

export default function CreatorCard({ rank, avatar, name, sales }: CreatorCardProps) {
  return (
    <div className="bg-gradient-to-r from-black to-purple-950 via-black rounded-xl shadow-lg p-4 flex flex-col justify-center items-center w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
      <div className="relative">
        <div className="absolute top-[-20px] left-[-40px] bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center">
          {rank}
        </div>
        <img src={avatar} alt={name} className="rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mb-4" />
      </div>
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="text-gray-400">Total Sales: <span className="text-white">{sales} USD</span></p>
    </div>
  );
}

