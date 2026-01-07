
import { GoogleGenAI, Type } from "@google/genai";

export const getBeautyConsultation = async (userInput: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userInput,
      config: {
        systemInstruction: `Você é o assistente virtual de luxo do Lumière Beauty Studio. 
        Seu objetivo é sugerir serviços e produtos baseados nas necessidades do cliente. 
        Seja elegante, acolhedor e profissional. Use emojis discretos. 
        Responda sempre em Português do Brasil.
        Temos serviços de: Cabelo (Corte, Mechas, Hidratação), Unhas (Manicure, Pedicure, Gel), Maquiagem e Estética.`,
        temperature: 0.7,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            message: { type: Type.STRING, description: "Mensagem de resposta para o cliente" },
            suggestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Lista de 1 a 3 serviços ou produtos recomendados"
            }
          },
          required: ["message", "suggestions"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      message: "Peço desculpas, tive um pequeno problema ao processar seu pedido. Como posso ajudar com sua beleza hoje?",
      suggestions: []
    };
  }
};
