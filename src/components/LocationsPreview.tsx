/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const emirates = [
  { 
    city: "Abu Dhabi", 
    country: "UAE", 
    slug: "abu-dhabi", 
    role: "Institutional",
    image: "https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=800&auto=format&fit=crop"
  },
  { 
    city: "Dubai", 
    country: "UAE", 
    slug: "dubai", 
    role: "PropTech",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop"
  },
  { 
    city: "Sharjah", 
    country: "UAE", 
    slug: "sharjah", 
    role: "Culture",
    image: "https://images.unsplash.com/photo-1563245312-d0f507b55db5?q=80&w=800&auto=format&fit=crop"
  },
  { 
    city: "Ajman", 
    country: "UAE", 
    slug: "ajman", 
    role: "Trade",
    image: "https://images.unsplash.com/photo-1627444743285-d72f9179836a?q=80&w=800&auto=format&fit=crop"
  },
  { 
    city: "UAQ", 
    country: "UAE", 
    slug: "uaq", 
    role: "Sustainability",
    image: "https://images.unsplash.com/photo-1628131343729-ea2d863f699d?q=80&w=800&auto=format&fit=crop"
  },
  { 
    city: "RAK", 
    country: "UAE", 
    slug: "rak", 
    role: "Industrial",
    image: "https://images.unsplash.com/photo-1591873837330-972cb7917711?q=80&w=800&auto=format&fit=crop"
  },
  { 
    city: "Fujairah", 
    country: "UAE", 
    slug: "fujairah", 
    role: "Energy",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&auto=format&fit=crop"
  }
];

export default function LocationsPreview() {
  return (
    <section className="py-32 bg-black/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div>
            <div className="text-luxury-gold font-mono text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">Regional Command</div>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter leading-none">
              Strategic <br/> <span className="text-white/40">Nexus</span>
            </h2>
          </div>
          <Link 
            to="/locations"
            className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white font-bold hover:text-luxury-gold transition-colors"
          >
            Explore Global Footprint
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-luxury-gold transition-colors">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-3xl">
          {emirates.map((em) => (
            <LocationCard key={em.slug} {...em} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationCard({ city, slug, role, image }: { city: string; slug: string; role: string; image: string }) {
  return (
    <Link to={`/locations/${slug}`} className="group relative h-64 md:h-96 overflow-hidden block bg-luxury-dark/40">
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={city} 
          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700 ease-out"
        />
      </div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
        <div className="text-luxury-gold font-mono text-[8px] uppercase tracking-widest mb-1 opacity-60">{role}</div>
        <h3 className="text-lg md:text-2xl font-display font-bold text-white uppercase tracking-tighter group-hover:text-luxury-gold transition-colors">{city}</h3>
        <div className="mt-4 w-0 group-hover:w-full h-px bg-luxury-gold transition-all duration-500"></div>
      </div>
      <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
        <MapPin size={16} className="text-luxury-gold" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/60 to-transparent opacity-80 z-10" />
    </Link>
  );
}
