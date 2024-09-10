import React from "react";
import { FaPaintBrush, FaMusic, FaCamera, FaFilm, FaGamepad, FaPencilRuler, FaPhotoVideo, FaIcons } from "react-icons/fa";  
import CategoryCard from "../../ui/CategoryCard";  

export default function CategoriesSection() {
  const categories = [
    { image: "/assets/digital-art.png", icon: <FaPaintBrush />, label: "Digital Art" },
    { image: "/assets/game-assets.png", icon: <FaIcons />, label: "Game Assets" },
    { image: "/assets/audio.png", icon: <FaMusic />, label: "Audio" },
    { image: "/assets/photography.png", icon: <FaCamera />, label: "Photography" },
    { image: "/assets/animation.png", icon: <FaFilm />, label: "Animation" },
    { image: "/assets/modelling.png", icon: <FaPencilRuler />, label: "Modeling" },
    { image: "/assets/game-art.png", icon: <FaGamepad />, label: "Game Art" },
    { image: "/assets/illustration.png", icon: <FaPhotoVideo />, label: "Illustration" },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-8">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              image={category.image}
              icon={category.icon}
              label={category.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
