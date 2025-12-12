import { GoogleGenAI } from "@google/genai";

// Ensure API Key is present. In a real app, strict checks or error boundaries would apply.
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateBlueprint = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "Error: API Key is missing. Please configure process.env.API_KEY.";
  }

  try {
    const systemInstruction = `
      You are an expert Systems Architect for FLOWST8. 
      Your goal is to take a user's operational problem and output a concise, technical "Blueprint" solution.
      Style the output like a technical log or terminal readout.
      
      Structure:
      1. DIAGNOSIS: 1 sentence summary of the bottleneck.
      2. STACK: List 3-4 specific tools (e.g., Airtable, Make, OpenAI, Slack).
      3. PROTOCOL: A step-by-step logic flow (Logic 1 -> Logic 2 -> Logic 3).
      
      Keep it punchy, cyber-tech, and under 150 words.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "System Error: No response data received.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System Malfunction: Unable to generate blueprint. Please try again later.";
  }
};