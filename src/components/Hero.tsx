/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero({ onOpenChat }: { onOpenChat: () => void }) {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Atmospheric Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-luxury-blue/20 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 max-w-4xl text-left rtl:text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-4 py-2 glass-gold rounded-full mb-12"
          >
            <div className="w-2 h-2 bg-luxury-green rounded-full animate-pulse shadow-glow-green"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold">The Agentic Era — GCC 2030</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl xl:text-[11rem] font-display font-light mb-12 text-white tracking-tighter leading-[0.75]"
          >
            Let <span className="font-bold text-gradient-gold">Growth</span><br/>
            <span className="italic font-serif text-white/50">Nexus</span> <span className="font-bold relative">
              SaJu
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute bottom-4 left-0 h-1 bg-luxury-gold/30 -z-10"
              />
            </span>
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-xl font-light tracking-wide"
            >
              Architecting the digital dominance of Tomorrow. We bridge the gap between visionary leadership and agentic execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden xl:flex flex-col border-l border-white/10 pl-8"
            >
              <div className="text-4xl font-display font-bold text-white tracking-tighter">$1.2B+</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Pipeline Optimized</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-6"
          >
            <button 
              onClick={onOpenChat}
              className="px-12 py-6 bg-luxury-gold text-luxury-dark font-bold uppercase tracking-[0.3em] text-[10px] rounded hover:scale-105 active:scale-95 transition-all shadow-gold flex items-center gap-4 group"
            >
              <span>{t("cta_agent")}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-10 py-6 glass hover:bg-white/5 transition-all text-[10px] items-center gap-3 font-bold uppercase tracking-[0.3em] rounded text-white flex">
              Strategic Brief
            </button>
          </motion.div>
        </div>

        {/* Floating Abstract Element */}
        <div className="lg:col-span-4 relative hidden xl:flex justify-center items-center">
          <motion.div 
            animate={{ 
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-[400px] h-[400px] border border-white/5 rounded-full relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-luxury-gold rounded-full glow-gold-sm"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-luxury-green rounded-full glow-sm"></div>
            
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 border border-white/10 rounded-full"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-24 h-24 border border-luxury-gold rotate-45 flex items-center justify-center animate-pulse">
                <Sparkles className="text-luxury-gold w-8 h-8 -rotate-45" />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
