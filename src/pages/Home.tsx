/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Leadership from "../components/Leadership";
import Blog from "../components/Blog";
import { motion } from "motion/react";

interface HomeProps {
  onOpenChat: () => void;
}

const brands = ["Vision 2030", "KSA Tech", "Dubai Future", "NEOM Partner", "PropTech Lux", "Agentic AI"];

export default function Home({ onOpenChat }: HomeProps) {
  return (
    <>
      <Hero onOpenChat={onOpenChat} />
      
      {/* Brand Marquee */}
      <div className="py-12 bg-white/5 border-y border-white/10 overflow-hidden relative">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-24 items-center"
        >
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span key={i} className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white/10 hover:text-luxury-gold transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-luxury-dark to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-luxury-dark to-transparent z-10" />
      </div>

      <Services />
      <Portfolio />
      <Leadership />
      <Blog />
    </>
  );
}
