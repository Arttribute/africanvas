import React from "react";

type CategoryCardProps = {
  image: string;
  icon: React.ReactElement;
  label: string;
};

function CategoryCard({ image, icon, label }: CategoryCardProps) {
  return (
    <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={label} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-5xl">{icon}</div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-75 text-center">
        <span className="text-white font-semibold">{label}</span>
      </div>
    </div>
  );
}

export default CategoryCard;
