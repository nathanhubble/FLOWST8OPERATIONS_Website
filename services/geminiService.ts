import { GoogleGenAI, Type } from "@google/genai";

// Initialize the client strictly with process.env.API_KEY
// Note: In a production frontend, ensure strict security policies or proxy these calls.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateWorkflowIdeas = async (industry: string, role: string): Promise<string[]> => {
  try {
    const prompt = `
      You are an elite automation consultant at FLOWST8 OPERATIONS. A client works in the "${industry}" industry as a "${role}".
      
      Suggest 3 specific, high-impact, transformative workflow automation ideas that will:
      - Save significant time (3-10+ hours/week)
      - Have clear ROI
      - Sound premium and valuable
      - Be widely applicable and achievable
      
      Focus on: intelligent lead systems, content automation, client workflows, data enrichment, or operational efficiency.
      Keep each idea concise (8-12 words max). Use action-oriented, benefit-focused language.
      
      Return strictly a JSON array of strings.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            ideas: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [
      "Automated client onboarding with AI-powered personalization",
      "Intelligent lead qualification & instant follow-up system",
      "Hands-free content creation & multi-channel distribution"
    ];

    const data = JSON.parse(text);
    return data.ideas || [];
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Premium fallback examples
    return [
      "End-to-end automated proposal generation & contract routing",
      "AI-powered client intake with smart task assignment",
      "Intelligent CRM updates with zero manual data entry"
    ];
  }
};