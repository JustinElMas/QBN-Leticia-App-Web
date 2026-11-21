export function GlobalLoader() {
  // Evitar duplicados si se llama rápidamente
  const existingLoader = document.getElementById("global-loader");
  if (existingLoader) {
    existingLoader.remove();
  }

  // Bloqueamos el scroll del body mientras carga
  document.body.classList.add("hidden-snack");

  const loader = document.createElement("div");
  loader.id = "global-loader";
  loader.setAttribute("role", "status");
  loader.setAttribute("aria-live", "polite");

  loader.innerHTML = `
    <div class="loader-festive-container">
      <!-- Partículas sutiles decorativas -->
      <div class="festive-glow"></div>

      <!-- Logo :D con Gorro Navideño (SVG nítido a cualquier resolución) -->
      <div class="logo-wrapper">
        <svg width="140" height="145" viewBox="0 0 160 165" fill="none" xmlns="http://www.w3.org/2000/svg" class="christmas-logo-svg">
          
          <!-- Dos puntos (:) del logo -->
          <rect x="36" y="64" width="17" height="17" rx="2" transform="rotate(-6 36 64)" fill="#111827"/>
          <rect x="40" y="106" width="17" height="17" rx="2" transform="rotate(-6 40 106)" fill="#111827"/>

          <!-- Letra D inclinada (Sonrisa) -->
          <path d="M72 48L102 45C128 42.5 144 58 146.5 82C149 106 135 123 109 125.5L79 128.5L72 48Z" 
                stroke="#111827" stroke-width="15" stroke-linejoin="round"/>

          <!-- Gorro Navideño posicionado sobre la esquina superior de la D -->
          <g transform="translate(56, 4) rotate(-14)">
            <!-- Cuerpo rojo del gorro -->
            <path d="M16 44C18 22 36 8 62 12C76 14 86 24 90 34C74 28 58 31 52 44H16Z" fill="#DC2626"/>
            <!-- Sombra interior del gorro -->
            <path d="M52 44C58 31 74 28 90 34C85 38 76 41 66 42L52 44Z" fill="#991B1B"/>
            <!-- Pompón blanco -->
            <circle cx="91" cy="34" r="9" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
            <!-- Borde blanco de felpa -->
            <rect x="10" y="39" width="48" height="13" rx="6.5" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
          </g>
        </svg>
      </div>

      <!-- Texto UI/UX Profesional -->
      <div class="loader-copy">
        <span class="festive-badge">✨ Especial de Temporada ✨</span>
        <h2 class="loader-headline">
          Esta Navidad, <br />
          <span class="highlight-festive">Sácale una Sonrisa</span> a tu Bolsillo
        </h2>
      </div>

      <!-- Barra de progreso minimalista -->
      <div class="loader-progress-track">
        <div class="loader-progress-bar"></div>
      </div>
    </div>
  `;

  // Método para ocultar suavemente el loader (compatible con tu main.js)
  loader.hide = () => {
    loader.classList.add("loader-hidden");
    document.body.classList.remove("hidden-snack");
    setTimeout(() => {
      if (loader && loader.parentNode) {
        loader.remove();
      }
    }, 500);
  };

  return loader;
}