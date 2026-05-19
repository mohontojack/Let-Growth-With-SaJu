/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Box, Monitor, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Metaverse() {
  return (
    <div className="pt-32 pb-24 bg-luxury-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-luxury-gold text-xs font-bold uppercase tracking-widest mb-12 hover:opacity-70 transition-opacity">
          <ArrowLeft size={16} /> Exit Simulation
        </Link>

        <div className="relative mb-24 rounded-3xl overflow-hidden aspect-[21/9]">
           <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Metaverse" />
           <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent" />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
             <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-display font-bold text-white mb-6 uppercase tracking-tighter"
             >
               Neo-Oasis <span className="text-luxury-gold">Metaverse</span>
             </motion.h1>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto uppercase tracking-[0.2em] font-light">The Future of High-End PropTech Visualization</p>
           </div>
        </div>

        {/* Simulation Section */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-white">Live Simulation Engine</h2>
            <div className="flex items-center gap-2 text-luxury-green animate-pulse">
              <div className="w-2 h-2 bg-luxury-green rounded-full shadow-[0_0_10px_#50c878]"></div>
              <span className="text-[10px] uppercase font-bold tracking-widest">Active Link</span>
            </div>
          </div>
          
          <div className="relative bg-black rounded-3xl overflow-hidden border border-white/5 aspect-video flex items-center justify-center group">
            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1558223659-450a807d9b73?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-[10s]" />
            <div className="absolute inset-0 bg-luxury-dark/40 group-hover:bg-transparent transition-colors duration-500" />
            
            <div className="relative z-10 text-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 bg-luxury-gold text-luxury-dark rounded-full flex items-center justify-center cursor-pointer shadow-glow-gold mb-4"
              >
                <Monitor size={32} />
              </motion.div>
              <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/60">Initialize Walkthrough</p>
            </div>

            {/* HUD Elements */}
            <div className="absolute top-8 left-8 text-white/40 font-mono text-[8px] space-y-1">
              <div>LAT: 24.7136</div>
              <div>LONG: 46.6753</div>
              <div>ELEV: 612M</div>
            </div>
            <div className="absolute bottom-8 right-8 text-white/40 font-mono text-[8px] flex gap-4">
              <div>RENDER: R_PBR_ULTRA</div>
              <div>FPS: 144</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-luxury-gold transition-colors">
            <Box className="text-luxury-gold mb-6" size={32} />
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">Digital Twins</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Exact 1:1 replicas of architectural masterpieces, allowing for immersive walkthroughs before construction begins.</p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-luxury-gold transition-colors">
            <Monitor className="text-luxury-green mb-6" size={32} />
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">VR Sales Center</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Global buyers can experience properties in Riyadh, Dubai, or Doha from anywhere in the world using VR hardware.</p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-luxury-gold transition-colors">
            <Users className="text-luxury-gold mb-6" size={32} />
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">Social Ecosystems</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Integrated community hubs where residents can interact, manage amenities, and engage with the digital neighborhood.</p>
          </div>
        </div>
        <div className="bg-luxury-gold text-luxury-dark p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tighter mb-2">Request a Private Demo</h2>
            <p className="text-sm uppercase tracking-widest font-bold opacity-80">Experience the future of property sales today.</p>
          </div>
          <button className="px-10 py-5 bg-luxury-dark text-white font-bold uppercase tracking-widest text-xs rounded hover:scale-105 active:scale-95 transition-all">
            Contact Simulation Lab
          </button>
        </div>
      </div>
    </div>
  );
}
