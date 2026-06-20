import { useEffect, useRef, useState } from 'react';

export default function LoveLetter() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 relative">
      <div className="max-w-2xl mx-auto">
        <div
          className={`glass rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-8">
            <span className="text-5xl animate-heartbeat inline-block">💌</span>
            <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mt-4">
              A Letter For You
            </h2>
          </div>

          <div className="space-y-4 text-rose-800/80 leading-relaxed text-base md:text-lg italic">
            <p>
              Hey love, 💕
            </p>
            <p>
              I can't believe it's already been 4 months since you came into my life. Every single day with you has been a beautiful dream I never want to wake up from.
            </p>
            <p>
              You make my heart smile in ways I never thought possible. Your laugh is my favorite sound, your eyes are my favorite sight, and your happiness is my favorite goal.
            </p>
            <p>
              Four months ago, I didn't know that someone could change my entire world just by existing in it. But you did. You are my sunshine, my safe place, and my greatest blessing.
            </p>
            <p>
              Thank you for choosing me, for loving me, and for being the most amazing person I know. I promise to keep choosing you, every single day, for as long as you'll let me.
            </p>
            <p className="text-rose-600 font-semibold not-italic">
              Happy 4th Monthsary, my babi. Here's to forever with you. 🌹
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-rose-500 font-handwriting text-xl">
              With all my love, always & forever 💗
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
