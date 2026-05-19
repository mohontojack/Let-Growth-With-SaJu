/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { MapPin, ArrowLeft, Building2, Globe, Shield } from "lucide-react";

const locationData: Record<string, any> = {
  riyadh: {
    city: "Riyadh",
    country: "Saudi Arabia",
    role: "Global Intelligence Node",
    description: "The Riyadh node is the strategic heartbeat of our operations in the Kingdom. Focused on Vision 2030 alignment, this intelligence node coordinates large-scale digital transformation and institutional growth strategies.",
    image: "https://images.unsplash.com/photo-1587974914183-94bfc962553b?q=80&w=1600&auto=format&fit=crop",
    highlights: ["GIGA-Project Consulting", "Institutional AI Integration", "Sovereign Tech Infrastructure"]
  },
  dubai: {
    city: "Dubai",
    country: "United Arab Emirates",
    role: "PropTech Loop",
    description: "Dubai serves as our creative and technical laboratory for the Metaverse and high-end PropTech. Here, we build the immersive digital twins that represent the tomorrow of luxury real estate.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Metaverse Ecosystems", "Luxury UI/UX Design", "Real Estate Performance Tech"]
  },
  "abu-dhabi": {
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    role: "Institutional Hub",
    description: "Our Abu Dhabi operations focus on the intersection of capital and technology. We provide high-level strategy for sovereign entities and institutional-grade digital infrastructure.",
    image: "https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Sovereign Wealth Strategy", "Institutional Infra", "Regulatory Tech"]
  },
  sharjah: {
    city: "Sharjah",
    country: "United Arab Emirates",
    role: "Cultural Tech Node",
    description: "The Sharjah node bridges tradition with translation. We apply agentic intelligence to cultural preservation, architectural design, and the creative economy.",
    image: "https://images.unsplash.com/photo-1563245312-d0f507b55db5?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Creative Economy Loops", "Heritage Digitization", "Design Intelligence"]
  },
  rak: {
    city: "Ras Al Khaimah",
    country: "United Arab Emirates",
    role: "Industrial Logic",
    description: "Specializing in the industrial backbone, our RAK node optimizes logistics, manufacturing, and supply chain performance through custom-built neural networks.",
    image: "https://images.unsplash.com/photo-1591873837330-972cb7917711?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Supply Chain AI", "Industrial Optimization", "Logistics Architecture"]
  },
  fujairah: {
    city: "Fujairah",
    country: "United Arab Emirates",
    role: "Energy Nexus",
    description: "Fujairah drives our maritime and energy sector intelligence. We build secure software ecosystems for complex global trade and resource management.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Maritime OS", "Energy Trade Logic", "Infrastructure Security"]
  },
  ajman: {
    city: "Ajman",
    country: "United Arab Emirates",
    role: "Digital Trade",
    description: "Focused on SME growth and digital trade corridors, Ajman is our hub for rapid scale and merchant-centric digital twins.",
    image: "https://images.unsplash.com/photo-1627444743285-d72f9179836a?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Trade Intelligence", "SME Digitalization", "Growth Automation"]
  },
  uaq: {
    city: "Umm Al Quwain",
    country: "United Arab Emirates",
    role: "Sustainability Node",
    description: "Our UAQ center leads our environmental and sustainability tech efforts, focusing on blue economy logic and regenerative infrastructure software.",
    image: "https://images.unsplash.com/photo-1628131343729-ea2d863f699d?q=80&w=1600&auto=format&fit=crop",
    highlights: ["ESG Reporting", "Sustainability AI", "Environmental Logic"]
  },
  manama: {
    city: "Manama",
    country: "Bahrain",
    role: "FinTech & Logistics Node",
    description: "Our Manama center specializes in the plumbing of digital economies. From secure fintech protocols to optimized logistics and supply chain software, Manama drives efficiency across the region.",
    image: "https://images.unsplash.com/photo-1549944850-84e00be4203b?q=80&w=1600&auto=format&fit=crop",
    highlights: ["Secure Financial Systems", "Supply Chain Optimization", "Regional Integration Logic"]
  }
};

export default function LocationDetail() {
  const { slug } = useParams();
  const location = locationData[slug || ""];

  if (!location) return <div className="pt-40 text-center text-white">Node Not Found</div>;

  return (
    <div className="pb-32">
      <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <img 
          src={location.image} 
          alt={location.city} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/40 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 max-w-7xl mx-auto px-6 sm:px-12 pb-20">
          <Link to="/locations" className="flex items-center gap-2 text-luxury-gold hover:text-white transition-colors uppercase tracking-[0.4em] text-[10px] font-bold mb-8">
            <ArrowLeft size={14} />
            Back to Nodes
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 text-luxury-gold font-mono text-[10px] uppercase tracking-widest mb-4">
              <MapPin size={12} />
              <span>{location.country} / {location.role}</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-bold text-white uppercase tracking-tighter leading-none">
              {location.city}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-24">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest mb-10 border-b border-white/10 pb-6">Nexus Intelligence</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              {location.description}
            </p>
            
            <div className="grid gap-6">
              {location.highlights.map((h: string) => (
                <div key={h} className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 bg-luxury-gold rotate-45 group-hover:scale-150 transition-transform" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-12 rounded-3xl border-white/5 space-y-12">
            <div className="flex gap-8">
              <div className="p-4 bg-luxury-gold/10 text-luxury-gold rounded-2xl border border-luxury-gold/20 shrink-0 h-fit">
                <Building2 size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest mb-2">Institutional Synergy</h4>
                <p className="text-slate-500 text-sm">Deeply embedded within local regulatory and economic frameworks.</p>
              </div>
            </div>
            
            <div className="flex gap-8">
              <div className="p-4 bg-luxury-green/10 text-luxury-green rounded-2xl border border-luxury-green/20 shrink-0 h-fit">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest mb-2">Certified Security</h4>
                <p className="text-slate-500 text-sm">Compliant with regional data sovereignty and high-security protocols.</p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="p-4 bg-white/5 text-white rounded-2xl border border-white/10 shrink-0 h-fit">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest mb-2">GCC Integration</h4>
                <p className="text-slate-500 text-sm">Seamless connectivity with our other regional intelligence hubs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
