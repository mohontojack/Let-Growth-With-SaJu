/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AIChatbot from "./AIChatbot";

interface LayoutProps {
  children: React.ReactNode;
  onOpenChat: () => void;
  isChatOpen: boolean;
  onCloseChat: () => void;
}

export default function Layout({ children, onOpenChat, isChatOpen, onCloseChat }: LayoutProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className={`min-h-screen bg-luxury-dark text-white selection:bg-luxury-gold selection:text-luxury-dark font-sans ${i18n.language === "ar" ? "rtl" : "ltr"}`}>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <AIChatbot isOpen={isChatOpen} onClose={onCloseChat} />
    </div>
  );
}
