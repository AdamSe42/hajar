import React, { useEffect, useState } from 'react';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; animationDuration: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate static hearts on mount to avoid hydration mismatch or constant re-renders
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      animationDuration: 10 + Math.random() * 20, // seconds
      delay: Math.random() * 5, // seconds
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden h-full w-full">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-pink-300 opacity-40"
          style={{
            left: `${heart.left}%`,
            bottom: '-10%',
            fontSize: `${Math.random() * 2 + 1}rem`,
            animation: `floatUp ${heart.animationDuration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤
        </div>
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; }
          100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;