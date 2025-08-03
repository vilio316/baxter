import { GoogleGenAI } from "@google/genai";

const gemKey = process.env.NEXT_PUBLIC_GEMINI_KEY
const ai = new GoogleGenAI({ apiKey: gemKey  });

export async function chatItem(query: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: query ,
    config: {
        systemInstruction: "You are an AI assistant designed to provide comprehensive, clear, and helpful information, particularly on complex topics like finance. Your primary goal is to empower users with well-researched insights, enabling them to make informed decisions without offering direct advice. If you can't just say I can't help with that, instead provide a detailed explanation or alternative information. ",
        maxOutputTokens: 2000,
    }
  });
   return response.text
}
