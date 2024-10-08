import React from 'react';
import AppBar from '@/components/layout/AppBar';
import HeroSection from './HeroSection';
import Footer from '@/components/layout/Footer';
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import SalesSection from './SalesSection';
import CreatorSection from './CreatorSection';
import GetStartedSection from './GetStarted';
import SubscribeSection from './SubscribeSection';

const Index = () => {
  return (
    <div>
      <AppBar />

      <main>
        <HeroSection />
        <SalesSection />
        <CreatorSection />
        <GetStartedSection />
        <SubscribeSection />
  
      </main>

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
          privacyPolicyLink="/privacy-policy"
      />
    </div>
  );
};

export default Index;
