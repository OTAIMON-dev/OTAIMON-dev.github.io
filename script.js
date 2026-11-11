// Vanilla JS Localization & Steam Protocol Fallback
document.addEventListener("DOMContentLoaded", () => {
  // 1. Footer Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Localization Dictionary for 9 languages
  const translations = {
    en: {
      hero_status: "IN ACTIVE DEVELOPMENT • STEAM WISHLIST LIVE",
      hero_pitch: "A tactical roguelite dispatch sim where cards, dice, and strategy collide. Deploy a squad of flawed specialists to deadly spaceship crises, manipulate dice pools, manage failing stations, and survive long enough to slay the Moon Dragon.",
      btn_wishlist: "WISHLIST ON STEAM",
      btn_presskit_quick: "PRESS KIT",
      meta_genre_label: "GENRE:",
      meta_genre_val: "Strategy · Card Game · Management · Space · Sci-fi",
      meta_platform_label: "PLATFORM:",
      meta_platform_val: "PC (Steam)",
      meta_release_label: "RELEASE:",
      meta_release_val: "TBA",
      hero_social_callout: "FOLLOW OUR DEVELOPMENT",
      sec_screenshots: "GAMEPLAY PREVIEWS",
      scr_label1: "DISPATCH INTERFACE",
      scr_label2: "DICE & TRAUMA MECHANICS",
      scr_label3: "VESSEL CRISES",
      sec_catalog: "STUDIO RELEASES",
      zet_desc: "A story-driven roguelike deckbuilder with over-the-top space trash action, planet fusion, and wild card combos. Published by Raw Fury.",
      wolf_desc: "A stylish monochrome RPG about three former partners in crime navigating a giant mecha tournament. Published by Raw Fury.",
      press_title: "PRESS KIT & MEDIA ASSETS",
      press_heading: "MEDIA KIT, KEY ART & REVIEW KEYS",
      press_desc: "Access high-resolution key art, clean in-game screenshots, studio bios, and game logos in our official press kit folder.",
      btn_presskit: "OFFICIAL PRESS KIT ↗",
      btn_contact: "PRESS INQUIRIES: CONTACT@OTAIMON.COM",
      fact_loc_label: "LOCATION",
      fact_fnd_label: "FOUNDED"
    },
    pt: {
      hero_status: "EM DESENVOLVIMENTO ATIVO • LISTA DE DESEJOS NA STEAM",
      hero_pitch: "Um simulador tático roguelite de despacho onde cartas, dados e estratégia colidem. Envie um esquadrão de especialistas imperfeitos para crises mortais na nave, ative traços e traumas para manipular dados e sobreviva para derrotar o Dragão da Lua.",
      btn_wishlist: "ADICIONAR À LISTA NA STEAM",
      btn_presskit_quick: "PRESS KIT",
      meta_genre_label: "GÊNERO:",
      meta_genre_val: "Estratégia · Jogo de Cartas · Gerenciamento · Espaço · Ficção Científica",
      meta_platform_label: "PLATAFORMA:",
      meta_platform_val: "PC (Steam)",
      meta_release_label: "LANÇAMENTO:",
      meta_release_val: "A DEFINIR",
      hero_social_callout: "SIGA NOSSO DESENVOLVIMENTO",
      sec_screenshots: "PRÉVIAS DE GAMEPLAY",
      scr_label1: "INTERFACE DE DESPACHO",
      scr_label2: "MECÂNICAS DE DADOS & TRAUMAS",
      scr_label3: "CRISES NA NAVE",
      sec_catalog: "JOGOS LANÇADOS",
      zet_desc: "Um roguelike deckbuilder narrativo com fusão de planetas, combos insanos de cartas e ação espacial. Publicado pela Raw Fury.",
      wolf_desc: "Um RPG monocromático de aventura sobre três ex-parceiros de crime disputando um torneio de mechas gigantes. Publicado pela Raw Fury.",
      press_title: "PRESS KIT & MATERIAIS DE IMPRENSA",
      press_heading: "KIT DE IMPRENSA, KEY ART & CHAVES DE ANÁLISE",
      press_desc: "Acesse key art em alta resolução, capturas limpas de tela, ficha técnica e logotipos na nossa pasta oficial de imprensa.",
      btn_presskit: "PRESS KIT OFICIAL ↗",
      btn_contact: "CONTATO DE IMPRENSA: CONTACT@OTAIMON.COM",
      fact_loc_label: "LOCALIZAÇÃO",
      fact_fnd_label: "FUNDAÇÃO"
    },
    fr: {
      hero_status: "EN DÉVELOPPEMENT ACTIF • LISTE DE SOUHAITS STEAM OUVERTE",
      hero_pitch: "Une simulation tactique de déploiement roguelite où se rencontrent cartes, dés et stratégie. Déployez une escouade de spécialistes imparfaits dans des crises mortelles à bord du vaisseau, manipulez les dés et survivez pour vaincre le Dragon Lunaire.",
      btn_wishlist: "AJOUTER À LA LISTE STEAM",
      btn_presskit_quick: "PRESS KIT",
      meta_genre_label: "GENRE :",
      meta_genre_val: "Stratégie · Jeu de cartes · Gestion · Espace · Science-fiction",
      meta_platform_label: "PLATEFORME :",
      meta_platform_val: "PC (Steam)",
      meta_release_label: "SORTIE :",
      meta_release_val: "À déterminer",
      hero_social_callout: "SUIVEZ NOTRE DÉVELOPPEMENT",
      sec_screenshots: "APERÇUS DU GAMEPLAY",
      scr_label1: "INTERFACE DE DÉPLOIEMENT",
      scr_label2: "MÉCANIQUES DE DÉS ET TRAUMATISMES",
      scr_label3: "CRISES DU VAISSEAU",
      sec_catalog: "JEUX DU STUDIO",
      zet_desc: "Un deckbuilder roguelite narratif avec action intergalactique déjantée, fusion de planètes et combos de cartes spectaculaires. Édité par Raw Fury.",
      wolf_desc: "Un RPG monochrome stylisé sur trois anciens complices en lice dans un tournoi de mechas géants. Édité par Raw Fury.",
      press_title: "KIT DE PRESSE ET RESSOURCES MÉDIA",
      press_heading: "KIT MÉDIA, VISUELS CLÉS ET CLÉS D'ÉVALUATION",
      press_desc: "Accédez à des visuels haute résolution, captures d'écran in-game, présentations du studio et logos dans notre dossier officiel de presse.",
      btn_presskit: "KIT DE PRESSE OFFICIEL ↗",
      btn_contact: "CONTACT PRESSE : CONTACT@OTAIMON.COM",
      fact_loc_label: "LIEU",
      fact_fnd_label: "FONDATION"
    },
    de: {
      hero_status: "IN AKTIVER ENTWICKLUNG • STEAM-WUNSCHLISTE VERFÜGBAR",
      hero_pitch: "Eine taktische Roguelite-Einsatzsimulation, in der Karten, Würfel und Strategie aufeinandertreffen. Entsende ein Team unvollkommener Spezialisten in tödliche Raumschiffkrisen, manipuliere Würfelpools und überlebe, um den Monddrachen zu besiegen.",
      btn_wishlist: "AUF STEAM VORMERKEN",
      btn_presskit_quick: "PRESS KIT",
      meta_genre_label: "GENRE:",
      meta_genre_val: "Strategie · Kartenspiel · Management · Weltraum · Sci-Fi",
      meta_platform_label: "PLATTFORM:",
      meta_platform_val: "PC (Steam)",
      meta_release_label: "VERÖFFENTLICHUNG:",
      meta_release_val: "Wird bekannt gegeben",
      hero_social_callout: "FOLGE UNSERER ENTWICKLUNG",
      sec_screenshots: "GAMEPLAY-VORSCHAU",
      scr_label1: "EINSATZ-INTERFACE",
      scr_label2: "WÜRFEL- & TRAUMA-MECHANIKEN",
      scr_label3: "SCHIFFSKRISEN",
      sec_catalog: "STUDIO-VERÖFFENTLICHUNGEN",
      zet_desc: "Ein storybasierter Roguelike-Deckbuilder mit abgedrehter Weltraummüll-Action, Planetenfusionen und wilden Kartenkombinationen. Veröffentlicht von Raw Fury.",
      wolf_desc: "Ein stylisches, monochromes RPG über drei ehemalige Gauner in einem monumentalen Mecha-Turnier. Veröffentlicht von Raw Fury.",
      press_title: "PRESSEKIT & MEDIENMATERIALIEN",
      press_heading: "MEDIENKIT, KEY ART & REVIEW-KEYS",
      press_desc: "Erhalte Zugriff auf hochauflösende Key Arts, Gameplay-Screenshots, Studio-Biografien und Logos in unserem offiziellen Pressematerial-Ordner.",
      btn_presskit: "OFFIZIELLES PRESSEKIT ↗",
      btn_contact: "PRESSEKONTAKT: CONTACT@OTAIMON.COM",
      fact_loc_label: "STANDORT",
      fact_fnd_label: "GEGRÜNDET"
    },
    es: {
      hero_status: "EN DESARROLLO ACTIVO • LISTA DE DESEOS EN STEAM DISPONIBLE",
      hero_pitch: "Un simulador táctico roguelite de despacho donde convergen cartas, dados y estrategia. Despliega un escuadrón de especialistas imperfectos ante crisis mortales en la nave, manipula dados y sobrevive para derrotar al Dragón Lunar.",
      btn_wishlist: "AÑADIR A LA LISTA DE STEAM",
      btn_presskit_quick: "PRESS KIT",
      meta_genre_label: "GÉNERO:",
      meta_genre_val: "Estrategia · Juego de cartas · Gestión · Espacio · Ciencia ficción",
      meta_platform_label: "PLATAFORMA:",
      meta_platform_val: "PC (Steam)",
      meta_release_label: "LANZAMIENTO:",
      meta_release_val: "Por anunciar",
      hero_social_callout: "SIGUE NUESTRO DESARROLLO",
      sec_screenshots: "VISTAS PREVIAS DE GAMEPLAY",
      scr_label1: "INTERFAZ DE DESPACHO",
      scr_label2: "MECÁNICAS DE DADOS Y TRAUMAS",
      scr_label3: "CRISIS EN LA NAVE",
      sec_catalog: "LANZAMIENTOS DEL ESTUDIO",
      zet_desc: "Un roguelike deckbuilder narrativo con disparatada acción espacial, fusión de planetas y combos salvajes de cartas. Publicado por Raw Fury.",
      wolf_desc: "Un estiloso RPG monocromático sobre tres antiguos compañeros de delitos que compiten en un torneo de mechas gigantes. Publicado por Raw Fury.",
      press_title: "KIT DE PRENSA Y RECURSOS",
      press_heading: "KIT DE MEDIOS, KEY ART Y CLAVES DE ANÁLISIS",
      press_desc: "Accede a material gráfico en alta resolución, capturas limpias del juego, biografías del estudio y logos oficiales en nuestra carpeta de prensa.",
      btn_presskit: "KIT DE PRENSA OFICIAL ↗",
      btn_contact: "CONTACTO DE PRENSA: CONTACT@OTAIMON.COM",
      fact_loc_label: "UBICACIÓN",
      fact_fnd_label: "FUNDACIÓN"
    },
    ja: {
      hero_status: "鋭意開発中 • STEAMウィッシュリスト受付中",
      hero_pitch: "カード、ダイス、そして戦略が交差する戦術的ローグライト・派遣シミュレーション。欠点だらけのスペシャリストたちを致命的な宇宙船の危機へ派遣し、ダイスを操り、船を管理して、月竜（Moon Dragon）を討ち倒せ。",
      btn_wishlist: "STEAMでウィッシュリストに追加",
      btn_presskit_quick: "プレスキット",
      meta_genre_label: "ジャンル:",
      meta_genre_val: "ストラテジー · カードゲーム · 経営・管理 · 宇宙 · SF",
      meta_platform_label: "プラットフォーム:",
      meta_platform_val: "PC (Steam)",
      meta_release_label: "リリース日:",
      meta_release_val: "未定 (TBA)",
      hero_social_callout: "開発状況をフォローする",
      sec_screenshots: "ゲームプレイプレビュー",
      scr_label1: "派遣インターフェース",
      scr_label2: "ダイス＆トラウマのゲームメカニクス",
      scr_label3: "宇宙船の危機",
      sec_catalog: "スタジオ作品",
      zet_desc: "ド派手な宇宙ゴミバトル、惑星融合、そして爽快なカードコンボが炸裂するストーリー主導のローグライク・デッキビルダー。Raw Fury発売。",
      wolf_desc: "巨大メカトーナメントに挑む3人の元犯罪者を描いた、スタイリッシュなモノクロRPGアドベンチャー。Raw Fury発売。",
      press_title: "プレスキット＆メディア素材",
      press_heading: "メディアキット、キーアート、レビュー用キー",
      press_desc: "公式プレスキットフォルダにて、高解像度キーアート、UIなしスクリーンショット、スタジオ概要、ロゴをダウンロードいただけます。",
      btn_presskit: "公式プレスキット ↗",
      btn_contact: "プレスお問い合わせ: CONTACT@OTAIMON.COM",
      fact_loc_label: "所在地",
      fact_fnd_label: "設立"
    },
    ko: {
      hero_status: "개발 진행 중 • STEAM 찜하기 가능",
      hero_pitch: "카드, 주사위, 전략이 결합된 전술 로그라이트 디스패치 시뮬레이션. 치명적인 우주선 위기에 불완전한 전문가들을 파견하고 주사위 풀을 조작하며 월룡(Moon Dragon)을 처치할 때까지 생존하십시오.",
      btn_wishlist: "STEAM 찜하기 추가",
      btn_presskit_quick: "프레스 킷",
      meta_genre_label: "장르:",
      meta_genre_val: "전략 · 카드 게임 · 경영 · 우주 · SF",
      meta_platform_label: "플랫폼:",
      meta_platform_val: "PC (Steam)",
      meta_release_label: "출시일:",
      meta_release_val: "미정 (TBA)",
      hero_social_callout: "개발 소식 팔로우하기",
      sec_screenshots: "게임플레이 미리보기",
      scr_label1: "디스패치 인터페이스",
      scr_label2: "주사위 & 트라우마 메커니즘",
      scr_label3: "함선 위기 상황",
      sec_catalog: "스튜디오 출시작",
      zet_desc: "우주 쓰레기 액션, 행성 융합, 강력한 카드 콤보가 펼쳐지는 스토리 중심의 로그라이크 덱빌더. Raw Fury 배급.",
      wolf_desc: "거대 메카 토너먼트에 참가한 세 명의 전직 범죄자 파트너들의 이야기를 담은 스타일리시한 흑백 RPG. Raw Fury 배급.",
      press_title: "프레스 킷 & 미디어 에셋",
      press_heading: "미디어 킷, 키아트 & 리뷰 키",
      press_desc: "공식 프레스 킷 폴더에서 고해상도 키아트, 게임 스크린샷, 스튜디오 약력 및 게임 로고를 확인하실 수 있습니다.",
      btn_presskit: "공식 프레스 킷 ↗",
      btn_contact: "미디어 문의: CONTACT@OTAIMON.COM",
      fact_loc_label: "위치",
      fact_fnd_label: "설립"
    },
    ru: {
      hero_status: "В АКТИВНОЙ РАЗРАБОТКЕ • ДОСТУПНО В ЖЕЛАЕМОМ STEAM",
      hero_pitch: "Тактический рогалик-симулятор диспетчера, в котором сталкиваются карты, кости и стратегия. Отправляйте команду несовершенных специалистов на смертельные аварии космических кораблей, управляйте кубиками и победите Лунного Дракона.",
      btn_wishlist: "В СПИСОК ЖЕЛАЕМОГО STEAM",
      btn_presskit_quick: "ПРЕСС-КИТ",
      meta_genre_label: "ЖАНР:",
      meta_genre_val: "Стратегия · Карточная игра · Менеджмент · Космос · Научная фантастика",
      meta_platform_label: "ПЛАТФОРМА:",
      meta_platform_val: "PC (Steam)",
      meta_release_label: "РЕЛИЗ:",
      meta_release_val: "Будет объявлено позже",
      hero_social_callout: "СЛЕДИТЕ ЗА РАЗРАБОТКОЙ",
      sec_screenshots: "КАДРЫ ИЗ ИГРЫ",
      scr_label1: "ИНТЕРФЕЙС ДИСПЕТЧЕРА",
      scr_label2: "МЕХАНИКИ КОСТЕЙ И ТРАВМ",
      scr_label3: "КРИЗИСЫ НА КОРАБЛЕ",
      sec_catalog: "РЕЛИЗЫ СТУДИИ",
      zet_desc: "Сюжетный рогалик с составлением колоды, безумным космическим экшеном, слиянием планет и дикими комбо из карт. Издатель — Raw Fury.",
      wolf_desc: "Стильная монохромная RPG о трёх бывших сообщниках, участвующих в грандиозном турнире гигантских мехов. Издатель — Raw Fury.",
      press_title: "ПРЕСС-КИТ И МЕДИА-МАТЕРИАЛЫ",
      press_heading: "МЕДИА-КИТ, АРТЫ И КЛЮЧИ ДЛЯ ОБЗОРА",
      press_desc: "Получите доступ к артам высокого разрешения, скриншотам игрового процесса, описанию студии и логотипам в нашей официальной папке для прессы.",
      btn_presskit: "ОФИЦИАЛЬНЫЙ ПРЕСС-КИТ ↗",
      btn_contact: "ПРЕССА: CONTACT@OTAIMON.COM",
      fact_loc_label: "ЛОКАЦИЯ",
      fact_fnd_label: "ОСНОВАНА"
    },
    zh: {
      hero_status: "积极开发中 • STEAM愿望单现已开启",
      hero_pitch: "融合卡牌、骰子与策略的战术Roguelite调度模拟游戏。派遣各有缺陷的专家小队前往处理飞船的致命危机，操控骰子点数，维持瘫痪太空站的运转，击败月龙！",
      btn_wishlist: "在STEAM上加入愿望单",
      btn_presskit_quick: "媒体资料包",
      meta_genre_label: "类型：",
      meta_genre_val: "策略 · 卡牌游戏 · 模拟经营 · 太空 · 科幻",
      meta_platform_label: "平台：",
      meta_platform_val: "PC (Steam)",
      meta_release_label: "发售日期：",
      meta_release_val: "待定 (TBA)",
      hero_social_callout: "关注我们的开发动态",
      sec_screenshots: "实机预览",
      scr_label1: "调度指挥界面",
      scr_label2: "骰子与创伤机制",
      scr_label3: "飞船危机事件",
      sec_catalog: "工作室作品",
      zet_desc: "叙事驱动的Roguelike牌组构建游戏，充满夸张的太空垃圾乱斗、行星融合与狂野卡牌连击。Raw Fury发行。",
      wolf_desc: "黑白手绘风格机甲RPG，讲述三位昔日犯罪伙伴卷入巨型机甲锦标赛的冒险故事。Raw Fury发行。",
      press_title: "媒体资料包与新闻素材",
      press_heading: "媒体资料、高清主视觉图与评测激活码",
      press_desc: "在我们的官方媒体资料文件夹中获取高分辨率主视觉图、游戏纯净截图、工作室介绍及官方Logo。",
      btn_presskit: "官方媒体资料包 ↗",
      btn_contact: "媒体合作：CONTACT@OTAIMON.COM",
      fact_loc_label: "所在地",
      fact_fnd_label: "创立年份"
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
    if (saved && translations[saved]) {
      userLang = saved;
    } else if (navigator.language) {
      const navLang = navigator.language.toLowerCase();
      if (navLang.startsWith("pt")) userLang = "pt";
      else if (navLang.startsWith("fr")) userLang = "fr";
      else if (navLang.startsWith("de")) userLang = "de";
      else if (navLang.startsWith("es")) userLang = "es";
      else if (navLang.startsWith("ja")) userLang = "ja";
      else if (navLang.startsWith("ko")) userLang = "ko";
      else if (navLang.startsWith("ru")) userLang = "ru";
      else if (navLang.startsWith("zh")) userLang = "zh";
    }
  } catch(e) {}

  applyLanguage(userLang);

  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  // 4. Steam Protocol Handler (Tenta abrir no cliente Steam; fallback para o navegador)
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
