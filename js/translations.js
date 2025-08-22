// js/translations.js

const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Sobre nosotros",

    "hero.title": "IBERLOGISTICS EXPRESS S.L.",
    "hero.text": "Se ocupa de organizar el <strong>transporte internacional</strong> para que las mercancías que le son confiadas por sus clientes viajen por la mejor y más rápida vía, así como con las condiciones económicas más ventajosas para sus clientes.",
    "hero.btn": "Solicitar presupuesto",

    "services.title": "Nuestros Servicios",
    "air.title": "Transporte Aéreo",
    "air.text": "Envíos urgentes y seguros a cualquier parte del mundo.",
    "air.list.0": "Servicios de vuelo directo",
    "air.list.1": "Servicios de recogida y entrega",
    "air.list.2": "Servicios puerta a puerta",
    "air.list.3": "Documentaciones",
    "air.list.4": "Despacho de aduana de importación y exportación",

    "maritime.title": "Transporte Marítimo",
    "maritime.text": "Importación y exportación por vía marítima con cobertura global.",
    "maritime.list.0": "Transporte de mercancía hasta el puerto de salida",
    "maritime.list.1": "Despachos de aduanas de importación y exportación",
    "maritime.list.2": "Seguro de transporte marítimo",
    "maritime.list.3": "Trabajamos con todas las navieras",
    "maritime.list.4": "Reserva de espacio en los buques",
    "maritime.list.5": "Coordinación en la recepción en puertos y almacenes",
    "maritime.list.6": "Contenedores completos (FCL)",
    "maritime.list.7": "Grupajes marítimos (LCL)",
    "maritime.list.8": "Pago de fletes oceánicos y gastos portuarios",

    "customs.title": "Comercio Exterior y Aduanas",
    "customs.text": "Asesoría y gestión integral de trámites aduaneros y comercio exterior.",
    "customs.list.0": "Confección y presentación del INTRASTAT.",
    "customs.list.1": "Organización del transporte internacional con rapidez y condiciones ventajosas.",
    "customs.list.2": "Infraestructura propia y red de corresponsales en todo el mundo.",
    "customs.list.3": "Seguimiento integral de envíos: carga, descarga, almacenaje, distribución y aduanas.",
    "customs.list.4": "Agente multimodal: avión, barco y camión.",

    "why.title": "¿Por qué elegirnos?",
    "why.cards.0": "Rapidez",
    "why.cardsText.0": "Procesos optimizados para que tu carga llegue en el menor tiempo posible.",
    "why.cards.1": "Seguridad",
    "why.cardsText.1": "Protegemos tus envíos con sistemas y protocolos certificados.",
    "why.cards.2": "Tarifas competitivas",
    "why.cardsText.2": "Precios ajustados y transparentes para todos nuestros servicios.",
    "why.cards.3": "Atención personalizada",
    "why.cardsText.3": "Asistencia directa y dedicada durante todo el proceso de envío.",

    "footer.company": "© 2025 Iberlogistics Express S.L.<br>Todos los derechos reservados.",
    "footer.contactTitle": "Contacto",
    "footer.bottom": "Desarrollado por <a href='https://www.linkedin.com/in/alejandrotellezcorona/' target='_blank'>@alextc35</a>"
  },

  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About us",

    "hero.title": "IBERLOGISTICS EXPRESS S.L.",
    "hero.text": "We organize <strong>international transport</strong> so that the goods entrusted to us by our clients travel via the fastest and most efficient route, with the most cost-effective conditions.",
    "hero.btn": "Request a Quote",

    "services.title": "Our Services",
    "air.title": "Air Transport",
    "air.text": "Urgent and safe deliveries worldwide.",
    "air.list.0": "Direct flight services",
    "air.list.1": "Pick-up and delivery services",
    "air.list.2": "Door-to-door services",
    "air.list.3": "Documentation",
    "air.list.4": "Import and export customs clearance",

    "maritime.title": "Maritime Transport",
    "maritime.text": "Import and export by sea with global coverage.",
    "maritime.list.0": "Cargo transport to port of departure",
    "maritime.list.1": "Import and export customs clearance",
    "maritime.list.2": "Marine cargo insurance",
    "maritime.list.3": "Partnerships with all shipping companies",
    "maritime.list.4": "Space booking on vessels",
    "maritime.list.5": "Coordination at ports and warehouses",
    "maritime.list.6": "Full container loads (FCL)",
    "maritime.list.7": "Less than container loads (LCL)",
    "maritime.list.8": "Payment of ocean freight and port charges",

    "customs.title": "Foreign Trade & Customs",
    "customs.text": "Comprehensive consulting and management of customs and foreign trade procedures.",
    "customs.list.0": "Preparation and submission of INTRASTAT.",
    "customs.list.1": "Organization of international transport with speed and cost efficiency.",
    "customs.list.2": "Own infrastructure and global network of correspondents.",
    "customs.list.3": "End-to-end shipment tracking: loading, unloading, storage, distribution and customs.",
    "customs.list.4": "Multimodal agent: air, sea and road.",

    "why.title": "Why Choose Us?",
    "why.cards.0": "Speed",
    "why.cardsText.0": "Optimized processes to ensure your cargo arrives in the shortest possible time.",
    "why.cards.1": "Security",
    "why.cardsText.1": "We protect your shipments with certified systems and protocols.",
    "why.cards.2": "Competitive Rates",
    "why.cardsText.2": "Transparent and affordable prices for all our services.",
    "why.cards.3": "Personalized Service",
    "why.cardsText.3": "Direct and dedicated support throughout the shipping process.",

    "footer.company": "© 2025 Iberlogistics Express S.L.<br>All rights reserved.",
    "footer.contactTitle": "Contact",
    "footer.bottom": "Developed by <a href='https://www.linkedin.com/in/alejandrotellezcorona/' target='_blank'>@alextc35</a>"
  }
};

let currentLang = "es";

function toggleLanguage() {
  currentLang = currentLang === "es" ? "en" : "es";
  applyTranslations();

  // Actualiza el switch de idioma
  const langLabel = document.getElementById("lang-label");
  const langFlag = document.querySelector(".lang-switch img");

  if (currentLang === "es") {
    langLabel.textContent = "English";
    langFlag.src = "img/english.webp"; // 🇬🇧
    langFlag.alt = "English";
  } else {
    langLabel.textContent = "Español";
    langFlag.src = "img/spain.webp"; // 🇪🇸
    langFlag.alt = "Español";
  }
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", applyTranslations);