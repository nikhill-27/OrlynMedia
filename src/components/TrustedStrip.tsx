import React from 'react';
import { TRUSTED_CLIENTS } from '../data/agencyData';
import { ScrollReveal } from './ScrollReveal';

export const TrustedStrip: React.FC = () => {
  return (
    <section className="py-8 border-y border-zinc-800/80 light:border-zinc-200 bg-black/40 light:bg-zinc-50 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollReveal direction="up" distance={15} duration={500}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 whitespace-nowrap">
              TRUSTED ACROSS ZURICH · NEW YORK · LONDON · MIAMI
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
              {TRUSTED_CLIENTS.map((client, idx) => (
                <div
                  key={client.name}
                  className="group flex flex-col cursor-default transition-all duration-300"
                >
                  <span className="text-sm font-bold tracking-wider text-zinc-400 group-hover:text-white light:text-zinc-600 light:group-hover:text-zinc-950 transition-colors font-display">
                    {client.logoText}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-600 group-hover:text-zinc-400 transition-colors truncate">
                    {client.city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
