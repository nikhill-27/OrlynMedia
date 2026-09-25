import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { Locale } from '../i18n/types';
import { Globe, Check, ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
  variant?: 'navbar' | 'footer' | 'mobile';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'navbar',
  className = '',
}) => {
  const { locale, setLocale, availableLocales, currentLocaleInfo } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // If mobile or simple pill:
  if (variant === 'mobile') {
    return (
      <div className={`flex items-center gap-1 p-1 bg-[#0D1B2A] rounded-xl border border-[#C7CDD6]/15 ${className}`}>
        {availableLocales.map((loc) => {
          const isActive = loc.code === locale;
          return (
            <button
              key={loc.code}
              type="button"
              onClick={() => setLocale(loc.code)}
              className={`flex-1 py-2 px-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#1479FF] to-[#00B8FF] text-[#F5F7FA] shadow-md shadow-[#1479FF]/20'
                  : 'text-[#8B95A5] hover:text-[#F5F7FA] hover:bg-white/[0.04]'
              }`}
              aria-label={`Switch to ${loc.label}`}
            >
              <span>{loc.flag}</span>
              <span className="uppercase">{loc.code}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
          variant === 'footer'
            ? 'bg-[#0D1B2A] border border-[#C7CDD6]/15 text-[#C7CDD6] hover:text-[#F5F7FA] hover:border-[#00B8FF]/40'
            : 'bg-[#0D1B2A]/70 hover:bg-[#0D1B2A] border border-[#C7CDD6]/15 hover:border-[#00B8FF]/40 text-[#C7CDD6] hover:text-[#F5F7FA] backdrop-blur-md'
        } ${isOpen ? 'ring-1 ring-[#00B8FF] border-[#00B8FF]' : ''}`}
        aria-label="Select Language"
      >
        <Globe className="w-3.5 h-3.5 text-[#00B8FF]" />
        <span className="flex items-center gap-1.5">
          <span>{currentLocaleInfo.flag}</span>
          <span className="uppercase font-mono text-[11px] font-bold">{currentLocaleInfo.code}</span>
        </span>
        <ChevronDown
          className={`w-3 h-3 text-[#8B95A5] transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#00B8FF]' : ''
          }`}
        />
      </button>

      {/* Floating Dropdown Card */}
      {isOpen && (
        <div
          role="listbox"
          className={`absolute z-50 mt-2 w-48 rounded-2xl bg-[#0D1B2A]/95 border border-[#C7CDD6]/20 p-1.5 shadow-2xl backdrop-blur-xl animate-in fade-in duration-150 ${
            variant === 'footer' ? 'bottom-full mb-2 left-0' : 'right-0 top-full'
          }`}
        >
          <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-[0.15em] text-[#8B95A5] border-b border-[#C7CDD6]/10 mb-1">
            Language / Sprache
          </div>
          {availableLocales.map((loc) => {
            const isSelected = loc.code === locale;
            return (
              <button
                key={loc.code}
                role="option"
                aria-selected={isSelected}
                type="button"
                onClick={() => {
                  setLocale(loc.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1479FF]/20 text-[#00B8FF] font-semibold'
                    : 'text-[#C7CDD6] hover:text-[#F5F7FA] hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{loc.flag}</span>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-[#F5F7FA]">{loc.nativeName}</div>
                    <div className="text-[10px] text-[#8B95A5]">{loc.label}</div>
                  </div>
                </div>

                {isSelected && <Check className="w-3.5 h-3.5 text-[#00B8FF]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
