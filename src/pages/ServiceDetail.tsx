/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const serviceData: Record<string, any> = {
  growth: {
    title: "service_marketing",
    subtitle: "Dominating the digital landscape with precision branding and growth loops.",
    features: [
      "Strategic Branding & Luxury Positioning",
      "KSA & UAE Compliant Digital Marketing",
      "Performance Hacking & Lead Generation",
      "Arabic SEO & Content Localization"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  intelligence: {
    title: "service_ai",
    subtitle: "Custom-built agentic systems that think, act, and evolve with your enterprise.",
    features: [
      "Agentic AI Architecture & Deployment",
      "Advanced Data Analytics & Predictive Models",
      "Natural Language Processing for Arabic",
      "Process Automation & Intelligent RPA"
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
  },
  infrastructure: {
    title: "service_proptech",
    subtitle: "Future-proofing real estate and digital operations with bespoke software ecosystem.",
    features: [
      "PropTech Ecosystems & Metaverses",
      "Custom Enterprise Resource Planning (ERP)",
      "Secure Cloud Architecture",
      "Blockchain-backed Smart Contracts"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
  }
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const service = slug ? serviceData[slug] : null;

  if (!service) return <div>Service not found</div>;

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-luxury-gold text-xs font-bold uppercase tracking-widest mb-12 hover:opacity-70 transition-opacity">
          <ArrowLeft size={16} /> Back to Nexus
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
              {t(service.title)}
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              {service.subtitle}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {service.features.map((feature: string, i: number) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle2 size={18} className="text-luxury-green mt-1 shrink-0" />
                  <span className="text-slate-300 text-sm leading-snug">{feature}</span>
                </div>
              ))}
            </div>

            <button className="px-10 py-5 bg-luxury-gold text-luxury-dark font-bold uppercase tracking-widest text-[10px] rounded hover:scale-105 active:scale-95 transition-all shadow-glow-gold">
              Consult with an Expert
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-video lg:aspect-square overflow-hidden rounded-2xl border border-white/10"
          >
            <img src={service.image} alt={t(service.title)} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
