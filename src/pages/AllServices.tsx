/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Cpu, Database, Layout, Smartphone, MessageSquareCode } from "lucide-react";
import { cn } from "@/src/lib/utils";

const services = [
  {
    slug: "growth",
    vertical: "Strategic Marketing",
    code: "GROWTH_01",
    description: "Dominating the digital landscape with precision branding and growth loops.",
    features: ["Luxury Positioning", "GCC Market Entry", "Performance Hacking"],
    icon: TrendingUp,
    color: "text-luxury-gold"
  },
  {
    slug: "intelligence",
    vertical: "Agentic AI",
    code: "INT_02",
    description: "Custom-built agentic systems that think, act, and evolve with your enterprise.",
    features: ["Autonomous Agents", "Arabic NLP", "Predictive Analytics"],
    icon: MessageSquareCode,
    color: "text-luxury-green"
  },
  {
    slug: "infrastructure",
    vertical: "PropTech & Software",
    code: "INFRA_03",
    description: "Future-proofing real estate and digital operations with bespoke software ecosystem.",
    features: ["Digital Twins", "ERP Ecosystems", "Cloud Infra"],
    icon: Cpu,
    color: "text-white"
  }
];

export default function AllServices() {
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
            The Nexus Directory
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-display font-bold text-white uppercase tracking-tighter leading-[0.8]">
            Tactical <br/> <span className="text-white/30">Verticals</span>
          </h1>
          <p className="mt-12 text-slate-400 text-xl font-light leading-relaxed max-w-2xl">
            Our ecosystem is divided into three distinct spheres of influence, each designed to drive exponential value for our GCC partners.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/services/${service.slug}`} className="block">
                <div className="glass hover:bg-white/5 p-12 transition-all duration-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 group-hover:border-luxury-gold/50">
                  <div className="flex gap-12 items-center">
                    <div className="text-7xl font-display font-bold text-white/5 group-hover:text-luxury-gold/20 transition-colors">
                      0{idx + 1}
                    </div>
                    <div className="max-w-md">
                      <div className={cn("font-mono text-[10px] uppercase tracking-widest mb-4", service.color)}>
                        {service.code}
                      </div>
                      <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tighter mb-4 group-hover:text-luxury-gold transition-colors">
                        {service.vertical}
                      </h2>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 md:justify-end max-w-sm">
                    {service.features.map(f => (
                      <span key={f} className="px-4 py-2 rounded-full border border-white/5 text-[9px] uppercase tracking-widest text-slate-400 whitespace-nowrap">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-luxury-dark transition-all shrink-0">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
