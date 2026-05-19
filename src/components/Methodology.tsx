/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Zap, Layers, Cpu, Repeat } from "lucide-react";

const steps = [
  {
    title: "Intelligence Blueprint",
    description: "We architect the neural map of your enterprise, identifying efficiency gaps and agentic opportunities.",
    icon: Layers,
    color: "text-luxury-gold"
  },
  {
    title: "Node Integration",
    description: "Deployment of custom-built intelligence nodes across your digital and physical infrastructure.",
    icon: Cpu,
    color: "text-luxury-green"
  },
  {
    title: "Agentic Loop",
    description: "Continuous optimization through self-correcting algorithms and real-time data translation.",
    icon: Repeat,
    color: "text-blue-400"
  },
  {
    title: "Sovereign Growth",
    description: "Archiving dominance in your sector with secure, proprietary infrastructure and unmatched scale.",
    icon: Zap,
    color: "text-white"
  }
];

export default function Methodology() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="mb-24">
          <div className="text-luxury-gold font-mono text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">The SaJu Protocol</div>
          <h2 className="text-5xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter leading-none">
            Our <span className="text-white/40">Methodology</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-10 rounded-3xl border-white/5 hover:border-white/10 transition-all flex flex-col h-full"
            >
              <div className={`mb-8 ${step.color}`}>
                <step.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight mb-4">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{step.description}</p>
              <div className="mt-auto pt-6 border-t border-white/5 font-mono text-[8px] text-white/20 uppercase tracking-widest">
                Protocol {idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
