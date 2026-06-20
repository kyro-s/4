import { useEffect, useRef, useState } from 'react';

interface Milestone {
  month: string;
  title: string;
  description: string;
  emoji: string;
}

const milestones: Milestone[] = [
  {
    month: 'Month 1',
    title: 'The Beginning 💫',
    description: 'The month everything changed. When "hi" turned into hours of talking, and butterflies became a permanent state of being.',
    emoji: '🌟',
  },
  {
    month: 'Month 2',
    title: 'Getting Closer 🦋',
    description: 'When butterflies turned into something deeper. Late night calls, inside jokes, and realizing you might be the one.',
    emoji: '💫',
  },
  {
    month: 'Month 3',
    title: 'Falling Deeper 🌹',
    description: 'The month I knew it was real. Every moment together felt like magic, and my heart became yours completely.',
    emoji: '❤️',
  },
  {
    month: 'Month 4',
    title: 'Today — Our Monthsary 🎉',
    description: '120+ days of pure happiness, and I fall more in love with you every single day. Happy 4th monthsary, my love!',
    emoji: '🥂',
  },
];

export default function Timeline() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-700">Our Love Story</h2>
          <p className="text-rose-500 mt-2 text-lg">Four beautiful months together 💕</p>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-300 via-rose-400 to-rose-300 md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <div
              key={milestone.month}
              className={`relative flex items-center mb-12 last:mb-0 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-rose-400 rounded-full border-4 border-white shadow-lg z-10 md:-translate-x-1/2 animate-pulse-slow" />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                }`}
              >
                <div className="glass rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{milestone.emoji}</span>
                    <span className="text-sm font-semibold text-rose-400 uppercase tracking-wider">
                      {milestone.month}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-rose-700 mb-2">{milestone.title}</h3>
                  <p className="text-rose-600/80 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
