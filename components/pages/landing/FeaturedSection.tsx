import React from "react";
import SalesCard from "@/components/ui/SalesCard";  

export default function FeaturedSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-950 via-black to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Experience AI-Guided Custom Artwork
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-8">
            The world's largest marketplace where AI helps you communicate your vision, and our top digital artists bring it to life.
          </p>
          <div className="flex space-x-8 mb-8">
            <div>
              <h3 className="text-4xl font-bold text-purple-500">999,000</h3>
              <p className="text-gray-400">Artwork Created</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-purple-500">2,000</h3>
              <p className="text-gray-400">Artists</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-purple-500">10,000</h3>
              <p className="text-gray-400">Satisfied Clients</p>
            </div>
          </div>
          <button className="px-8 py-3 border border-white text-white rounded-lg hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <SalesCard 
            image="/assets/Frame2.png"
            title="Da Viper"
            creator="Tom Edison"
            amount="45.50"
            creatorAvatar="/assets/Frame2.png"
          />
          <SalesCard 
            image="/assets/Frame2.png"
            title="Da Viper"
            creator="Tom Edison"
            amount="45.50"
            creatorAvatar="/assets/Frame2.png"
          />
          <SalesCard 
            image="/assets/Frame2.png"
            title="Da Viper"
            creator="Tom Edison"
            amount="45.50"
            creatorAvatar="/assets/Frame2.png"
          />
          <SalesCard 
            image="/assets/Frame2.png"
            title="Da Viper"
            creator="Tom Edison"
            amount="45.50"
            creatorAvatar="/assets/Frame2.png"
          />
        </div>
        
      </div>
    </section>
  );
}
