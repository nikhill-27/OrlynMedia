import React from 'react';
import { TRUSTED_CLIENTS } from '../data/agencyData';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from './ScrollReveal';

export const BoldReputationSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="reputation" className="py-24 md:py-32 relative z-10 border-t border-zinc-800/80 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Simple, Bold Header */}
        <ScrollReveal direction="up" distance={25} duration={500}>
          <div className="text-xs font-mono uppercase tracking-widest text-purple-400 light:text-purple-600 mb-3">
            04 · PROVEN OUTCOMES
          </div>
        </ScrollReveal>

        {/* Massive Bold Testimonial Feature Stage */}
        <ScrollReveal direction="up" distance={30} duration={600}>
          <div className="rounded-3xl border border-zinc-800/80 light:border-zinc-200 bg-[#08090D] light:bg-white p-8 sm:p-14 lg:p-16 shadow-2xl mb-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Massive Bold Quote Left */}
              <div className="lg:col-span-8">
                <blockquote className="text-2xl sm:text-4xl md:text-5xl font-semibold font-display text-white light:text-zinc-950 tracking-tight leading-[1.15] mb-8">
                  &ldquo;Orlyn Media unified our digital storefront and cinema storytelling in a single sprint. Our conversion rate surged 48% within 60 days.&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                    alt="Marcus Vance"
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-zinc-700"
                  />
                  <div>
                    <div className="text-base font-bold text-white light:text-zinc-950">
                      Marcus Vance
                    </div>
                    <div className="text-xs font-mono text-zinc-400 light:text-zinc-600">
                      Chief Marketing Officer · Solis Direct Global
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Big Metric Right */}
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center border-t lg:border-t-0 lg:border-l border-zinc-800 light:border-zinc-200 pt-8 lg:pt-0 lg:pl-10">
                <div className="text-6xl sm:text-7xl font-mono font-bold text-white light:text-zinc-950 tracking-tight">
                  +48%
                </div>
                <div className="text-sm font-mono text-purple-400 font-semibold mt-1">
                  Verified Conversion Lift
                </div>
                <div className="mt-4 text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Audited Revenue Impact</span>
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* Client Roster Marquee / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center pt-8 border-t border-zinc-800/80 light:border-zinc-200">
          {TRUSTED_CLIENTS.map((client) => (
            <div key={client.name} className="flex flex-col">
              <span className="text-sm font-bold tracking-wider text-zinc-300 light:text-zinc-800 font-display">
                {client.logoText}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 truncate mt-0.5">
                {client.city}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
