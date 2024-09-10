import React from "react";

interface SalesCardProps {
  image: string;
  title: string;
  creator: string;
  amount: string;
  creatorAvatar: string;
}

export default function SalesCard({ image, title, creator, amount, creatorAvatar }: SalesCardProps) {
  return (
    <div className="bg-gray-950 rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3> {/* Artist name at the top */}

        <div className="flex items-center justify-between">
          {/* Creator Details */}
          <div className="flex items-center">
            <img src={creatorAvatar} alt={creator} className="w-8 h-8 rounded-full mr-2" /> {/* Avatar */}
            <div className="flex flex-col">
              <span className="text-gray-400 text-sm">Creator</span>
              <span className="text-white text-sm">{creator}</span>
            </div>
          </div>

          {/* Amount Details */}
          <div className="flex flex-col items-end">
            <span className="text-gray-400 text-sm">Amount</span>
            <span className="text-white text-sm">{amount} USD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
