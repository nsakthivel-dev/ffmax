import React, { useState, useEffect } from 'react';
import { Menu, X, Radio, Sparkles, Trophy, ChevronRight } from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';

export default function Navbar({ onOpenPoster }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Mobile active section detection
      const sections = ['home', 'tournament', 'maps', 'rules', 'host', 'technical-partner', 'contact'];
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Tournament', href: '#tournament', id: 'tournament' },
    { name: 'Maps', href: '#maps', id: 'maps' },
    { name: 'Rules', href: '#rules', id: 'rules' },
    { name: 'Host', href: '#host', id: 'host' },
    { name: 'Technical Partner', href: '#technical-partner', id: 'technical-partner' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0705]/95 backdrop-blur-xl border-b border-amber-500/35 shadow-2xl shadow-black/90 py-2 sm:py-2' 
          : 'bg-gradient-to-b from-[#0a0705]/95 via-[#0a0705]/60 to-transparent py-2.5 sm:py-3.5'
      }`}
    >
      {/* Top Telemetry Ticker Ribbon - Desktop only */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-1.5 text-[10px] font-tech text-slate-400 border-b border-amber-500/15">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>COMMUNITY ESPORTS TOURNAMENT // SEASON 2026</span>
          </span>
          <span className="text-amber-500/40">|</span>
          <span className="text-slate-300 font-semibold tracking-widest">FORMAT: SOLO BATTLE ROYALE</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-amber-300/80 tracking-widest font-bold">HOST: FFM MUKESH</span>
          <span className="text-amber-500/40">|</span>
          <span className="text-cyan-400/90 tracking-widest font-bold">TECH: RC INNOVATIONS</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-0.5 sm:mt-1">
        <div className="flex items-center justify-between">
          
          {/* Official Free Fire MAX Brand Logo (Responsive for Mobile & Desktop) */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group btn-tactical">
            <div className="relative flex items-center justify-center h-9 sm:h-11 px-2.5 sm:px-3 py-1 rounded-xl bg-gradient-to-r from-amber-500/15 via-[#0e0804] to-orange-500/15 border border-amber-500/40 shadow-lg shadow-amber-500/25 group-hover:border-amber-400 group-hover:shadow-amber-400/50 transition-all">
              <img 
                src={TOURNAMENT_CONFIG.logo?.src || "/assets/branding/logo.png"} 
                alt={TOURNAMENT_CONFIG.logo?.alt || "Free Fire MAX Official Logo"} 
                className="h-6 sm:h-8 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(245,158,11,0.6)] group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="hidden sm:block border-l border-amber-500/30 pl-2.5">
              <div className="font-heading font-black text-xs sm:text-sm tracking-widest text-white leading-tight">
                TOURNAMENT
              </div>
              <div className="text-[9px] uppercase font-tech tracking-widest text-amber-300 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span>SEASON 2026</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links (Unchanged) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="btn-tactical px-3 py-1.5 rounded-lg text-xs xl:text-sm font-bold text-slate-200 hover:text-amber-300 hover:bg-amber-500/15 border border-transparent hover:border-amber-500/30 transition-all font-tech tracking-wider uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs (Desktop unchanged) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenPoster}
              className="btn-tactical px-3.5 py-2 rounded-xl text-xs font-bold text-amber-300 bg-[#170e08]/90 hover:bg-[#25170d] border border-amber-500/40 hover:border-amber-400 transition-all font-tech tracking-wider uppercase shadow-md flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>VIEW POSTER</span>
            </button>
            <a
              href="#maps"
              className="btn-tactical clip-corner px-5 py-2.5 text-xs font-black text-black bg-gradient-to-r from-amber-400 via-amber-300 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-lg shadow-amber-500/35 hover:shadow-amber-400/50 transition-all font-heading tracking-wider uppercase flex items-center gap-1.5"
            >
              <span>REGISTER NOW</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Action Controls (Quick Poster + Touch Hamburger) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenPoster}
              className="sm:hidden btn-tactical p-2 rounded-xl text-amber-300 bg-[#140e09]/90 border border-amber-500/35 flex items-center justify-center"
              aria-label="View Poster"
              title="View Tournament Poster"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn-tactical min-w-[44px] min-h-[44px] p-2.5 rounded-xl text-slate-200 hover:text-white bg-[#140e09]/95 hover:bg-amber-950/60 focus:outline-none border border-amber-500/40 flex items-center justify-center transition-colors shadow-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5 text-amber-400" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Optimized for thumb reach, active state & zero overflow) */}
      {isOpen && (
        <div className="lg:hidden bg-[#0c0805]/98 backdrop-blur-2xl border-b border-amber-500/40 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          {/* Active Status Header in Mobile Drawer */}
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-amber-500/20 text-[11px] font-tech text-slate-400">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>FREE FIRE MAX TOURNAMENT</span>
            </span>
            <span className="text-amber-300/80 font-bold">SOLO BR</span>
          </div>

          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`btn-tactical min-h-[44px] px-4 py-2.5 rounded-xl text-sm font-bold font-tech tracking-wider uppercase transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-transparent text-amber-300 border border-amber-500/50 shadow-sm'
                      : 'text-slate-200 hover:text-amber-300 hover:bg-amber-500/10 border border-transparent hover:border-amber-500/30'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />}
                    <span>{link.name}</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-amber-400 translate-x-0.5' : 'text-slate-500'}`} />
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-amber-500/25 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenPoster();
              }}
              className="btn-tactical w-full min-h-[46px] py-3 rounded-xl text-xs font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-center font-tech tracking-wider uppercase flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>VIEW TOURNAMENT POSTER</span>
            </button>
            <a
              href="#maps"
              onClick={handleLinkClick}
              className="btn-tactical clip-corner w-full min-h-[46px] py-3 text-center text-xs font-black text-black bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-xl shadow-amber-500/30 font-heading tracking-wider uppercase flex items-center justify-center gap-1.5 active:scale-95 transition-all"
            >
              <span>REGISTER NOW (6 MAPS)</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
