import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TournamentStats from '../components/TournamentStats';
import PromotionPoster from '../components/PromotionPoster';
import MapRegistration from '../components/MapRegistration';
import TournamentRules from '../components/TournamentRules';
import YouTuberSection from '../components/YouTuberSection';
import TechnicalPartner from '../components/TechnicalPartner';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import PosterModal from '../components/PosterModal';
import BulletFx from '../components/BulletFx';

export default function Home({ onSelectMatch }) {
  const [selectedPoster, setSelectedPoster] = useState(null);

  const handleOpenPoster = (poster = null) => {
    setSelectedPoster(poster || true);
  };
  const handleClosePoster = () => setSelectedPoster(null);

  return (
    <div className="min-h-screen text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black relative">
      {/* Interactive Tactical Bullet Impact & Sparks System */}
      <BulletFx />

      {/* Primary AAA Background Layer from opening.jpg */}
      <div className="site-bg-wrapper" aria-hidden="true" />

      {/* Sticky Gaming Navigation Bar */}
      <Navbar onOpenPoster={handleOpenPoster} onSelectMatch={onSelectMatch} />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {/* Cinematic Hero Section */}
        <Hero onOpenPoster={handleOpenPoster} onSelectMatch={onSelectMatch} />

        {/* Tournament Metrics & Structure (ESPORTS COMMAND CENTER) */}
        <TournamentStats onSelectMatch={onSelectMatch} onOpenPoster={handleOpenPoster} />

        {/* Official Promotional Poster Showcase */}
        <PromotionPoster onOpenPoster={handleOpenPoster} />

        {/* 3-Card Infinite Circular Map Carousel */}
        <MapRegistration onSelectMatch={onSelectMatch} />

        {/* Official Tournament Rules */}
        <TournamentRules />

        {/* Official Host: FFM Mukesh (YouTube + Discord) */}
        <YouTuberSection />

        {/* Technical Partner: RC Innovations */}
        <TechnicalPartner />

        {/* Community FAQ & Help Desk */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenPoster={handleOpenPoster} />

      {/* Enlarged Tournament Poster Lightbox Modal */}
      <PosterModal 
        isOpen={Boolean(selectedPoster)} 
        onClose={handleClosePoster} 
        poster={typeof selectedPoster === 'object' && selectedPoster ? selectedPoster : undefined}
      />
    </div>
  );
}
