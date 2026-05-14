/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Crown, Heart, Flower2 } from 'lucide-react';
import bridalImg from '../images/bridal.png';
import luxuryPretImg from '../images/luxury_pret.png';
import casualImg from '../images/casual.png';
import modernModestImg from '../images/modern_modest.png';

const collections = [
  {
    id: 1,
    title: "Bridal Collection",
    description: "Exquisite hand-crafted masterpieces for your most memorable day.",
    icon: <Crown className="w-8 h-8 text-gold" />,
    image: bridalImg,
  },
  {
    id: 2,
    title: "Luxury Pret",
    description: "Sophisticated ready-to-wear ensembles that redefine elegance.",
    icon: <Sparkles className="w-8 h-8 text-gold" />,
    image: luxuryPretImg,
  },
  {
    id: 3,
    title: "Casual Wear",
    description: "Day-to-day luxury crafted with breathable fabrics and chic designs.",
    icon: <Heart className="w-8 h-8 text-gold" />,
    image: casualImg,
  },
  {
    id: 4,
    title: "Modern Modest",
    description: "Timeless modesty met with contemporary silhouettes and fine detailing.",
    icon: <Flower2 className="w-8 h-8 text-gold" />,
    image: modernModestImg,
  }
];

export default function Collections() {
  return (
    <section id="collections" className="py-16 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 md:mb-20 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block">Curated Series</span>
            <h2 className="text-emerald text-3xl md:text-6xl font-serif leading-tight">
              A Symphony of <br />
              <span className="italic">Timeless Couture</span>
            </h2>
          </div>
          <p className="text-emerald/60 text-sm md:text-base max-w-sm mt-8 md:mt-0 font-medium tracking-tight">
            Explore our diverse ranges, each narrating a unique story of craftsmanship and heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 rounded-t-[100px]">
                <img 
                   src={item.image} 
                   alt={item.title} 
                   className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-500" />
                <div className="absolute top-6 left-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-emerald text-xl font-serif mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="text-emerald/60 text-xs leading-relaxed uppercase tracking-widest">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
