import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export const generateWorkflowIdea = async (input: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are an expert Operations Architect at FLOWST8. 
      The user wants to automate: "${input}".
      
      Create a concise, 3-step automation workflow proposal.
      Format it as a JSON object with this structure (do not include markdown code blocks, just raw JSON):
      {
        "title": "A catchy title for the workflow",
        "steps": [
          { "tool": "Tool Name (e.g. Zapier, Make, Slack)", "action": "Short action description" },
          { "tool": "Tool Name", "action": "Short action description" },
          { "tool": "Tool Name", "action": "Short action description" }
        ],
        "efficiencyGain": "Estimated hours saved per week (e.g., '5+ hours/week')"
      }
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    return response.text || "{}";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};