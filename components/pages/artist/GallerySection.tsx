import React from "react";
import SalesCard from "../../ui/SalesCard";

export default function SalesGallerySection() {
    const salesItems = [
      { image: "/assets/Frame1.png", title: "Da Viper", creator: "Tom Edison", amount: "45.50 USD", creatorAvatar: "/assets/Frame1.png" },
      { image: "/assets/Frame1.png", title: "Red devil", creator: "Jane Doe", amount: "45.50 USD",  creatorAvatar: "/assets/Frame1.png" },
      { image: "/assets/Frame1.png", title: "Evan SH", creator: "John Smith", amount: "45.50 USD", creatorAvatar: "/assets/Frame1.png" },
      { image: "/assets/Frame1.png", title: "Practice 1", creator: "Alice", amount: "FREE", creatorAvatar: "/assets/Frame1.png" },
      { image: "/assets/Frame1.png", title: "Spirit Lady", creator: "Bob", amount: "65.50 USD", creatorAvatar: "/assets/Frame1.png" },
      { image: "/assets/Frame2.png", title: "Practice 2", creator: "Eve", amount: "FREE", creatorAvatar: "/assets/Frame2.png" },
      { image: "/assets/Frame2.png", title: "102 Fantasy skin", creator: "Tom Edison", amount: "20.00 USD", creatorAvatar: "/assets/Frame2.png" },
      { image: "/assets/Frame2.png", title: "snorri", creator: "Jane Doe", amount: "45.50 USD", creatorAvatar: "/assets/Frame2.png" },
      { image: "/assets/Frame2.png", title: "Yasha Nyakrevs", creator: "John Smith", amount: "40.50 USD", creatorAvatar: "/assets/Frame2.png" },
    ];
  
    return (
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {salesItems.map((item, index) => (
              <SalesCard
                key={index}
                image={item.image}
                title={item.title}
                creator={item.creator}
                amount={item.amount}
                creatorAvatar={item.creatorAvatar} 
              />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700">
              Load More
            </button>
          </div>
        </div>
      </section>
    );
    }
