/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Languages } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const toggleLanguage = () => {
    const nextLng = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(nextLng);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-7xl">
      <div className="glass rounded-2xl border border-white/10 px-8 py-4 shadow-glass transition-all duration-500 hover:border-white/20">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-4 cursor-pointer group">
            <div className="w-10 h-10 border border-luxury-gold rotate-45 flex items-center justify-center group-hover:border-luxury-green transition-all duration-500">
              <div className="w-4 h-4 bg-luxury-green rounded-full shadow-glow-green"></div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-display font-bold tracking-tighter text-white">LetGrowth</span>
              <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-luxury-gold group-hover:text-luxury-green transition-colors">WithSaJu</span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-10 items-center">
            <div className="flex space-x-8 items-center uppercase text-[10px] tracking-[0.2em] font-bold">
              <NavLink to="/#home" active={isHome}>{t("nav_home")}</NavLink>
              <NavLink to="/services" active={location.pathname === "/services"}>{t("nav_services")}</NavLink>
              <NavLink to="/#portfolio">{t("nav_portfolio")}</NavLink>
            </div>
            
            <div className="h-4 w-px bg-white/10"></div>
            
            <button 
              onClick={toggleLanguage}
              className="px-4 py-2 bg-white/5 rounded-full border border-white/5 text-[10px] uppercase font-bold tracking-widest hover:border-luxury-gold transition-all flex items-center gap-2 group"
            >
              <span className="text-slate-500 group-hover:text-white transition-colors">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
              <span className="text-luxury-gold">|</span>
              <span className="font-serif text-sm">{i18n.language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
             <button onClick={toggleLanguage} className="p-2 text-luxury-gold">
               <Languages size={24} />
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, active }: { to: string; children: React.ReactNode; active?: boolean }) {
  const isHash = to.startsWith("/#");
  
  if (isHash) {
    return (
      <a 
        href={to}
        className={cn(
          "transition-colors",
          active ? "text-luxury-gold border-b border-luxury-gold pb-1" : "text-white/60 hover:text-luxury-gold"
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      to={to}
      className={cn(
        "transition-colors",
        active ? "text-luxury-gold border-b border-luxury-gold pb-1" : "text-white/60 hover:text-luxury-gold"
      )}
    >
      {children}
    </Link>
  );
}
