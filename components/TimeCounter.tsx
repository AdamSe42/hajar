import React, { useState, useEffect } from 'react';

interface TimeCounterProps {
  birthDate: string; // YYYY-MM-DD
}

const TimeCounter: React.FC<TimeCounterProps> = ({ birthDate }) => {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const birth = new Date(birthDate).getTime();
      const now = new Date().getTime();
      const difference = now - birth;

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeElapsed({ years, days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center py-8">
      <TimeBox value={timeElapsed.years} label="Années" />
      <TimeBox value={timeElapsed.days} label="Jours" />
      <TimeBox value={timeElapsed.hours} label="Heures" />
      <TimeBox value={timeElapsed.minutes} label="Minutes" />
      <TimeBox value={timeElapsed.seconds} label="Secondes" />
    </div>
  );
};

const TimeBox: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100 min-w-[80px] md:min-w-[100px] transform hover:scale-105 transition-transform duration-300">
    <span className="text-3xl md:text-5xl font-bold text-pink-600 script-font">{value}</span>
    <span className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mt-1">{label}</span>
  </div>
);

export default TimeCounter;