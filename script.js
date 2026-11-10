// Simple, lightweight Vanilla JS Localization (i18n) & Dynamic Logic
document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Footer Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Localization Dictionary (English & Portuguese)
  const translations = {
    en: {
      hero_status: "IN ACTIVE DEVELOPMENT • STEAM WISHLIST LIVE",
      hero_pitch: "A tactical roguelite dispatch sim where cards, dice, and strategy collide. Deploy a squad of flawed specialists to deadly spaceship crises, manipulate dice pools, manage failing stations, and survive long enough to slay the Moon Dragon.",
      btn_wishlist: "WISHLIST ON STEAM",
      btn_trailer: "WATCH TRAILER",
      sec_gameplay: "GAMEPLAY & TRAILER",
      scr_label1: "DISPATCH INTERFACE",
      scr_label2: "DICE & TRAUMA MECHANICS",
      scr_label3: "VESSEL CRISES",
      sec_catalog: "STUDIO RELEASES",
      zet_desc: "A story-driven roguelike deckbuilder with over-the-top space trash action, planet fusion, and wild card combos. Published by Raw Fury.",
      wolf_desc: "A stylish monochrome RPG about three former partners in crime navigating a giant mecha tournament. Published by Raw Fury.",
      press_title: "PRESS KIT & INQUIRIES",
      press_desc: "Looking for high-res key art, clean gameplay screenshots, studio fact sheets, or review keys?",
      btn_presskit: "DOWNLOAD PRESS KIT (ZIP / DRIVE)",
      btn_contact: "PRESS INQUIRIES: CONTACT@OTAIMON.COM",
      facts_title: "STUDIO FACTS",
      fact_loc_label: "Location:",
      fact_fnd_label: "Founded:",
      fact_pub_label: "Publishing:"
    },
    pt: {
      hero_status: "EM DESENVOLVIMENTO ATIVO • LISTA DE DESEJOS NA STEAM",
      hero_pitch: "Um simulador tático roguelite de despacho onde cartas, dados e estratégia colidem. Envie um esquadrão de especialistas imperfeitos para crises mortais na nave, ative traços e traumas para manipular dados e sobreviva para derrotar o Dragão da Lua.",
      btn_wishlist: "ADICIONAR À LISTA NA STEAM",
      btn_trailer: "ASSISTIR AO TRAILER",
      sec_gameplay: "GAMEPLAY & TRAILER",
      scr_label1: "INTERFACE DE DESPACHO",
      scr_label2: "MECÂNICAS DE DADOS & TRAUMAS",
      scr_label3: "CRISES NA NAVE",
      sec_catalog: "JOGOS LANÇADOS",
      zet_desc: "Um roguelike deckbuilder narrativo com fusão de planetas, combos insanos de cartas e ação espacial. Publicado pela Raw Fury.",
      wolf_desc: "Um RPG monocromático de aventura sobre três ex-parceiros de crime disputando um torneio de mechas gigantes. Publicado pela Raw Fury.",
      press_title: "PRESS KIT & CONTATO DE IMPRENSA",
      press_desc: "Procurando key art em alta resolução, capturas de tela limpas de gameplay, ficha técnica do estúdio ou chaves de análise?",
      btn_presskit: "BAIXAR PRESS KIT (ZIP / DRIVE)",
      btn_contact: "CONTATO DE IMPRENSA: CONTACT@OTAIMON.COM",
      facts_title: "FICHA TÉCNICA DO ESTÚDIO",
      fact_loc_label: "Localização:",
      fact_fnd_label: "Fundação:",
      fact_pub_label: "Publicação:"
    }
  };

  // 3. Language Switching Functionality
  const langButtons = document.querySelectorAll(".lang-btn");
  
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update active button state
    langButtons.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    // Persist choice in browser localStorage
    try {
      localStorage.setItem("preferred_lang", lang);
    } catch(e) {}
  }

  // Detect saved preference or browser default language
  let userLang = "en";
  try {
    const saved = localStorage.getItem("preferred_lang");
    if (saved) {
      userLang = saved;
    } else if (navigator.language && navigator.language.startsWith("pt")) {
      userLang = "pt";
    }
  } catch(e) {}

  applyLanguage(userLang);

  // Button Click Listeners
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      applyLanguage(selected);
    });
  });
});
