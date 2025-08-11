const translations = {
    es: {
        nav: ["Transporte aéreo", "Transporte marítimo", "Comercio exterior", "Contacto"],

        heroTitle: "Tu carga, nuestro compromiso",
        heroText: "Soluciones rápidas, seguras y competitivas para tu transporte internacional.",
        btnQuote: "Solicitar presupuesto",

        servicesTitle: "Nuestros Servicios",
        modalAirTitle: "Detalles de Transporte Aéreo",
        modalAirText: "Envíos urgentes y seguros a cualquier parte del mundo, con seguimiento en tiempo real y atención personalizada.",
        airTitle: "Transporte Aéreo",
        airText: "Envíos urgentes y seguros a cualquier parte del mundo.",
        modalMaritimeTitle: "Detalles de Transporte Marítimo",
        modalMaritimeText: "Importación y exportación por vía marítima con cobertura global, opciones flexibles y control de cargas voluminosas.",
        maritimeTitle: "Transporte Marítimo",
        maritimeText: "Importación y exportación por vía marítima con cobertura global.",
        modalCustomsTitle: "Detalles de Comercio Exterior y Aduanas",
        modalCustomsText: "Asesoría y gestión integral de trámites aduaneros, permisos y regulaciones para asegurar que tu mercancía cumpla con todos los requisitos legales.",
        customsTitle: "Comercio Exterior y Aduanas",
        customsText: "Asesoría y gestión integral de trámites aduaneros y comercio exterior.",
        moreInfo: "Más información →",

        whyTitle: "¿Por qué elegirnos?",
        whySubtitle: "Confía tu logística a expertos con más de 15 años de experiencia.",
        whyCards: ["Rapidez", "Seguridad", "Tarifas competitivas", "Atención personalizada"],
        whyCardsText: [
            "Procesos optimizados para que tu carga llegue en el menor tiempo posible.",
            "Protegemos tus envíos con sistemas y protocolos certificados.",
            "Precios ajustados y transparentes para todos nuestros servicios.",
            "Asistencia directa y dedicada durante todo el proceso de envío."
        ],

        contactTitle: "Contáctanos",
        contactSubtitle: "Estamos listos para ayudarte con tu próximo envío.",
        formNamePlaceholder: "Nombre completo",
        formEmailPlaceholder: "Correo electrónico",
        formPhonePlaceholder: "Teléfono",
        formMessagePlaceholder: "Escribe tu mensaje",
        contactBtn: "Enviar mensaje",

        footerCompany: "© 2025 Iberlogistics Express S.L.<br>Todos los derechos reservados.",
        footerContactTitle: "Contacto",
        footerLinksTitle: "Enlaces",
        footerLinks: ["Inicio", "Servicios", "Sobre nosotros", "Contacto"],
        footerBottom: "Desarrollado por Iberlogistics Express S.L."
    },
    en: {
        nav: ["Air Transport", "Maritime Transport", "Foreign Trade", "Contact"],

        heroTitle: "Your cargo, our commitment",
        heroText: "Fast, safe, and competitive solutions for your international transport.",
        btnQuote: "Request a quote",

        servicesTitle: "Our Services",
        modalAirTitle: "Air Transport Details",
        modalAirText: "Urgent and secure shipments anywhere worldwide, with real-time tracking and personalized attention.",
        airTitle: "Air Transport",
        airText: "Urgent and secure shipments to anywhere in the world.",
        modalMaritimeTitle: "Maritime Transport Details",
        modalMaritimeText: "Import and export by sea with global coverage, flexible options, and bulky cargo control.",
        maritimeTitle: "Maritime Transport",
        maritimeText: "Import and export by sea with global coverage.",
        modalCustomsTitle: "Foreign Trade & Customs Details",
        modalCustomsText: "Comprehensive advice and management of customs procedures, permits, and regulations to ensure your goods comply with all legal requirements.",
        customsTitle: "Foreign Trade & Customs",
        customsText: "Comprehensive advice and management of customs and foreign trade procedures.",
        moreInfo: "More info →",

        whyTitle: "Why choose us?",
        whySubtitle: "Trust your logistics to experts with over 15 years of experience.",
        whyCards: ["Speed", "Security", "Competitive rates", "Personalized service"],
        whyCardsText: [
            "Optimized processes to get your cargo delivered in the shortest possible time.",
            "We protect your shipments with certified systems and protocols.",
            "Fair and transparent pricing for all our services.",
            "Direct and dedicated assistance throughout the shipping process."
        ],

        contactTitle: "Contact us",
        contactSubtitle: "We are ready to help you with your next shipment.",
        formNamePlaceholder: "Full name",
        formEmailPlaceholder: "Email",
        formPhonePlaceholder: "Phone",
        formMessagePlaceholder: "Write your message",
        contactBtn: "Send message",

        footerCompany: "© 2025 Iberlogistics Express S.L.<br>All rights reserved.",
        footerContactTitle: "Contact",
        footerLinksTitle: "Links",
        footerLinks: ["Home", "Services", "About us", "Contact"],
        footerBottom: "Developed by Iberlogistics Express S.L."
    }
};

