import React from "react";
import DescribeCommission from "@/components/imagegen/DescribeCommission";
import AppBar from "@/components/layout/AppBar";
import SubscribeSection from "@/components/pages/landing/SubscribeSection";

export default function Home() {
  return (
    <div>
      <AppBar />
      <div className="relative flex flex-col items-center justify-center w-full py-16 bg-gradient-to-r from-purple-900 via-black to-black text-white">
        <DescribeCommission />
      </div>
      <div>
        <SubscribeSection />
      </div>
    </div>
  );
}
