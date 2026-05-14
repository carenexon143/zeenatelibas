/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Instagram, Facebook, Bell } from 'lucide-react';
import logo from '../images/logo.png';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-8 py-6 bg-gradient-to-b from-emerald/40 to-transparent backdrop-blur-sm"
    >
      <div className="flex-1 flex items-center gap-4 md:gap-8">
        <div className="flex items-center gap-4 md:hidden">
          <a 
            href="https://www.instagram.com/zeenatelibas/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-gold transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61589598127030" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-gold transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
        <a href="#about" className="text-white/80 hover:text-gold transition-colors text-xs font-medium tracking-[0.2em] uppercase hidden md:block">The House</a>
        <a href="#collections" className="text-white/80 hover:text-gold transition-colors text-xs font-medium tracking-[0.2em] uppercase hidden md:block">Collections</a>
      </div>

      <div className="flex flex-col items-center">
         <img 
          src={logo} 
          alt="Zeenat-E-Libas Logo" 
          className="h-12 md:h-16 w-auto object-contain" 
        />
      </div>

      <div className="flex-1 flex items-center justify-end gap-4 md:gap-8">
        <a href="#contact" className="text-white/80 hover:text-gold transition-colors text-xs font-medium tracking-[0.2em] uppercase hidden md:block">Boutique</a>
        <button 
          onClick={() => alert("Notification sent! You will receive a message soon on your device.")}
          className="flex items-center justify-center w-10 h-10 md:w-auto md:h-auto md:px-6 md:py-2 border border-gold/50 text-gold hover:bg-gold hover:text-emerald transition-all text-xs font-medium tracking-[0.2em] uppercase rounded-full"
        >
          <Bell className="w-5 h-5 md:w-4 md:h-4" />
          <span className="hidden md:inline ml-2">Notify Me</span>
        </button>
      </div>
    </motion.nav>
  );
}
