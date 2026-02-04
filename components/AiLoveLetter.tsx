import React, { useState } from 'react';
import { generateRomanticMessage } from '../services/geminiService';

interface AiLoveLetterProps {
  name: string;
  birthDate: string;
}

const AiLoveLetter: React.FC<AiLoveLetterProps> = ({ name, birthDate }) => {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const msg = await generateRomanticMessage(name, birthDate, "Elle est la lumière de ma vie, mon âme sœur.");
    setMessage(msg);
    setLoading(false);
    setGenerated(true);
  };

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto text-center">
       <div className="relative bg-white/90 p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-pink-100">
          <div className="absolute -top-6 -left-6 text-6xl text-pink-400 opacity-50 script-font">Love</div>
          <div className="absolute -bottom-6 -right-6 text-6xl text-pink-400 opacity-50 script-font">Always</div>

          <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-6">
            Une Lettre Pour Toi
          </h2>

          {!generated ? (
            <div className="space-y-6">
              <p className="text-gray-600 italic text-lg">
                Je voulais t'écrire quelque chose d'unique, qui capture un peu de la magie que tu apportes dans ma vie...
              </p>
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-pink-300/50 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center mx-auto gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    L'inspiration arrive...
                  </>
                ) : (
                  <>
                    ✨ Découvrir mon message
                  </>
                )}
              </button>
            </div>
          ) : (
             <div className="animate-fade-in-up">
                <div className="prose prose-pink prose-lg mx-auto text-gray-700 font-serif leading-relaxed whitespace-pre-line">
                  {message}
                </div>
                <div className="mt-8 pt-6 border-t border-pink-100">
                  <p className="font-serif italic text-pink-600 text-xl">
                    Joyeux Anniversaire mon cœur ❤️
                  </p>
                </div>
                <button
                  onClick={handleGenerate}
                  className="mt-8 text-sm text-pink-400 hover:text-pink-600 underline"
                >
                  Générer un autre poème
                </button>
             </div>
          )}
       </div>
    </div>
  );
};

export default AiLoveLetter;