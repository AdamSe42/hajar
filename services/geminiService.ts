import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateRomanticMessage = async (name: string, birthDate: string, extraContext: string = ''): Promise<string> => {
  if (!apiKey) {
    return "Joyeux Anniversaire mon amour ! (Configurez l'API Key pour un poème personnalisé)";
  }

  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `
      Agis comme un poète romantique français. Écris une lettre d'anniversaire courte, touchante et très romantique pour ma petite amie.
      
      Détails:
      - Son nom : ${name}
      - Sa date de naissance : ${birthDate}
      - Contexte supplémentaire : ${extraContext}
      - Ton : Passionné, doux, amoureux.
      - Format : Pas de markdown complexe, juste du texte avec des sauts de ligne. Utilise des émojis cœurs.
      - Langue : Français.
      
      Fais en sorte que ce soit "Wow".
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Je t'aime plus que tout au monde. Joyeux anniversaire !";
  } catch (error) {
    console.error("Error generating message:", error);
    return "Mon amour pour toi est plus grand que n'importe quel mot généré par un ordinateur. Joyeux Anniversaire Hajar !";
  }
};