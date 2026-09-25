import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { OrlynLogo } from './OrlynLogo';
import { ThemeToggle } from './ThemeToggle';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Sparkles, 
  ChevronDown, 
  Code2, 
  Film, 
  Cpu, 
  Layers, 
  Clock 
} from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (initialSubject?: string) => void;
  onOpenChat?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, onOpenChat }) => {
  const { locale, setLocale, availableLocales } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    let element = document.getElementById(id);
    if (!element && (id === 'services' || id === 'capabilities')) {
      element = document.getElementById('capabilities') || document.getElementById('services');
    }
    if (!element && (id === 'testimonials' || id === 'reputation')) {
      element = document.getElementById('reputation') || document.getElementById('testimonials');
    }
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090812]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Brand Wordmark & Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Orlyn Media Home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <OrlynLogo size={28} showWordmark={true} showTagline={false} animated={true} />
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            {/* Capabilities */}
            <button
              type="button"
              onClick={() => handleScrollTo('capabilities')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Capabilities
            </button>

            {/* Work */}
            <button
              type="button"
              onClick={() => handleScrollTo('work')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Work
            </button>

            {/* Velocity */}
            <button
              type="button"
              onClick={() => handleScrollTo('process')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Velocity
            </button>

            {/* Reputation */}
            <button
              type="button"
              onClick={() => handleScrollTo('reputation')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Reputation
            </button>

            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => {
                  setLangDropdownOpen(!langDropdownOpen);
                  setServicesDropdownOpen(false);
                }}
                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer focus:outline-none uppercase text-xs font-mono tracking-wider text-zinc-400"
              >
                <span>{locale.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-36 rounded-xl bg-[#0D0B1A]/95 backdrop-blur-2xl border border-white/10 p-1.5 shadow-2xl z-50 animate-in fade-in duration-150">
                  {availableLocales.map((loc) => (
                    <button
                      key={loc.code}
                      type="button"
                      onClick={() => {
                        setLocale(loc.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-colors flex items-center justify-between cursor-pointer ${
                        locale === loc.code ? 'bg-white/10 text-white font-bold' : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <span>{loc.code === 'en' ? 'ENG' : loc.code === 'de' ? 'DEU' : 'FRA'}</span>
                      {locale === loc.code && <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle (Dark vs High-Contrast Light) */}
            <ThemeToggle variant="navbar" />

            {/* AI Assistant Button */}
            {onOpenChat && (
              <button
                type="button"
                onClick={onOpenChat}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full font-medium text-xs text-purple-300 hover:text-white bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 transition-all cursor-pointer shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>AI Director</span>
              </button>
            )}

            {/* Start Project Pill */}
            <button
              id="nav-start-project-btn"
              type="button"
              onClick={() => onOpenInquiry()}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full font-medium text-xs sm:text-sm text-zinc-950 bg-white hover:bg-zinc-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/40 cursor-pointer"
            >
              <span>Book Sprint</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle & Compact Theme Switch */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle variant="compact" />

            {onOpenChat && (
              <button
                type="button"
                onClick={onOpenChat}
                className="p-2 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300"
                aria-label="Open AI Director Chat"
              >
                <Sparkles className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-white hover:text-zinc-300 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#090812]/98 backdrop-blur-3xl pt-24 px-6 flex flex-col justify-between pb-10 animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
              Navigation // Web &amp; Video
            </div>
            
            <div className="space-y-4 text-xl font-display font-medium text-white">
              <button
                type="button"
                onClick={() => handleScrollTo('work')}
                className="block text-left w-full hover:text-purple-400 transition-colors"
              >
                Selected Work
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('services')}
                className="block text-left w-full hover:text-purple-400 transition-colors"
              >
                Web Designing &amp; Video Editing
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('industries')}
                className="block text-left w-full hover:text-purple-400 transition-colors"
              >
                Sectors
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('process')}
                className="block text-left w-full hover:text-purple-400 transition-colors"
              >
                Sprint Methodology
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('testimonials')}
                className="block text-left w-full hover:text-purple-400 transition-colors"
              >
                Reputation
              </button>
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            {/* Mobile Theme Switcher */}
            <ThemeToggle variant="mobile" />

            {onOpenChat && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChat();
                }}
                className="w-full py-3.5 rounded-full font-medium text-sm text-purple-300 bg-purple-950/50 border border-purple-500/40 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Ask Gemini AI Director</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3.5 rounded-full font-medium text-sm text-zinc-950 bg-white flex items-center justify-center gap-2"
            >
              <span>Book Discovery Sprint</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
