/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Facebook } from 'lucide-react';
import logo from '../images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-emerald-light py-10 md:py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <img 
            src={logo} 
            alt="Zeenat-E-Libas Logo" 
            className="h-20 mb-8 object-contain" 
          />
          
          <div className="flex gap-8 mb-16">
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

          <div className="w-full h-px bg-white/10 mb-12" />

          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
            <span className="text-white/40 text-[10px] tracking-[0.4em] uppercase">© 2026 Zeenat-E-Libas</span>
            <span className="text-gold italic font-serif text-xl">Apka Libas Apki Zeenat</span>
            <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Crafted with Elegance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
