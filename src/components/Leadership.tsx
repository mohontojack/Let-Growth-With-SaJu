/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Linkedin, Mail } from "lucide-react";

const leaders = [
  {
    name: "SaJu",
    role: "CEO & Founder",
    bio: "Visionary architect of the LetGrowthWithSaJu ecosystem, specializing in digital luxury and strategic GCC growth loops.",
    image: "https://i.ibb.co.com/ymsQBNKS/2.png",
  },
  {
    name: "Mohonto",
    role: "Co-Founder & Lead of Team Management",
    bio: "Strategic operations lead focused on institutional-grade performance and managing the nexus of our high-performance talent.",
    image: "https://i.ibb.co.com/1Gj88MN0/518242003-1803999237179411-3144747487208824837-n.jpg",
  },
  {
    name: "Sajib Roy",
    role: "Co-Founder & Head of Finance",
    bio: "Fiscal master directing the economic infrastructure of our premium ecosystem with precision and institutional rigor.",
    image: "https://i.ibb.co.com/wZy0p5D5/1.png",
  }
];

export default function Leadership() {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-black/40 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="text-left rtl:text-right">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="text-luxury-gold font-mono text-[10px] uppercase tracking-[0.4em] mb-4 font-bold"
             >
                Visionary Governance
             </motion.div>
             <h2 className="text-5xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter leading-none">
               The <span className="text-white/40">Architects</span>
             </h2>
          </div>
          <div className="max-w-md">
            <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] leading-relaxed">
               Bridging the divide between traditional institutional stability and the exponential growth of neural economies.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[600px] rounded-3xl overflow-hidden glass border-white/5 hover:border-luxury-gold/20 transition-all duration-700"
            >
              <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img 
                   src={leader.image} 
                   alt={leader.name} 
                   className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/40 to-transparent" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-luxury-gold font-mono text-[10px] uppercase tracking-[0.4em] mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                   Strategic Board
                </div>
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tighter mb-2">{leader.name}</h3>
                <p className="text-white/60 text-xs font-mono uppercase tracking-widest mb-6">{leader.role}</p>
                
                <div className="overflow-hidden h-0 group-hover:h-32 transition-all duration-500 delay-100">
                  <p className="text-slate-400 text-xs leading-relaxed mb-8 italic">{leader.bio}</p>
                  <div className="flex space-x-6">
                    <button className="text-white/40 hover:text-luxury-gold transition-colors"><Linkedin size={20} /></button>
                    <button className="text-white/40 hover:text-luxury-gold transition-colors"><Mail size={20} /></button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
