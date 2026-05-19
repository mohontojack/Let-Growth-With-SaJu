/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const locations = [
  {
    slug: "riyadh",
    city: "Riyadh",
    country: "Saudi Arabia",
    role: "Global Intelligence Node",
    description: "Our primary strategic hub for Vision 2030 initiatives and regional digital transformation.",
    image: "https://images.unsplash.com/photo-1587974914183-94bfc962553b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    role: "PropTech Loop",
    description: "The epicenter of our immersive luxury real estate software and metaverse development.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    role: "Institutional Hub",
    description: "Specializing in sovereign wealth intelligence and high-level government digital strategy.",
    image: "https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "sharjah",
    city: "Sharjah",
    country: "United Arab Emirates",
    role: "Cultural Tech Node",
    description: "Bridging architectural heritage with modern digital preservation and creative economy loops.",
    image: "https://images.unsplash.com/photo-1563245312-d0f507b55db5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "rak",
    city: "Ras Al Khaimah",
    country: "United Arab Emirates",
    role: "Industrial Logic",
    description: "Optimizing industrial supply chains and manufacturing intelligence for the northern emirates.",
    image: "https://images.unsplash.com/photo-1591873837330-972cb7917711?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "fujairah",
    city: "Fujairah",
    country: "United Arab Emirates",
    role: "Energy Nexus",
    description: "Managing deep-tech solutions for global energy logistics and maritime infrastructure.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "ajman",
    city: "Ajman",
    country: "United Arab Emirates",
    role: "Digital Trade",
    description: "Streamlining digital commerce and institutional trade protocols for rapid growth.",
    image: "https://images.unsplash.com/photo-1627444743285-d72f9179836a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "uaq",
    city: "Umm Al Quwain",
    country: "United Arab Emirates",
    role: "Sustainability Node",
    description: "Pioneering blue economy tech and sustainable ecosystem management infrastructure.",
    image: "https://images.unsplash.com/photo-1628131343729-ea2d863f699d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "manama",
    city: "Manama",
    country: "Bahrain",
    role: "FinTech & Logistics Node",
    description: "Specializing in secure financial infrastructure and optimized regional supply chain logic.",
    image: "https://images.unsplash.com/photo-1549944850-84e00be4203b?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Locations() {
  const { t } = useTranslation();

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="mb-24 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-luxury-gold font-mono text-[10px] uppercase tracking-[0.4em] mb-6 font-bold"
          >
            Global Presence
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-display font-bold text-white uppercase tracking-tighter leading-[0.8]">
            Strategic <br/> <span className="text-white/30">Nodes</span>
          </h1>
          <p className="mt-12 text-slate-400 text-xl font-light leading-relaxed max-w-2xl">
            LetGrowthWithSaJu operates across the GCC's most vital economic engines, providing localized expertise with global standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden glass border-white/5 hover:border-luxury-gold/30 transition-all duration-700"
            >
              <div className="absolute inset-0">
                <img 
                  src={loc.image} 
                  alt={loc.city} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/60 to-transparent" />
              </div>

              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="flex items-center gap-2 text-luxury-gold font-mono text-[10px] uppercase tracking-widest mb-4">
                  <MapPin size={12} />
                  <span>{loc.country}</span>
                </div>
                <h3 className="text-4xl font-display font-bold text-white uppercase tracking-tight mb-2">{loc.city}</h3>
                <p className="text-white/60 text-[10px] uppercase tracking-widest mb-6 font-bold">{loc.role}</p>
                
                <Link 
                  to={`/locations/${loc.slug}`}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold hover:text-luxury-dark transition-all"
                >
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
