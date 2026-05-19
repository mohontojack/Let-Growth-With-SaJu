/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Award, Globe, LineChart, Shield, Zap, Compass, Building, Landmark, Star, GraduationCap, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const uaeMarketInsights = [
  {
    emirate: "Dubai",
    focus: "PropTech & Global Scale",
    description: "Architected luxury performance tech ecosystems aligning with the Dubai Economic Agenda (D33). Pioneer of next-generation digital twin visualizations for the real estate sector.",
    icon: Building,
    stat: "AED 5B+ Portfolio Scope"
  },
  {
    emirate: "Abu Dhabi",
    focus: "Sovereign & GovTech Systems",
    description: "Designed mission-critical analytical frameworks and intelligent engines tailored to sovereignty policies and government workflow streamline.",
    icon: Landmark,
    stat: "Institutional Scale"
  },
  {
    emirate: "Sharjah",
    focus: "Cultural & Heritage tech Node",
    description: "Bridge between tradition and advanced intelligence. Spearheaded digital translations of creative cultural domains into sovereign digital assets.",
    icon: Compass,
    stat: "Heritage Preservation"
  },
  {
    emirate: "Northern Emirates",
    focus: "Industrial Analytics & Energy Loop",
    description: "Formed strategic integrations across RAK, Fujairah, and Ajman, focusing on maritime supply chain performance and environment-focused ESG setups.",
    icon: Zap,
    stat: "ESG & Industrial Optimization"
  }
];

const milestones = [
  {
    year: "2018",
    title: "GCC Market Entry",
    description: "Established the initial strategic frameworks targeting premium brand digitalization and luxury interface engineering across the Middle East."
  },
  {
    year: "2020",
    title: "The Agentic Pivot",
    description: "Transitioned full-suite operations toward integrated artificial intelligence hubs and cognitive systems tailored for high-scale enterprise operations."
  },
  {
    year: "2022",
    title: "Pioneering UAE PropTech",
    description: "Designed immersive interactive VR simulators and metaverse frameworks for high-profile real estate developments across Dubai."
  },
  {
    year: "2024",
    title: "Sovereign GovTech Launch",
    description: "Expanded core systems into secure government digital portals and national-scale ESG carbon-loop analysis infrastructures."
  },
  {
    year: "2025",
    title: "LetGrowth Integration",
    description: "Unified elite strategic digital consulting, cyber defense, and agentic AI technology into a single multi-national ecosystem: LetGrowthWithSaJu."
  }
];

const competencies = [
  {
    title: "Agentic Enterprise Architecture",
    description: "Architecting self-correcting neural networks and intelligent workflow pipelines capable of continuous autonomous optimizations.",
    icon: Zap,
  },
  {
    title: "Sovereign Cyber Defenses",
    description: "Ensuring deep data privacy compliance, localization, zero-trust protocols, and encrypted core databases matching local regulations.",
    icon: Shield,
  },
  {
    title: "Strategic Growth Intelligence",
    description: "Formulating modern market penetration programs using deep machine learning analytics to predict luxury consumer behaviors.",
    icon: LineChart,
  },
  {
    title: "International Strategic Alliances",
    description: "Bridging capital, high-profile technology providers, and institutional players to foster regional economic ecosystems.",
    icon: Globe,
  }
];

