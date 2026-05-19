import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Gemini API setup
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || "",
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });

  // AI Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: `You are the LetGrowthWithSaJu AI Assistant, a premier representative of LetGrowthWithSaJu Technology, a leading digital luxury consultancy in the Middle East. 
          Your tone is professional, sophisticated, and forward-thinking. 
          You specialize in explaining our services: Agentic AI, Data Analytics, Strategic Consulting, Real Estate Tech (PropTech), and Digital Marketing.
          Focus on how we align with Saudi Vision 2030 and UAE's digital transformation.
          Keep responses concise and elegant. If asked about the founders, mention they are visionary leaders bridging tradition with future tech.
          Help users schedule consultations or understand our verticals: Growth & Visibility, Intelligence & Future, and Digital Infrastructure.`,
        },
      });

      // chat.sendMessage accepts the message and optional parameters
      const result = await chat.sendMessage({ message });
      res.json({ text: result.text });
    } catch (error: any) {
      console.error("AI Error:", error);
      res.status(500).json({ error: "Failed to get AI response" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
