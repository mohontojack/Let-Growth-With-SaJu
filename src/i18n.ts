import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav_home: "Home",
      nav_services: "Solutions",
      nav_portfolio: "Insights",
      nav_contact: "Contact",
      hero_title: "Driving Vision 2030 through Agentic AI",
      hero_subtitle: "The high-performance digital ecosystem designed to dominate the Middle East technology and consulting market.",
      cta_agent: "Launch AI Agent",
      vertical_growth: "Growth & Visibility",
      vertical_intelligence: "Intelligence & Future",
      vertical_infrastructure: "Digital Infrastructure",
      service_ai: "Agentic AI Solutions",
      service_data: "Data Analytics & Visuals",
      service_proptech: "PropTech & Real Estate",
      service_software: "Enterprise Custom Tech",
      service_marketing: "Branding & Marketing",
      footer_tagline: "The Future of Middle East Tech Lux.",
      language: "Language",
      leadership_title: "Visionary Leadership",
      leadership_subtitle: "Bridging global innovation with GCC cultural heritage.",
      blog_title: "Strategic Insights",
      virtual_tour_cta: "Experience the Metaverse",
    },
  },
  ar: {
    translation: {
      nav_home: "الرئيسية",
      nav_services: "الحلول",
      nav_portfolio: "الرؤى",
      nav_contact: "اتصل بنا",
      hero_title: "دفع رؤية 2030 من خلال الذكاء الاصطناعي الوكيل",
      hero_subtitle: "النظام الرقمي عالي الأداء المصمم للهيمنة على سوق التكنولوجيا والاستشارات في الشرق الأوسط.",
      cta_agent: "إطلاق وكيل الذكاء الاصطناعي",
      vertical_growth: "النمو والظهور",
      vertical_intelligence: "الذكاء والمستقبل",
      vertical_infrastructure: "البنية التحتية الرقمية",
      service_ai: "حلول الذكاء الاصطناعي الوكيل",
      service_data: "تحليل البيانات والمرئيات",
      service_proptech: "تكنولوجيا العقارات (PropTech)",
      service_software: "التقنيات المخصصة للمؤسسات",
      service_marketing: "العلامات التجارية والتسويق",
      footer_tagline: "مستقبل التكنولوجيا الفاخرة في الشرق الأوسط.",
      language: "اللغة",
      leadership_title: "القيادة الحكيمة",
      leadership_subtitle: "ربط الابتكار العالمي بالتراث الثقافي لدول مجلس التعاون الخليجي.",
      blog_title: "رؤى استراتيجية",
      virtual_tour_cta: "تجربة الميتافيرس",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