export default function Founder() {
  return (
    <div className="pt-32 pb-24 bg-luxury-dark min-h-screen">
      {/* Decorative background vectors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-luxury-green/5 rounded-full blur-[200px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 animate-fade-in">
        {/* Back navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-luxury-gold text-xs font-bold uppercase tracking-widest mb-12 hover:opacity-75 transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Headquarters
        </Link>

        {/* Hero Segment */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-luxury-gold font-mono text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">The Visionary Behind the Group</div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white uppercase tracking-tighter leading-tight mb-6">
                Sazzad Hossain <span className="text-gradient-gold">Saju</span>
              </h1>
              <p className="text-xl md:text-2xl text-luxury-gold font-serif italic mb-8">
                CEO, Founder & Chief Architect of Growth
              </p>
              
              <div className="h-px w-24 bg-gradient-to-r from-luxury-gold to-transparent mb-10"></div>
              
              <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed mb-6">
                Sazzad Hossain Saju is a premier technologies advisor, digital luxury pioneer, and strategic growth architect in the Middle East. Under his guidance, LetGrowth has transformed from a premium design studio into an integrated regional intelligence ecosystem serving the GCC's elite brands, family office conglomerates, and state-level institutions.
              </p>
              
              <p className="text-slate-400 font-light text-base md:text-lg leading-relaxed">
                By synthesizing deep computational knowledge with premium visual storytelling, Sazzad Hossain Saju redefined how regional brands scale, establishing a standard of elite luxury execution that aligns seamlessly with UAE’s national vision for future intelligence and capital.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Gold frame overlay */}
              <div className="absolute -inset-4 border border-luxury-gold/20 rounded-3xl -z-10 animate-pulse"></div>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-glow-green/10">
                <img 
                  src="https://i.ibb.co.com/ymsQBNKS/2.png" 
                  alt="Sazzad Hossain Saju" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-out hover:scale-105"
                />
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-black/90 border border-luxury-gold px-6 py-4 rounded-xl flex items-center gap-3 backdrop-blur shadow-xl">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-luxury-gold/10 text-luxury-gold">
                  <Star size={20} />
                </div>
                <div>
                  <div className="text-white font-display text-sm uppercase tracking-tight font-bold">10+ Years</div>
                  <div className="text-slate-400 text-[9px] font-mono uppercase tracking-widest">Industry Leadership</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Strategic Market Experience Across the UAE */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="text-luxury-gold font-mono text-[10px] uppercase tracking-[0.4em] font-bold">Local Expertise, Global Scope</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter mt-4">
              UAE Strategic Market Experience
            </h2>
            <p className="text-slate-400 font-light mt-4 max-w-2xl mx-auto text-sm md:text-base">
              A comprehensive blueprint of Sazzad Hossain Saju’s active operations, investments, and custom digital developments across the 7 Emirates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {uaeMarketInsights.map((area, idx) => (
              <motion.div
                key={area.emirate}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 md:p-10 rounded-3xl border border-white/5 hover:border-luxury-gold/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                      <area.icon size={16} className="text-luxury-gold" />
                      <span className="text-[10px] font-mono uppercase text-white tracking-widest">{area.emirate}</span>
                    </div>
                    <span className="text-[9px] font-mono text-luxury-green uppercase tracking-widest font-bold">Active Operation</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight mb-4">{area.focus}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">{area.description}</p>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[9px] font-mono text-white/45 uppercase tracking-widest">Growth Metric</span>
                  <span className="text-xs font-mono font-bold text-luxury-gold">{area.stat}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Areas of Core Expertise */}
        <div className="mb-32 py-24 border-y border-white/5 relative bg-black/40 rounded-[3rem] px-8 md:px-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.03),transparent_70%)] pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="text-luxury-gold font-mono text-[10px] uppercase tracking-[0.4em] font-bold">Operational Mastery</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter mt-4 leading-none mb-6">
                Core <span className="text-white/40">Competencies</span>
              </h2>
              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                Sazzad’s multi-disciplinary focus brings a balanced fusion of raw strategic guidance, ultimate UX polish, and unbreakable sovereign digital defense.
              </p>
              
              <div className="mt-8 flex gap-4">
                <div className="glass p-4 rounded-xl border-white/5 text-center">
                  <div className="text-xl md:text-2xl font-display font-bold text-white">100%</div>
                  <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest mt-1">Sovereignty</div>
                </div>
                <div className="glass p-4 rounded-xl border-white/5 text-center">
                  <div className="text-xl md:text-2xl font-display font-bold text-white">Elite</div>
                  <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest mt-1">UX Standard</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
              {competencies.map((comp) => (
                <div key={comp.title} className="p-8 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-luxury-gold/5 flex items-center justify-center text-luxury-gold mb-6">
                    <comp.icon size={24} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-tighter mb-3">{comp.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <span className="text-luxury-gold font-mono text-[10px] uppercase tracking-[0.4em] font-bold">The Journey of Impact</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter mt-4">
              Strategic Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative pl-8 border-l border-white/10 space-y-16 py-4">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Visual node */}
                <div className="absolute -left-12 top-1 w-8 h-8 rounded-full border border-luxury-gold bg-luxury-dark flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-luxury-gold animate-pulse"></div>
                </div>
                
                <div className="text-luxury-gold font-display font-bold text-2xl mb-2">{milestone.year}</div>
                <h3 className="text-lg md:text-xl font-display font-bold text-white uppercase tracking-tight mb-3">{milestone.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Message / Call To Action */}
        <div className="glass p-10 md:p-16 rounded-[2.5rem] border border-luxury-gold/20 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none"></div>
          
          <span className="text-luxury-gold font-mono text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">Direct Access</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter mb-6 max-w-2xl leading-none">
            Architect Your <span className="text-gradient-gold">Next Breakthrough</span> Directly
          </h2>
          <p className="text-slate-400 font-light text-sm md:text-base max-w-xl leading-relaxed mb-10">
            Discuss sovereign deployments, next-generation marketing systems, or digital luxury integrations directly with the office of Sazzad Hossain Saju.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a 
              href="mailto:office@letgrowthwithsaju.com" 
              className="px-8 py-4 bg-luxury-gold text-luxury-dark rounded-full font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all w-full sm:w-auto shrink-0"
            >
              Contact Board Room
            </a>
            <button 
              onClick={() => {
                // Open Chatbot automatically
                const chatBtn = document.querySelector('[aria-label="Toggle chat"]') as HTMLButtonElement;
                if (chatBtn) chatBtn.click();
              }}
              className="px-8 py-4 bg-white/5 text-white rounded-full font-bold uppercase border border-white/10 hover:border-luxury-gold tracking-widest text-[10px] hover:scale-105 transition-all w-full sm:w-auto"
            >
              Initiate Chat Node
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
