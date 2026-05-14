/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target date to 30 days from now for demo
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div 
      whileHover={{ y: -10 }}
      className="flex flex-col items-center justify-center p-6 md:p-10 glass rounded-2xl min-w-[120px] md:min-w-[160px] border-gold/20 glow-on-hover"
    >
      <span className="text-4xl md:text-6xl font-serif text-white mb-2">{value.toString().padStart(2, '0')}</span>
      <span className="text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-80">{label}</span>
    </motion.div>
  );

  return (
    <section className="py-24 bg-emerald relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold font-serif italic text-3xl mb-4">The Grand Revelation</h2>
          <div className="w-24 h-px bg-gold/50 mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}
