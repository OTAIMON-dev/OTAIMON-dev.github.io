// Simple, lightweight Vanilla JS Localization & Steam Protocol Fallback
document.addEventListener("DOMContentLoaded", () => {
  // 1. Footer Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Localization Dictionary
  const translations = {
    en: {
      hero_status: "IN ACTIVE DEVELOPMENT • STEAM WISHLIST LIVE",
      hero_pitch: "A tactical roguelite dispatch sim where cards, dice, and strategy collide. Deploy a squad of flawed specialists to deadly spaceship crises, manipulate dice pools, manage failing stations, and survive long enough to slay the Moon Dragon.",
      btn_wishlist: "WISHLIST ON STEAM",
      btn_presskit_quick: "PRESS KIT (DRIVE)",
      sec_screenshots: "GAMEPLAY PREVIEWS",
      scr_label1: "DISPATCH INTERFACE",
      scr_label2: "DICE & TRAUMA MECHANICS",
      scr_label3: "VESSEL CRISES",
      sec_catalog: "STUDIO RELEASES",
      zet_desc: "A story-driven roguelike deckbuilder with over-the-top space trash action, planet fusion, and wild card combos. Published by Raw Fury.",
      wolf_desc: "A stylish monochrome RPG about three former partners in crime navigating a giant mecha tournament. Published by Raw Fury.",
      press_title: "PRESS KIT & MEDIA ASSETS",
      press_heading: "MEDIA KIT, KEY ART & REVIEW KEYS",
      press_desc: "Access high-resolution key art, clean in-game screenshots, studio bios, and game logos in our official press kit folder on Google Drive.",
      btn_presskit: "OFFICIAL PRESS KIT (GOOGLE DRIVE) ↗",
      btn_contact: "PRESS INQUIRIES: CONTACT@OTAIMON.COM",
      facts_title: "STUDIO PROFILE",
      fact_loc_label: "LOCATION",
      fact_fnd_label: "FOUNDED"
    },
    pt: {
      hero_status: "EM DESENVOLVIMENTO ATIVO • LISTA DE DESEJOS NA STEAM",
      hero_pitch: "Um simulador tático roguelite de despacho onde cartas, dados e estratégia colidem. Envie um esquadrão de especialistas imperfeitos para crises mortais na nave, ative traços e traumas para manipular dados e sobreviva para derrotar o Dragão da Lua.",
      btn_wishlist: "ADICIONAR À LISTA NA STEAM",
      btn_presskit_quick: "PRESS KIT (DRIVE)",
      sec_screenshots: "PRÉVIAS DE GAMEPLAY",
      scr_label1: "INTERFACE DE DESPACHO",
      scr_label2: "MECÂNICAS DE DADOS & TRAUMAS",
      scr_label3: "CRISES NA NAVE",
      sec_catalog: "JOGOS LANÇADOS",
      zet_desc: "Um roguelike deckbuilder narrativo com fusão de planetas, combos insanos de cartas e ação espacial. Publicado pela Raw Fury.",
      wolf_desc: "Um RPG monocromático de aventura sobre três ex-parceiros de crime disputando um torneio de mechas gigantes. Publicado pela Raw Fury.",
      press_title: "PRESS KIT & MATERIAIS DE IMPRENSA",
      press_heading: "KIT DE IMPRENSA, KEY ART & CHAVES DE ANÁLISE",
      press_desc: "Acesse key art em alta resolução, capturas limpas de tela, ficha técnica e logotipos na nossa pasta oficial de imprensa no Google Drive.",
      btn_presskit: "PRESS KIT OFICIAL (GOOGLE DRIVE) ↗",
      btn_contact: "CONTATO DE IMPRENSA: CONTACT@OTAIMON.COM",
      facts_title: "PERFIL DO ESTÚDIO",
      fact_loc_label: "LOCALIZAÇÃO",
      fact_fnd_label: "FUNDAÇÃO"
    }
  };

  // 3. Language Switching
  const langButtons = document.querySelectorAll(".lang-btn");
  
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    langButtons.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try {
      localStorage.setItem("preferred_lang", lang);
    } catch(e) {}
  }

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

  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  // 4. Steam Protocol Handler (Tenta abrir no app Steam; se falhar, abre na aba normal do browser)
  const steamButtons = document.querySelectorAll(".steam-launch-btn");
  steamButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const appId = btn.getAttribute("data-steam-appid");
      const fallbackUrl = btn.getAttribute("href");
      if (!appId) return;

      if (e.metaKey || e.ctrlKey || e.button !== 0) return;

      e.preventDefault();

      const steamProtocolUri = `steam://store/${appId}`;
      let appOpened = false;

      const handleBlur = () => {
        appOpened = true;
      };
      window.addEventListener("blur", handleBlur, { once: true });

      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = steamProtocolUri;
      document.body.appendChild(iframe);

      setTimeout(() => {
        document.body.removeChild(iframe);
        window.removeEventListener("blur", handleBlur);
        if (!appOpened) {
          window.open(fallbackUrl, "_blank", "noopener,noreferrer");
        }
      }, 1200);
    });
  });
});
