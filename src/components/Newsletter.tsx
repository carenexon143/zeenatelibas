/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import logo from '../images/logo.png';

export default function Newsletter() {
  return (
    <section className="py-10 bg-emerald relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none">
        <img src={logo} alt="" className="w-full h-full object-contain rotate-12" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20 pointer-events-none">
        <img src={logo} alt="" className="w-full h-full object-contain -rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass p-6 md:p-10 rounded-[3rem] text-center border-gold/30">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-xs tracking-[0.5em] uppercase mb-4 block">Join the inner circle</span>
            <h2 className="text-white text-3xl md:text-5xl font-serif mb-6 italic">Stay Updated</h2>
            <p className="text-white/60 text-xs md:text-sm mb-8 tracking-wide uppercase max-w-lg mx-auto leading-relaxed">
              Subscribe for exclusive access to our latest collections and private launch invitations.
            </p>

            <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="bg-white/5 border border-white/20 text-white px-8 py-4 w-full md:flex-grow font-sans text-xs tracking-widest focus:outline-none focus:border-gold transition-colors placeholder:text-white/30"
              />
              <button className="gold-shimmer text-emerald font-bold tracking-[0.3em] uppercase px-10 py-4 text-xs transition-transform transform active:scale-95 shadow-lg shadow-gold/20">
                Notify Me
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
