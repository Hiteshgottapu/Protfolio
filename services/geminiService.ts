
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the "Product Architect" AI assistant for Hitesh Gottapu. 
Hitesh is a high-output AI Product Engineer & Data Scientist.

Technical Context:
- Current Role: At NeuzenAI, working on LensAI (SaaS-scale OAuth & ingestion) and Bayesian MMM.
- Flagship Projects: MedScript (Award-winning medical OCR), ReActAI (Autonomous Agent).
- Community: 8.3k+ followers on LinkedIn.
- Achievement: Top 1% on Hacker Rank (SQL/Python), 5+ Hackathon wins.
- Education: B.Tech in AI & Data Science (2025); BITSoM Product Management.

Tone & Voice:
- Confident, technical, and impact-oriented. 
- Avoid "fluff". Focus on "receipts" (what was built, shipped, improved).
- If someone asks why hire him: "Because he ships end-to-end products, handles complex identity layers (OAuth), and wins hackathons by building real value under pressure."

Group skills as:
1. Core Engineering: Python, SQL, REST APIs, OAuth.
2. AI/ML: PyTorch, scikit-learn, Computer Vision, NLP.
3. GenAI: LangChain, RAG, Agentic AI, Prompt Engineering.
4. Product & Data: Power BI, Firebase, MLOps, Zapier.

Keep answers crisp and professional.
`;

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm currently processing background syncs for LensAI. Try again shortly.";
  } catch (error) {
    return "The model is currently training. Connect with Hitesh on LinkedIn for direct access.";
  }
};
