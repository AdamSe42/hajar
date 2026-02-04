import React, { useState, useEffect } from 'react';
import FloatingHearts from './components/FloatingHearts';
import TimeCounter from './components/TimeCounter';
import PhotoGallery from './components/PhotoGallery';
import AiLoveLetter from './components/AiLoveLetter';

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const birthDate = "2005-02-13"; // YYYY-MM-DD
  const name = "Hajar";

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen relative transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-50 via-pink-50 to-rose-100 -z-20 heart-bg"></div>
      <FloatingHearts />

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 -z-10 blur-[2px]"></div>
         
         <div className="z-10 animate-float">
            <h2 className="text-2xl md:text-3xl text-pink-600 font-serif tracking-widest uppercase mb-4">
              Aujourd'hui est un jour spécial
            </h2>
            <h1 className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600 script-font drop-shadow-sm p-4">
              Joyeux Anniversaire {name}
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-700 font-light italic max-w-2xl mx-auto">
              Le monde est devenu plus beau le 13 Février 2005.
            </p>
         </div>

         <div className="mt-16 w-full max-w-4xl z-10">
           <p className="text-center text-gray-500 mb-6 uppercase tracking-wider text-sm">Tu illumines ma vie depuis</p>
           <TimeCounter birthDate={birthDate} />
         </div>

         <div className="absolute bottom-10 animate-bounce text-pink-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
         </div>
      </header>

      {/* Love Letter Section */}
      <section className="relative z-10 py-12">
        <AiLoveLetter name={name} birthDate={birthDate} />
      </section>

      {/* Gallery Section */}
      <section className="relative z-10 py-12 bg-white/50 backdrop-blur-sm shadow-inner">
         <PhotoGallery />
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center text-pink-800 bg-pink-100/80">
        <p className="font-serif text-lg">
          Fait avec tout mon ❤️ pour toi.
        </p>
        <p className="text-sm mt-2 opacity-70">
          Pour toujours et à jamais.
        </p>
      </footer>
    </div>
  );
};

export default App;