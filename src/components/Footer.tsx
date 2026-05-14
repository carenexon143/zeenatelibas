/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Facebook } from 'lucide-react';
import logo from '../images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-emerald-light py-8 md:py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <img 
            src={logo} 
            alt="Zeenat-E-Libas Logo" 
            className="h-12 mb-6 object-contain" 
          />
          
          <div className="flex gap-8 mb-8">
            {[
              { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: 'https://www.instagram.com/zeenatelibas/' },
              { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61589598127030' }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-gold transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="w-24 md:w-full h-px bg-white/10 mb-8" />

          <div className="flex flex-col items-center w-full gap-4 text-center">
            <span className="text-gold italic font-serif text-2xl md:text-3xl mb-4">Apka Libas Apki Zeenat</span>
            <div className="flex flex-col md:flex-row gap-4 md:gap-4 text-white/40 text-[10px] tracking-[0.4em] uppercase">
              <span>© 2026 Zeenat-E-Libas</span>
              <span>Developed by CareNexon</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