let currentLang = "es";

function toggleLanguage() {
    currentLang = currentLang === "es" ? "en" : "es";
    const t = translations[currentLang];

    document.querySelectorAll(".nav li a").forEach((link, i) => {
        link.textContent = t.nav[i];
    });

    document.querySelector(".hero-content h1").textContent = t.heroTitle;
    document.querySelector(".hero-content p").textContent = t.heroText;
    document.querySelector(".hero-content .btn").textContent = t.btnQuote;

    const serviceCards = document.querySelectorAll(".service-card");
    document.querySelector(".services h2").textContent = t.servicesTitle;

    document.getElementById("modal-air-title").textContent = t.modalAirTitle;
    document.getElementById("modal-air-text").textContent = t.modalAirText;

    document.getElementById("modal-maritime-title").textContent = t.modalMaritimeTitle;
    document.getElementById("modal-maritime-text").textContent = t.modalMaritimeText;

    document.getElementById("modal-customs-title").textContent = t.modalCustomsTitle;
    document.getElementById("modal-customs-text").textContent = t.modalCustomsText;

    serviceCards[0].querySelector("h3").textContent = t.airTitle;
    serviceCards[0].querySelector("p").textContent = t.airText;
    serviceCards[0].querySelector(".more-info-btn").textContent = t.moreInfo;

    serviceCards[1].querySelector("h3").textContent = t.maritimeTitle;
    serviceCards[1].querySelector("p").textContent = t.maritimeText;
    serviceCards[1].querySelector(".more-info-btn").textContent = t.moreInfo;

    serviceCards[2].querySelector("h3").textContent = t.customsTitle;
    serviceCards[2].querySelector("p").textContent = t.customsText;
    serviceCards[2].querySelector(".more-info-btn").textContent = t.moreInfo;

    document.querySelector(".why-us h2").textContent = t.whyTitle;
    document.querySelector(".why-subtitle").textContent = t.whySubtitle;

    const whyCards = document.querySelectorAll(".why-card");
    whyCards.forEach((card, i) => {
        card.querySelector("h3").textContent = t.whyCards[i];
        card.querySelector("p").textContent = t.whyCardsText[i];
    });

    document.querySelector(".contact h2").textContent = t.contactTitle;
    document.querySelector(".contact-subtitle").textContent = t.contactSubtitle;

    const form = document.querySelector(".contact-form");
    form.name.placeholder = t.formNamePlaceholder;
    form.email.placeholder = t.formEmailPlaceholder;
    form.phone.placeholder = t.formPhonePlaceholder;
    form.message.placeholder = t.formMessagePlaceholder;
    form.querySelector("button").textContent = t.contactBtn;

    document.querySelector(".footer-brand p").innerHTML = t.footerCompany;
    document.querySelector(".footer-contact h4").textContent = t.footerContactTitle;
    document.querySelector(".footer-links h4").textContent = t.footerLinksTitle;

    document.querySelectorAll(".footer-links li a").forEach((link, i) => {
        link.textContent = t.footerLinks[i];
    });

    document.querySelector(".footer-bottom p").textContent = t.footerBottom;

    const langLabel = document.getElementById("lang-label");
    const langSwitch = document.querySelector(".lang-switch img");

    if (currentLang === "es") {
        langLabel.textContent = "English";
        langSwitch.src = "assets/idioma.png";
        langSwitch.alt = "English";
    } else {
        langLabel.textContent = "Español";
        langSwitch.src = "assets/espana.png";
        langSwitch.alt = "Español";
    }
}