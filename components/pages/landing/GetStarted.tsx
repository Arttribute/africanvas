import React from "react";
import { FaUpload, FaClipboardList, FaTag } from "react-icons/fa"; 

function StepCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-black rounded-xl shadow-lg p-6 text-center border border-gray-600">
      <div className="flex justify-center mb-4">
        <div className="bg-gray-900 rounded-full p-4">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default function GetStartedSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-12">Get Started In 3 Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            icon={<FaUpload color="#7C3AED" size={48} />}  // Apply color and size directly
            title="Upload your best art"
            description="Start the upload by creating an account"
          />
          <StepCard
            icon={<FaClipboardList color="#10B981" size={48} />} // Apply color and size directly
            title="Fill out the product info"
            description="Fill out the required information and pricing and you are set"
          />
          <StepCard
            icon={<FaTag color="#EF4444" size={48} />} // Apply color and size directly
            title="Start Selling & Growing"
            description="Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!"
          />
        </div>
      </div>
    </section>
  );
}
