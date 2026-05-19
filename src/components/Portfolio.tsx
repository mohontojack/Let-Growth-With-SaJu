/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Link } from "react-router-dom";
import { ExternalLink, Building2, Globe } from "lucide-react";

const data = [
  { name: "Jan", growth: 400 },
  { name: "Feb", growth: 300 },
  { name: "Mar", growth: 600 },
  { name: "Apr", growth: 800 },
  { name: "May", growth: 500 },
  { name: "Jun", growth: 900 },
];

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="py-32 bg-black/40 border-y border-white/5 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-luxury-blue/10 rounded-full blur-[140px] pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="text-left rtl:text-right">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-4"
            >
              Proven Dominion
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 uppercase tracking-tighter leading-[0.85]">
              Strategic <br/> <span className="text-white/40">Impact</span>
            </h2>
          </div>
          <div className="bg-luxury-gold/5 border border-luxury-gold/20 p-10 rounded backdrop-blur-3xl group hover:border-luxury-gold transition-all shadow-glow-gold">
            <div className="text-5xl font-display font-bold text-gradient-gold mb-1">+142.8%</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">Aggregated Portfolio ROI</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Case Study 1: Real Estate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group relative glass p-10 rounded-3xl overflow-hidden hover:border-luxury-gold/40 transition-all duration-500"
          >
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-10">
              <div className="p-4 bg-luxury-gold/10 text-luxury-gold rounded-2xl border border-luxury-gold/20">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Elite PropTech Suite</h3>
                <div className="text-[10px] uppercase tracking-widest text-slate-500">Saudi Real Estate Firm</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-sm">
              Custom property management and predictive analytics platform optimized for NEOM-grade specifications.
            </p>
            
            <div className="h-64 w-full bg-black/20 rounded-2xl p-6 border border-white/5">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#d4af37" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#d4af37" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#05070a", border: "1px solid #d4af3733", color: "#fff", fontSize: "10px", borderRadius: "8px" }}
                    itemStyle={{ color: "#d4af37" }}
                  />
                  <Area type="monotone" dataKey="growth" stroke="#d4af37" fillOpacity={1} fill="url(#colorGrowth)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Case Study 2: Digital Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group relative glass p-10 rounded-3xl overflow-hidden hover:border-luxury-green/40 transition-all duration-500"
          >
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-10">
              <div className="p-4 bg-luxury-green/10 text-luxury-green rounded-2xl border border-luxury-green/20">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Regional SEO Nexus</h3>
                <div className="text-[10px] uppercase tracking-widest text-slate-500">UAE Retail Giant</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-sm">
              Arabic-first SEO loops that captured over 85% of target market share within Q1-Q2 cycles.
            </p>
            
            <div className="h-64 w-full bg-black/20 rounded-2xl p-6 border border-white/5">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Tooltip 
                    cursor={{fill: 'rgba(255,255,255,0.02)'}}
                    contentStyle={{ backgroundColor: "#05070a", border: "1px solid #50c87833", color: "#fff", fontSize: "10px", borderRadius: "8px" }}
                  />
                  <Bar dataKey="growth" fill="#50c878" radius={[2, 2, 0, 0]} barSize={20} opacity={0.6} hoverOpacity={1} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Metaverse Ecosystem CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 group relative bg-luxury-gold/5 border border-luxury-gold/20 rounded-[2.5rem] overflow-hidden p-16 text-center shadow-glow-gold"
        >
           <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
           <div className="relative z-10">
             <div className="text-luxury-gold font-mono text-[10px] mb-6 uppercase tracking-[0.5em] font-bold">Immersive PropTech</div>
             <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 uppercase tracking-tighter">The Metaverse <span className="text-white/30">Ecosystem</span></h3>
             <p className="text-slate-400 mb-12 max-w-2xl mx-auto uppercase tracking-[0.2em] text-[10px] leading-loose">Experience 360-degree immersive virtual tours developed for the region's top tier architectural icons.</p>
             <Link 
               to="/metaverse"
               className="px-12 py-6 bg-white text-luxury-dark font-bold uppercase tracking-[0.3em] text-[10px] rounded hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-4 mx-auto w-fit"
             >
               <span>{t("virtual_tour_cta")}</span>
               <ExternalLink size={18} />
             </Link>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
