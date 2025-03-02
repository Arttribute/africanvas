import React from "react";
import AppBar from "../../layout/AppBar";
import HeroSection from "./HeroSection";
import SearchFilterSection from "./SearchFilter";
import ImageBanner from "./Banner";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from "../../layout/Footer";
import GallerySection from "./GallerySection";

export default function HomePage() {
  return (
      <>
      <AppBar />
      <ImageBanner />
      <HeroSection />
      <SearchFilterSection />
      <GallerySection />
      <Footer
          sections={[
              {
                  title: "AfriCanvas",
                  links: [
                      { name: "Explore", href: "/explore" },
                      { name: "Digital Art", href: "/digital-art" },
                      { name: "About", href: "/about" },
                  ],
              },
              {
                  title: "My Account",
                  links: [
                      { name: "Profile", href: "/profile" },
                      { name: "Favourites", href: "/favourites" },
                      { name: "Watchlist", href: "/watchlist" },
                      { name: "My Collections", href: "/collections" },
                      { name: "Settings", href: "/settings" },
                  ],
              },
              {
                  title: "Resources",
                  links: [
                      { name: "Platform Status", href: "/status" },
                      { name: "Partners", href: "/partners" },
                      { name: "Taxes", href: "/taxes" },
                      { name: "Newsletter", href: "/newsletter" },
                  ],
              },
              {
                  title: "Community",
                  links: [
                      { name: "Help Center", href: "/help-center" },
                      { name: "Suggest Feature", href: "/suggest-feature" },
                      { name: "Subscribe", href: "/subscribe" },
                  ],
              },
          ]}
          socialLinks={[
              { icon: <FaTwitter />, href: "https://twitter.com" },
              { icon: <FaInstagram />, href: "https://instagram.com" },
              { icon: <FaLinkedin />, href: "https://linkedin.com" },
          ]}
          copyrightText="© AfriCanvas, Inc © All Rights Reserved"
          termsLink="/terms"
          privacyPolicyLink="/privacy-policy" /></>
  );
}
