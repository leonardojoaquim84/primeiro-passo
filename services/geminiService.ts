
import { GoogleGenAI, Type } from "@google/genai";

// Beauty consultation service powered by Google Gemini
export const getBeautyConsultation = async (userInput: string) => {
  // Always initialize with the latest API key from the environment
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userInput,
      config: {
        systemInstruction: `Você é o assistente virtual de luxo do PAULO GOES Concept Hair. 
        Seu objetivo é sugerir serviços e produtos baseados nas necessidades do cliente. 
        Seja elegante, acolhedor e profissional. Use emojis discretos. 
        Responda sempre em Português do Brasil.
        Temos serviços de: Cabelo (Corte, Mechas, Hidratação), Unhas (Manicure, Pedicure, Gel), Maquiagem e Estética.
        IMPORTANTE: Se o cliente tiver uma dúvida muito específica, urgente, ou quiser falar com um humano, encaminhe-o gentilmente para o nosso WhatsApp oficial no link: wa.me/5521991496983.`,
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

    // Directly access the .text property as per the SDK guidelines
    const text = response.text;
    if (!text) throw new Error("No response text from AI");
    
    // Parse the JSON string from the response
    return JSON.parse(text.trim());
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      message: "Peço desculpas, tive um pequeno problema ao processar seu pedido. Como posso ajudar com sua beleza hoje? Se preferir, você pode falar conosco diretamente pelo WhatsApp: wa.me/5521991496983",
      suggestions: []
    };
  }
};
