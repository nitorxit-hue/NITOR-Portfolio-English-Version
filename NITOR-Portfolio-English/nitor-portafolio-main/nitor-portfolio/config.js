/* ==========================================================================
   NITOR 3.0 — PORTFOLIO CONFIGURATION
   This is the only file you need to edit to manage your content.
   ========================================================================== */

window.NITOR_CONFIG = {

  /* ---------- CONTACTO ----------
     WhatsApp number with country code, no "+", spaces, or dashes. */
  whatsapp: "584121354734",

  /* ---------- REDES SOCIALES ----------
     Paste the full profile URL. Leave blank ("") to hide it. */
  socials: {
    instagram: "",
    tiktok: "",
    youtube: "https://www.youtube.com/@NitorXit"
  },

  /* ---------- VIDEO DESTACADO (HERO) ----------
     Enter the video ID to feature in the hero section.
     If blank, the first video marked featured: true is used,
     or the first video in the list if none is featured. */
  featuredId: "JwTngWAtWIE",

  /* ---------- CATEGORIES / EDITING STYLES ----------
     key        → identificador que usan los videos en "category".
     label      → texto corto para filtros.
     title      → category card title.
     description→ short description.
     cover      → (opcional) URL o ruta de una imagen de portada.
                  If blank, the first video thumbnail in that category is used.
     videoTypes → opciones de "Tipo de video" que aparecen en el cotizador. */
  categories: [
     
     {
      key: "ingles",
      label: "ENGLISH",
      title: "English & Bilingual",
      description: "English-language videos, lessons, speaking practice, vocabulary, and content for English-speaking audiences.",
      cover: "",
      videoTypes: ["English video (Shorts / Reels)", "English lesson or tip", "English translation or captions", "Long-form video in English"]
    },

      {
      key: "instagram",
      label: "INSTAGRAM",
      title: "Social Media & Personal Branding",
      description: "Educational Reels, tips, talking-head videos, and interview clips with dynamic captions.",
      cover: "",
      videoTypes: ["Tips / educational content", "Talking-head video", "Podcast or interview clips", "Personal-brand content"]
    },
        {
      key: "comida",
      label: "FOOD",
      title: "Food & Restaurants",
      description: "Appetizing videos for restaurants, local businesses, and food creators.",
      cover: "",
      videoTypes: ["Restaurant review", "Food tour or recommendations", "Menu or restaurant promotion", "Food Short / Reel"]
    },

         {
      key: "ads",
      label: "ADS",
      title: "Advertising & Sales",
      description: "Ads for businesses, products, stores, and brands. Promotional content designed to attract customers.",
      cover: "",
      videoTypes: ["Product ad", "Promotion or special offer", "Sales video", "Brand or business introduction"]
    },

        {
      key: "inmuebles",
      label: "REAL ESTATE",
      title: "Real Estate",
      description: "Property tours for homes for sale or rent, with clean shots, key details, and engaging pacing.",
      cover: "",
      videoTypes: ["Property tour", "For-sale or rental listing", "Real estate development showcase", "Real estate Short / Reel"]
    },
     
    {
      key: "gaming",
      label: "GAMING",
      title: "Gaming",
      description: "Free Fire, Fortnite, gameplay videos, clips, and montages with effects, transitions, and music sync.",
      cover: "",
      videoTypes: ["Music-synced montage / edit", "Clips and highlights", "Long-form YouTube gameplay", "Gaming Short / Reel"]
    },

   
    {
      key: "historias",
      label: "STORYTELLING",
      title: "Stories & Storytelling",
      description: "Stories, anecdotes, and interesting facts told with pacing, suspense, and strong endings that keep viewers watching.",
      cover: "",
      videoTypes: ["Narrated story", "Anecdote or interesting fact", "Story recap / summary", "Story series"]
    },
 


],
  /* ---------- VIDEOS ----------
     To add a video, duplicate a line and update its details.
     id          → ID de YouTube. Ej: youtube.com/shorts/ABC123  →  "ABC123"
     title       → project title.
     description → short description.
     category    → gaming | ads | instagram | historias
     thumbnail   → (opcional) URL o ruta de una miniatura propia.
     featured    → (opcional) true para proponerlo como destacado.
     format      → (opcional) "vertical" (Shorts/Reels, por defecto) o "horizontal" (videos largos 16:9). */
  videos: [
    { id: "fBRFWKUEzK8", title: "Buen Fin Campaign", description: "Discount ad with animated text and commercial pacing.", category: "ads", featured: true },
    { id: "2ChHZUR3LQA", title: "Fortnite · Practice", description: "Gaming edit with graphics, dynamic cuts, and effects.", category: "gaming" },
    { id: "KEQ0nnF3DEA", title: "My First Time Playing Fortnite", description: "Gameplay edit with humor, reactions, and highlights.", category: "gaming" },
    { id: "JwTngWAtWIE", title: "Who Is Fermirayes?", description: "Interview clip with captions and talking-head editing.", category: "instagram" },
    { id: "TjRpvFzaNKs", title: "Is Instagram Spying on You?", description: "Educational talking-head Reel with dynamic captions.", category: "instagram" },
    { id: "_B6YFHeOcVE", title: "His Plan Backfired", description: "Narrated story with a twist ending, pacing, and captions.", category: "historias" },
    { id: "RdzUaIP9hh4", title: "Eugenio Derbez & MrBeast", description: "Storytelling about a viral anecdote, with suspense and a punchline.", category: "historias" },
    { id: "5oL_ahCX1ug", title: "Random Ads for Famous Brands", description: "Humorous ad with quick cuts and comedic punchlines.", category: "ads" },
    { id: "6SOfE7Ify1Q", title: "Smart TV · Daka Stores", description: "Product video with animated text and a sales-focused approach.", category: "ads" },
    { id: "jCp9GMs1u3E", title: "Make Your Own Hot Dog", description: "Food Reel showcasing a unique spot with appetizing visuals and pacing.", category: "comida" },
    { id: "p6fhqGRqLAU", title: "The Best Hot Dog in South America", description: "Food video featuring product shots and reactions.", category: "comida" },
    { id: "MKBw7vWapqE", title: "3 Places to Get Hot Dogs in Caracas", description: "Food tour with dynamic captions and recommendations.", category: "comida" },
    { id: "DFZKL98E5mo", title: "Colonial House in La Asunción", description: "Property tour for a home for sale on Margarita Island.", category: "inmuebles" },
    { id: "gRRXKV7YlbI", title: "House for Sale in Margarita", description: "Real estate tour with key details and clean shots.", category: "inmuebles" },
    { id: "7EYG1UvahnE", title: "Abraham & the Verity Mod", description: "Minecraft edit with scares, effects, and music sync.", category: "gaming" },
    { id: "7T1EA6ipUNk", title: "Minecraft’s First Creative Mode", description: "Gaming clip with pacing, graphics, and highlights.", category: "gaming" },
    { id: "wWrxDPXKI6o", title: "3 Tips for Ranked Battle Royale", description: "Educational gaming Short with on-screen text and dynamic cuts.", category: "gaming" },
    { id: "dSUN8AgrRso", title: "5 AMAZING GTA 6 DETAILS", description: "Gaming tips Short with on-screen text and dynamic cuts.", category: "gaming" },
    { id: "FY3fyqsBKuw", title: "Car Audio", description: "English-subtitled Short.", category: "ingles" },
    { id: "uA36txFzIjI", title: "Improve Your Smile", description: "Dental clinic promo Short designed to attract new patients.", category: "ingles" },
    { id: "xJLP5hId_V8", title: "Smile Transformation", description: "Dental clinic Short with dynamic rhythm and clean cuts.", category: "ingles" },
  ]
};
