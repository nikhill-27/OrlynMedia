import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Initialize Gemini Client via @google/genai on server-side
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_INSTRUCTION = `You are the Senior Creative Director & Technical Architect at Orlyn Media (orlynmedia.com), an elite hybrid creative studio offering world-class Web Designing & Engineering and Video Editing & Post-Production services.

OUR CORE DISCIPLINES:
1. WEB DESIGNING & DEVELOPMENT:
   - Bespoke luxury UI/UX design (Figma systems, brutalist-refined typography, dark-mode mastery)
   - Interactive 3D WebGL / Three.js shaders, micro-interactions, fluid physics
   - Headless E-commerce (Shopify Plus, Hydrogen) & High-Performance Full-Stack (Next.js, React, Tailwind CSS)
   - Core Web Vitals 99+, sub-second TTFB, enterprise SEO architecture
   - Typical sprint: 2 to 4 weeks ($8,000 - $30,000+)

2. VIDEO EDITING & POST-PRODUCTION:
   - High-impact commercial editing (RED, ARRI, Blackmagic, Sony FX RAW workflows)
   - Dynamic kinetic typography, 3D motion design, CGI title treatments, VFX cleanup
   - DaVinci Resolve Studio HDR color grading (ACES, film-emulation grain, color matching)
   - Custom sound design, Foley, dialogue cleanup, cinematic soundtrack mixing
   - Multi-format distribution: 16:9 Cinema 4K Masters, 9:16 Vertical Reels/TikToks/Shorts, 1:1 Social Ads
   - Typical batch turnaround: 5 to 10 business days ($3,000 - $15,000+)

3. INTEGRATED HYBRID ADVANTAGE (WEB + VIDEO):
   - We film and edit with the viewport in mind, and design web interfaces that feel like cinematic film. Eliminates miscommunication between separate video agencies and web developers.

YOUR PERSONA & INSTRUCTIONS:
- You are articulate, authoritative, design-savvy, transparent, and direct.
- Use markdown formatting with clear headings, bullet points, and bold callouts for readability.
- When prospective clients ask for estimates or timelines, break down the scope into phases and deliverable tiers.
- Recommend tailored solutions based on whether they need Video Editing, Web Designing, or both.
- Invite the user to submit their project details through our Commission Intake form or book a discovery sprint.
`;

// Multi-turn Gemini Chat Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, model, taskComplexity } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    // Model selection based on user requirements:
    // - gemini-3.1-pro-preview for complex reasoning/storyboard architecture
    // - gemini-3.5-flash for general tasks
    // - gemini-3.1-flash-lite for fast tasks
    let selectedModel = 'gemini-3.5-flash';
    if (taskComplexity === 'complex' || model === 'gemini-3.1-pro-preview') {
      selectedModel = 'gemini-3.1-pro-preview';
    } else if (taskComplexity === 'fast' || model === 'gemini-3.1-flash-lite') {
      selectedModel = 'gemini-3.1-flash-lite';
    } else if (model) {
      selectedModel = model;
    }

    // Convert multi-turn history for @google/genai SDK
    const contents = messages.map((m: any) => ({
      role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
      parts: [{ text: typeof m.content === 'string' ? m.content : JSON.stringify(m.content) }],
    }));

    if (!apiKey) {
      return res.json({
        text: `**Welcome to Orlyn Media!**\n\nWe offer specialized **Web Designing & Engineering** (interactive 3D, headless Shopify Plus, bespoke UI/UX) and **Video Editing & Post-Production** (4K cinema commercials, kinetic motion, DaVinci HDR color grading, and high-retention 9:16 vertical edits).\n\n*(Note: To connect live Gemini AI responses, please configure your GEMINI_API_KEY in the Secrets panel.)*`,
        model: selectedModel,
      });
    }

    let responseText = '';
    let finalModel = selectedModel;

    try {
      const response = await ai.models.generateContent({
        model: selectedModel,
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
      responseText = response.text || '';
    } catch (primaryError: any) {
      console.warn(`Primary model ${selectedModel} failed, trying fallback:`, primaryError.message);
      // If 503 or transient overload, try fast fallback
      const fallbackModel = selectedModel === 'gemini-3.1-flash-lite' ? 'gemini-3.8-flash' : 'gemini-3.1-flash-lite';
      const fallbackResponse = await ai.models.generateContent({
        model: fallbackModel,
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
      responseText = fallbackResponse.text || '';
      finalModel = fallbackModel;
    }

    if (!responseText) {
      responseText = 'I have reviewed your project requirements. Let me know which specific area—web design or video editing—you would like to focus on.';
    }

    return res.json({
      text: responseText,
      model: finalModel,
    });
  } catch (error: any) {
    console.error('Gemini chat error:', error);
    return res.status(500).json({
      error: error.message || 'Failed to process request with Gemini',
    });
  }
});

const isProd = process.env.NODE_ENV === 'production';
const PORT = 3000;

async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, port: PORT },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Orlyn Media server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
