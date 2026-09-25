import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { OrlynLogo } from './OrlynLogo';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialDetails?: string;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialDetails,
}) => {
  const { t } = useI18n();
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>(
    initialService ? [initialService] : ['Web Design & Development', 'Video Production']
  );
  const [selectedNiche, setSelectedNiche] = useState<string>('E-commerce');
  const [budgetRange, setBudgetRange] = useState<string>('$25k – $50k');
  const [timeline, setTimeline] = useState<string>('Within 30 Days');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: initialDetails || '',
  });

  // Sync initialDetails when prop changes
  React.useEffect(() => {
    if (initialDetails) {
      setFormData((prev) => ({ ...prev, details: initialDetails }));
    }
  }, [initialDetails]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleDiscipline = (disc: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(disc) ? prev.filter((d) => d !== disc) : [...prev, disc]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#0C0D11] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl z-10 my-8 overflow-hidden inquiry-modal">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.04] text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              <OrlynLogo size={18} showWordmark={false} animated={true} />
              <span>[ COMMISSION DOSSIER // DIRECT INTAKE ]</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              {t.modal.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 mb-6">
              {t.modal.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Disciplines */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-2.5">
                  {t.modal.step1Label}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Web Design & Development',
                    'Video Production & Editing',
                    '3D Motion & WebGL Shaders',
                    'Full Brand Transformation',
                  ].map((disc) => {
                    const active = selectedDisciplines.includes(disc);
                    return (
                      <button
                        key={disc}
                        type="button"
                        onClick={() => toggleDiscipline(disc)}
                        className={`p-3 text-left rounded-xl border text-xs font-mono flex items-center justify-between transition-all cursor-pointer ${
                          active
                            ? 'bg-white text-black font-semibold border-white'
                            : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        <span>{disc}</span>
                        {active && <Check className="w-3.5 h-3.5 text-black" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Target Niche */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-2.5">
                  {t.modal.step2Label}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['E-commerce', 'Real Estate', 'Healthcare & Dental'].map((niche) => (
                    <button
                      key={niche}
                      type="button"
                      onClick={() => setSelectedNiche(niche)}
                      className={`p-2.5 text-center rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                        selectedNiche === niche
                          ? 'bg-white text-black font-semibold border-white'
                          : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {niche}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-2">
                    {t.modal.step3Label}
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-white"
                  >
                    <option value="$15k – $25k">$15k – $25k</option>
                    <option value="$25k – $50k">$25k – $50k (Hybrid)</option>
                    <option value="$50k – $100k">$50k – $100k (Flagship)</option>
                    <option value="$100k+">$100k+ (Global Retainer)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-2">
                    {t.modal.step4Label}
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-white"
                  >
                    <option value="Urgent (2-3 Weeks)">Urgent (2-3 Weeks)</option>
                    <option value="Within 30 Days">Standard (30 Days)</option>
                    <option value="Next Quarter">Next Quarter</option>
                    <option value="Flexible">Exploratory / Flexible</option>
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                    {t.modal.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.modal.namePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                    {t.modal.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.modal.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                  {t.modal.contextLabel}
                </label>
                <textarea
                  rows={2}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder={t.modal.contextPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-white"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full font-mono text-xs uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.modal.submitBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-zinc-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  {t.modal.ndaNotice}
                </span>
                <span>&bull;</span>
                <span>{t.modal.responseNotice}</span>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation Screen */
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center mx-auto mb-6">
              <Check className="w-7 h-7" />
            </div>

            <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">
              {t.modal.confirmTitle}
            </h4>
            <p className="text-sm text-zinc-400 max-w-md mx-auto mb-6">
              Thank you, <span className="text-white font-semibold">{formData.name || 'Partner'}</span>. 
              {t.modal.confirmSubtitle}
            </p>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 max-w-md mx-auto mb-8 text-left text-xs font-mono space-y-1.5">
              <div className="text-zinc-500 font-semibold uppercase tracking-widest text-[10px]">
                {t.modal.summaryHeading}
              </div>
              <div className="text-zinc-300">
                {t.modal.disciplinesLabel} <span className="text-white">{selectedDisciplines.join(', ')}</span>
              </div>
              <div className="text-zinc-300">
                {t.modal.industryLabel} <span className="text-white">{selectedNiche}</span>
              </div>
              <div className="text-zinc-300">
                {t.modal.timelineLabel} <span className="text-white">{timeline}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-8 py-3 rounded-full font-mono text-xs uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              {t.modal.returnBtn}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
