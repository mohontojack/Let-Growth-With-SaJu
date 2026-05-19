/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { TrendingUp, Cpu, Database, Layout, Smartphone, MessageSquareCode, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

const services = [
  {
    slug: "growth",
    vertical: "vertical_growth",
    items: [
      { id: 1, title: "service_marketing", icon: TrendingUp, color: "text-blue-500", bg: "bg-blue-500/10" },
      { id: 2, title: "nav_portfolio", icon: Layout, color: "text-indigo-500", bg: "bg-indigo-500/10" },
    ]
  },
  {
    slug: "intelligence",
    vertical: "vertical_intelligence",
    items: [
      { id: 3, title: "service_ai", icon: MessageSquareCode, color: "text-luxury-gold", bg: "bg-luxury-gold/10" },
      { id: 4, title: "service_data", icon: Database, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    ]
  },
  {
    slug: "infrastructure",
    vertical: "vertical_infrastructure",
    items: [
      { id: 5, title: "service_proptech", icon: Cpu, color: "text-orange-500", bg: "bg-orange-500/10" },
      { id: 6, title: "service_software", icon: Smartphone, color: "text-purple-500", bg: "bg-purple-500/10" },
    ]
  }
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="relative z-10 py-32 bg-black/60 border-t border-white/5 overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="text-left rtl:text-right">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-luxury-gold font-mono text-[10px] uppercase tracking-[0.4em] mb-4"
            >
              Excellence Redefined
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter leading-none">
              Nexus of <br/> <span className="text-white/40">Innovation</span>
            </h2>
          </div>
          
          <div className="max-w-sm">
            <p className="text-slate-400 text-sm leading-relaxed uppercase tracking-wider">
              From agentic systems to proprietary proptech loops, we build the infrastructure of digital dominance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4">
          {/* Growth - Large Card */}
          <Link to="/services/growth" className="md:col-span-4 md:row-span-2 group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="h-full glass p-12 relative overflow-hidden flex flex-col justify-between group-hover:border-luxury-gold transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="text-luxury-gold font-mono text-xs mb-6">01 — GROWTH_VISIBLE</div>
                <h3 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-6 group-hover:text-gradient-gold transition-all">
                  Strategic <br/> Marketing
                </h3>
                <p className="text-slate-400 text-lg max-w-md font-light">
                  Global standards with deep local roots. We craft brand identities that resonate across the GCC and drive performance loops that never sleep.
                </p>
              </div>
              
              <div className="mt-12 flex items-center justify-between relative z-10">
                <div className="flex gap-3">
                  <span className="px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-white/40">Branding</span>
                  <span className="px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-white/40">KSA Compliant</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-luxury-dark transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>

              {/* Graphical element */}
              <div className="absolute top-0 right-0 w-1/2 h-full -z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path 
                    animate={{ d: ["M0,50 Q25,30 50,50 T100,50", "M0,50 Q25,70 50,50 T100,50", "M0,50 Q25,30 50,50 T100,50"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    d="M0,50 Q25,30 50,50 T100,50" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
            </motion.div>
          </Link>

          {/* Intelligence */}
          <Link to="/services/intelligence" className="md:col-span-2 group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="h-full glass-gold p-8 relative overflow-hidden group-hover:border-luxury-green/40 transition-all duration-500"
            >
              <div className="text-luxury-green font-mono text-[10px] mb-4">02 — INTELLIGENCE_EVO</div>
              <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tighter mb-4">Agentic AI</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">Autonomous systems optimized for government-grade efficiency and precision.</p>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mt-auto group-hover:border-luxury-green group-hover:text-luxury-green transition-all">
                <ArrowRight size={16} />
              </div>
            </motion.div>
          </Link>

          {/* Infrastructure */}
          <Link to="/services/infrastructure" className="md:col-span-2 group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="h-full glass p-8 relative overflow-hidden group-hover:border-white/20 transition-all duration-500"
            >
              <div className="text-white/40 font-mono text-[10px] mb-4">03 — INFRA_CORE</div>
              <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tighter mb-4">PropTech</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">Future-proofing real estate operations with bespoke software and metaverse loops.</p>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mt-auto group-hover:translate-x-1 transition-all">
                <ArrowRight size={16} />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
