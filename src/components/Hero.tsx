/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import heroImg from '../images/hero.png';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-emerald">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury Pakistani Fashion Model"
          className="w-full h-full object-cover object-top md:object-[center_30%] opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald/60 via-emerald/20 to-emerald-light/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-emerald-light/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <span className="text-gold font-serif italic text-base md:text-xl mb-2 block tracking-wide">
            Couture Excellence
          </span>
          <h1 className="text-white text-5xl md:text-9xl font-serif leading-tight mb-6 drop-shadow-2xl">
            <motion.span 
              animate={{ 
                backgroundPosition: ['0% center', '200% center'],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="italic font-light bg-gradient-to-r from-white via-gold/70 to-white bg-[length:200%_auto] bg-clip-text text-transparent block"
            >
              Coming Soon
            </motion.span>
          </h1>
          <p className="text-white/80 text-[10px] md:text-base max-w-2xl mx-auto mb-10 font-sans tracking-[0.05em] leading-relaxed">
            A premium ladies clothing experience crafted with style, grace, and timeless fashion. Discover the artistry of Zeenat-e-Libas.
          </p>

          <div className="flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 md:px-10 md:py-4 bg-gold text-emerald font-semibold tracking-[0.2em] uppercase text-[10px] md:text-sm rounded-none shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
            >
              Launching Soon
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating particles (simplified as decorative dots) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-20 bg-gradient-to-b from-white/0 to-gold animate-bounce" />
        <span className="text-gold text-[10px] tracking-[0.4em] uppercase mt-4">Scroll</span>
      </div>
    </div>
  );
}
