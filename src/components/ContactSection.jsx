import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Youtube, Globe, ExternalLink, ShieldCheck, Users, Radio } from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';

// Discord SVG Icon
function DiscordIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "Can I register for more than one map?",
      a: "No. Each player and Free Fire UID is strictly restricted to ONE map only. If duplicate UID registrations are detected across different forms, all entries by that player will be invalidated."
    },
    {
      q: "How do I register for a tournament map?",
      a: "Browse the interactive maps carousel, click 'Register' or 'Details' on your preferred battlefield, and complete your registration via the official Google Form."
    },
    {
      q: "What happens when a map reaches 48 players?",
      a: "A map automatically locks as FULL once 48 valid registrations are accepted. Its registration button will become disabled, and no further entries will be allowed for that map. However, other open maps will continue to accept registrations."
    },
    {
      q: "How will I receive the custom match Room ID and Password?",
      a: "Match room credentials will be distributed to verified registered players prior to the match start time via the contact details provided in your Google Form submission and through our official Discord server."
    },
    {
      q: "Where can I join the community and get live match updates?",
      a: "Join the official FFM Mukesh Discord server (discord.com/invite/aK3d4pDNjZ) and subscribe on YouTube (@FFM__MUKESH) for stream announcements, custom room rules, and highlight clips."
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-tactical-grid">
      {/* Background glow flares */}
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-950/60 border border-amber-500/40 text-xs font-tech text-amber-300 tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>COMMUNITY SUPPORT &amp; COMMUNICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            FREQUENTLY ASKED <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-orange-400">QUESTIONS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-tech">
            Have questions about map allocation, room credentials, or player registration? Find instant answers below.
          </p>
        </div>

        {/* Layout: Left FAQs & Right Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: FAQ Accordion with Tactical Styling */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`hud-card rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-amber-400/70 shadow-lg shadow-amber-500/10' : 'hover:border-amber-500/40'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="btn-tactical w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-white hover:text-amber-300 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-amber-400/80 px-2 py-0.5 rounded bg-black/60 border border-amber-500/30">
                        0{index + 1}
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <span className={`shrink-0 p-1.5 rounded-lg transition-transform duration-300 ${
                      isOpen ? 'bg-amber-400 text-black rotate-180' : 'bg-amber-950/70 border border-amber-500/30 text-amber-300'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-xs sm:text-sm font-tech text-slate-300 leading-relaxed border-t border-amber-500/20 bg-black/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Community & Support Links */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="hud-card corner-bracket p-6 sm:p-7 rounded-2xl border-2 border-amber-500/40 shadow-2xl">
              <h3 className="font-heading text-lg font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-amber-400" />
                OFFICIAL COMMUNITY &amp; CHANNELS
              </h3>
              <p className="text-xs text-slate-300 font-tech mb-5">
                Join our channels for room IDs, brackets, schedules, and live broadcasts:
              </p>

              <div className="space-y-3">
                {/* Host Channel Help Link */}
                <a
                  href={TOURNAMENT_CONFIG.host.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactical p-4 rounded-xl bg-red-950/40 border border-red-500/40 hover:border-red-400 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-red-600 text-white shadow-md">
                      <Youtube className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-heading text-white group-hover:text-amber-300 transition-colors">
                        {TOURNAMENT_CONFIG.host.name} on YouTube
                      </div>
                      <div className="text-[11px] text-slate-400 font-tech">Official Channel &amp; Streams</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                {/* Discord Community Server Link */}
                <a
                  href={TOURNAMENT_CONFIG.host.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactical p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/40 hover:border-indigo-400 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#5865F2] text-white shadow-md">
                      <DiscordIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-heading text-white group-hover:text-indigo-300 transition-colors">
                        Join Discord Server
                      </div>
                      <div className="text-[11px] text-slate-400 font-tech">Room IDs &amp; Tournament Chat</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                {/* Technical Partner Link */}
                <a
                  href={TOURNAMENT_CONFIG.technicalPartner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactical p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/40 hover:border-cyan-400 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-cyan-400 to-amber-400 shadow-md shrink-0 flex items-center justify-center">
                      <img 
                        src={TOURNAMENT_CONFIG.technicalPartner.logoUrl || "/assets/branding/rc.png"} 
                        alt="RC Innovations Logo" 
                        className="w-full h-full object-contain rounded-full bg-white" 
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                        {TOURNAMENT_CONFIG.technicalPartner.name}
                      </div>
                      <div className="text-[11px] text-slate-400 font-tech">Technical Architecture Partner</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Trust Badge */}
              <div className="mt-5 pt-4 border-t border-amber-500/20 flex items-center gap-2 text-xs font-tech text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fair, community-verified tournament operations</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
