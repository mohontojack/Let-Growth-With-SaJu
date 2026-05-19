/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

const partners = [
  "Institutional Vision",
  "Sovereign Tech",
  "Capital Nexus",
  "Elite Growth",
  "Digital Majesty",
  "Global Scale"
];

export default function Partners() {
  return (
    <section className="py-20 border-y border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-30">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="text-[10px] md:text-sm font-display font-bold uppercase tracking-[0.5em] text-white whitespace-nowrap"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
