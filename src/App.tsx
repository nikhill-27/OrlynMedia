import React, { useState } from 'react';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustedStrip } from './components/TrustedStrip';
import { BoldCapabilitiesSection } from './components/BoldCapabilitiesSection';
import { BoldWorkSection } from './components/BoldWorkSection';
import { BoldSprintSection } from './components/BoldSprintSection';
import { BoldReputationSection } from './components/BoldReputationSection';
import { BoldCTASection } from './components/BoldCTASection';
import { Footer } from './components/Footer';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { VideoModal } from './components/VideoModal';
import { GeminiChatModal } from './components/GeminiChatModal';
import { GeminiChatFloatingButton } from './components/GeminiChatFloatingButton';
import { useTheme } from './context/ThemeContext';
import { Project } from './types';
import { PROJECTS_DATA } from './data/agencyData';

export default function App() {
  const { isDark } = useTheme();
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [initialServiceForModal, setInitialServiceForModal] = useState<string | undefined>(undefined);
  const [initialDetailsForModal, setInitialDetailsForModal] = useState<string | undefined>(undefined);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideoProject, setActiveVideoProject] = useState<Project | null>(null);
  const [geminiChatOpen, setGeminiChatOpen] = useState(false);

  const handleOpenInquiry = (serviceOrScope?: string | { discipline?: string }) => {
    if (typeof serviceOrScope === 'string') {
      setInitialServiceForModal(serviceOrScope);
    } else if (serviceOrScope && 'discipline' in serviceOrScope) {
      const d = serviceOrScope.discipline;
      if (d === 'web') setInitialServiceForModal('Web Designing & Interactive Systems');
      else if (d === 'video') setInitialServiceForModal('Video Editing & Commercial Post-Production');
      else setInitialServiceForModal('Hybrid Web & Video Production Sprint');
    } else {
      setInitialServiceForModal(undefined);
    }
    setInquiryModalOpen(true);
  };

  const handleTransferScopeToInquiry = (notes: string) => {
    setInitialDetailsForModal(notes);
    setInitialServiceForModal('Web Designing & Video Editing Hybrid Sprint');
    setInquiryModalOpen(true);
  };

  const handleOpenVideoModal = (project: Project) => {
    setActiveVideoProject(project);
    setVideoModalOpen(true);
  };

  const handlePlayReel = () => {
    const videoProj = PROJECTS_DATA.find((p) => p.category === 'video') || PROJECTS_DATA[1];
    setActiveVideoProject(videoProj);
    setVideoModalOpen(true);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`relative min-h-screen font-sans transition-colors duration-300 ${
        isDark
          ? 'bg-[#060709] text-[#F4F4F6] selection:bg-purple-600/30 selection:text-white'
          : 'bg-[#FAFAFC] text-[#090A0E] selection:bg-purple-500/20 selection:text-black'
      }`}
    >
      {/* Viewport reading progress indicator */}
      <ReadingProgressBar />

      {/* Structural ambient technical grid */}
      <ParticleBackground />

      {/* 1. Navbar */}
      <Navbar 
        onOpenInquiry={() => handleOpenInquiry()} 
        onOpenChat={() => setGeminiChatOpen(true)}
      />

      <main className="relative z-10">
        {/* 2. Bold Minimal Hero (3D liquid model kept intact) */}
        <HeroSection
          onOpenInquiry={() => handleOpenInquiry()}
          onExploreWork={handleExploreWork}
          onPlayReel={handlePlayReel}
          onOpenChat={() => setGeminiChatOpen(true)}
        />

        {/* 3. Streamlined Trusted Leader Strip */}
        <TrustedStrip />

        {/* 4. Bold Capabilities: Web Designing + Cinema Video + Tactile DaVinci ACES Demo */}
        <BoldCapabilitiesSection
          onOpenInquiry={(topic) => handleOpenInquiry(topic)}
          onPlayReel={handlePlayReel}
        />

        {/* 5. Bold Editorial Selected Work Showcase */}
        <BoldWorkSection
          onOpenVideoModal={handleOpenVideoModal}
          onOpenInquiry={(projectName) => handleOpenInquiry(projectName)}
        />

        {/* 6. Bold 14-Day Sprint Velocity */}
        <BoldSprintSection />

        {/* 7. Bold Proven Outcomes & Attributable Social Proof */}
        <BoldReputationSection />

        {/* 8. Bold Direct Commission Intake CTA */}
        <BoldCTASection
          onOpenInquiry={(data) => handleOpenInquiry(data)}
          onOpenChat={() => setGeminiChatOpen(true)}
        />
      </main>

      {/* 9. Minimal Editorial Footer */}
      <Footer onOpenInquiry={() => handleOpenInquiry()} />

      {/* Interactive Project Booking / Inquiry Flow Modal */}
      <ProjectInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialService={initialServiceForModal}
        initialDetails={initialDetailsForModal}
      />

      {/* Cinema-Grade 4K Video Reel / Walkthrough Modal */}
      <VideoModal
        project={activeVideoProject}
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      {/* Gemini Multi-turn Chatbot Modal */}
      <GeminiChatModal
        isOpen={geminiChatOpen}
        onClose={() => setGeminiChatOpen(false)}
        onTransferToInquiry={handleTransferScopeToInquiry}
      />

      {/* Floating Gemini Chat Launcher Button */}
      <GeminiChatFloatingButton
        isOpen={geminiChatOpen}
        onClick={() => setGeminiChatOpen(true)}
      />
    </div>
  );
}
