/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Send, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 px-6 sm:px-12 py-20 bg-luxury-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 text-[10px] tracking-[0.3em] uppercase text-slate-500">
        <div className="space-y-12">
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold tracking-tighter text-2xl font-display uppercase">LetGrowth</span>
            <span className="text-luxury-gold font-bold">WithSaJu</span>
          </div>
          
          <div className="flex flex-col gap-6">
            <Link to="/locations/riyadh" className="flex items-center gap-3 hover:text-luxury-gold transition-colors">
              <span className="w-1.5 h-1.5 bg-luxury-gold rotate-45"></span>
              <span>Global Intelligence Node — Riyadh, KSA</span>
            </Link>
            <Link to="/locations/dubai" className="flex items-center gap-3 hover:text-luxury-gold transition-colors">
              <span className="w-1.5 h-1.5 bg-luxury-green rotate-45"></span>
              <span>PropTech Loop — Dubai, UAE</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          <div className="flex flex-col gap-6">
            <span className="text-white/40">Verticals</span>
            <Link to="/services/growth" className="hover:text-luxury-gold transition-colors">Strategic Marketing</Link>
            <Link to="/services/intelligence" className="hover:text-luxury-gold transition-colors">Agentic AI</Link>
            <Link to="/services/infrastructure" className="hover:text-luxury-gold transition-colors">PropTech</Link>
            <Link to="/services/defense" className="hover:text-luxury-gold transition-colors">Cyber Defense</Link>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-white/40">Locations</span>
            <Link to="/locations" className="hover:text-luxury-gold transition-colors">All Nodes</Link>
            <Link to="/locations/riyadh" className="hover:text-luxury-gold transition-colors">Riyadh</Link>
            <Link to="/locations/dubai" className="hover:text-luxury-gold transition-colors">Dubai</Link>
            <Link to="/locations/abu-dhabi" className="hover:text-luxury-gold transition-colors">Abu Dhabi</Link>
            <Link to="/locations/manama" className="hover:text-luxury-gold transition-colors">Manama</Link>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-white/40">Legal</span>
            <a href="#" className="hover:text-luxury-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">NDA Policy</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Vision 2030</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition-colors uppercase tracking-[0.4em] text-[8px]">LinkedIn</a>
           <a href="#" className="hover:text-white transition-colors uppercase tracking-[0.4em] text-[8px]">X / Twitter</a>
        </div>
        <div className="text-[9px] uppercase tracking-[0.4em] text-white/20">
          © 2026 LetGrowthWithSaJu Strategic — All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:border-luxury-gold hover:text-luxury-gold transition-all">
      <Icon size={18} />
    </a>
  );
}
