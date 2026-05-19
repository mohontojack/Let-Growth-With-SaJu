/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Quote, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CEOMessage() {
  return (
    <section className="py-32 relative overflow-hidden bg-luxury-dark/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 group">
              <img 
                src="https://i.ibb.co.com/ymsQBNKS/2.png" 
                alt="SaJu CEO" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-64 glass p-8 rounded-2xl border-white/10 hidden md:block">
              <div className="text-luxury-gold font-mono text-[10px] uppercase tracking-widest mb-2 font-bold">The Founder</div>
              <div className="text-white font-display text-xl uppercase tracking-tighter">Sazzad Hossain Saju</div>
              <div className="text-white/40 text-[9px] uppercase tracking-widest mt-1">CEO and Founder</div>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="absolute -top-16 -left-16 text-luxury-gold/10 hidden md:block"
            >
              <Quote size={160} />
            </motion.div>

            <div className="relative z-10">
              <div className="text-luxury-gold font-mono text-[10px] uppercase tracking-[0.4em] mb-8 font-bold">CEO's Manifesto</div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter leading-tight mb-10">
                Building the <span className="text-gradient-gold italic">Intelligence Infrastructure</span> of the next decade.
              </h2>
              
              <div className="space-y-6 text-slate-400 font-light text-lg leading-relaxed">
                <p>
                  "At LetGrowthWithSaJu, we don't just build software—we architect dominance. In the GCC's rapidly evolving landscape, the difference between growth and market leadership lies in agentic intelligence."
                </p>
                <p>
                  "Our mission is to empower the region's most ambitious entities with sovereign technology that thinks, adapts, and scales at the speed of vision. We are here to ensure that your digital footprint matches your institutional ambition."
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 md:w-20 h-px bg-luxury-gold"></div>
                  <div className="font-mono text-xs uppercase tracking-widest text-luxury-gold">Sazzad Hossain Saju — CEO and Founder</div>
                </div>
                <Link 
                  to="/founder" 
                  className="inline-flex items-center gap-2 text-white/80 hover:text-luxury-gold hover:translate-x-1 transition-all text-xs font-mono uppercase tracking-widest sm:ml-auto group"
                >
                  Expertise & UAE Profile <ArrowUpRight size={14} className="text-luxury-gold" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
