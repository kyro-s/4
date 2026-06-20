import { useEffect, useState } from 'react';

const targetDate = new Date('2025-06-21T00:00:00');

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isHere: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isHere: true };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isHere: false,
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBoxes = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  if (timeLeft.isHere) {
    return (
      <div className="text-center py-8 animate-fade-in-up">
        <div className="text-6xl mb-4 animate-heartbeat inline-block">🎉</div>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-shadow">
          Happy 4th Monthsary!
        </h2>
        <p className="text-xl text-white/90 mt-4">Today is our special day! 💕</p>
      </div>
    );
  }

  return (
    <div className="text-center py-8">
      <p className="text-lg md:text-xl text-white/80 mb-6 font-light tracking-wider">
        Counting down to our special day ✨
      </p>
      <div className="flex justify-center gap-3 md:gap-6">
        {timeBoxes.map((box) => (
          <div
            key={box.label}
            className="glass rounded-2xl p-4 md:p-6 min-w-[70px] md:min-w-[100px] animate-fade-in-up"
            style={{ animationDelay: `${timeBoxes.indexOf(box) * 0.15}s` }}
          >
            <div className="text-3xl md:text-5xl font-bold text-white text-shadow">
              {String(box.value).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-white/70 mt-1 uppercase tracking-widest">
              {box.label}
            </div>
          </div>
        ))}
      </div>
      <p className="text-white/60 mt-6 text-sm">June 21, 2025 📅</p>
    </div>
  );
}
