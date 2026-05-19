/**
* @license
* SPDX-License-Identifier: Apache-2.0
*/

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ArrowUpRight, Calendar } from "lucide-react";

const posts = [
 {
   title: "How Agentic AI supports Saudi Vision 2030",
   category: "Intelligence",
   date: "May 15, 2026",
   image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
 },
 {
   title: "The future of Real Estate in Dubai: Data-Driven Decisions",
   category: "PropTech",
   date: "May 10, 2026",
   image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
 },
 {
   title: "Why Arabic SEO is the missing link in your strategy",
   category: "Growth",
   date: "May 02, 2026",
   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
 }
];

export default function Blog() {
 const { t } = useTranslation();

 return (
   <section className="py-24 border-t border-white/5">
     <div className="max-w-7xl mx-auto px-6 sm:px-12">
       <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
         <div>
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 uppercase tracking-tighter">{t("blog_title")}</h2>
           <p className="text-slate-500 text-xs uppercase tracking-[0.3em]">Latest from our technology research labs</p>
         </div>
         <button className="text-luxury-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity">
           View Full Archive <ArrowUpRight size={14} />
         </button>
       </div>

       <div className="grid md:grid-cols-3 gap-12">
         {posts.map((post, idx) => (
           <motion.div
             key={post.title}
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ delay: idx * 0.1 }}
             className="group cursor-pointer"
           >
             <div className="relative aspect-[16/10] overflow-hidden rounded mb-6 border border-white/5 group-hover:border-luxury-gold/50 transition-colors">
               <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute top-4 left-4 bg-luxury-dark/90 backdrop-blur-md px-3 py-1 text-[9px] font-bold text-luxury-gold uppercase tracking-widest border border-luxury-gold/30">
                 {post.category}
               </div>
             </div>
             <div>
               <div className="flex items-center text-slate-500 text-[10px] uppercase tracking-widest gap-2 mb-3">
                 <Calendar size={12} className="text-luxury-gold" />
                 {post.date}
               </div>
               <h3 className="text-xl font-bold text-white group-hover:text-luxury-gold transition-colors leading-snug">
                 {post.title}
               </h3>
             </div>
           </motion.div>
         ))}
       </div>
     </div>
   </section>
 );
}
