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
          className="w-full h-full object-cover object-center opacity-80 scale-105"
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
          className="w-full"
        >
          <h1 className="text-white text-6xl md:text-[10rem] font-serif leading-none mb-0 drop-shadow-2xl tracking-tight uppercase">
            Coming Soon
          </h1>
        </motion.div>
      </div>


    </div>
  );
}
