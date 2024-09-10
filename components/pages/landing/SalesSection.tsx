import React from "react";
import SalesCard from "../../ui/SalesCard";
import PartnersSection from "./PartnerSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SalesSection() {
  const sales = [
    {
      image: "/assets/Frame1.png",
      title: "Da Viper",
      creator: "Tom Edison",
      amount: "45.50 USD",
      creatorAvatar: "/assets/Frame1.png",
    },
    {
      image: "/assets/Frame1.png",
      title: "Da Viper",
      creator: "Tom Edison",
      amount: "45.50 USD",
      creatorAvatar: "/assets/Frame1.png",
    },
    {
      image: "/assets/Frame1.png",
      title: "Da Viper",
      creator: "Tom Edison",
      amount: "45.50 USD",
      creatorAvatar: "/assets/Frame1.png",
    },
    {
      image: "/assets/Frame1.png",
      title: "Da Viper",
      creator: "Tom Edison",
      amount: "45.50 USD",
      creatorAvatar: "/assets/Frame1.png",
    },
  ];

  return (
    <section className="py-16 bg-black">
      <PartnersSection />
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">Trending Sales</h2>
        <p className="text-gray-400 mt-2">
          Explore our weekly highlights of AI-guided custom artwork created by
          top artists.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sales.map((sale, index) => (
            <SalesCard
              key={index}
              image={sale.image}
              title={sale.title}
              creator={sale.creator}
              amount={sale.amount}
              creatorAvatar={sale.creatorAvatar}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/commission">
            <Button className="bg-indigo-600">
              Submit your art commission
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
