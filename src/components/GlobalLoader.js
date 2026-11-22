// 👇 Importa la imagen directamente como módulo de JS/Vite
import logoNavidad from "../assets/qbn-navidad.png";

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
      <!-- Contenedor de tu imagen con giro rápido + pulso hacia arriba -->
      <div class="logo-img-wrapper">
        <img 
          src="${logoNavidad}" 
          alt="Logo QBN Navidad" 
          class="christmas-logo-img spin-forward"
        />
      </div>

      <!-- Texto con fuente Outfit weight 500 y puntos suaves -->
      <div class="loader-copy">
        <h2 class="loader-headline-outfit">
          <span class="headline-top">"En esta <span class="navidad-word">NAVIDAD</span>,</span>
          <span class="headline-bottom">
            Sácale una sonrisa a tu bolsillo" <span class="brand-smile">:D</span>
            <span class="smooth-dots" aria-hidden="true">
              <span class="smooth-dot">.</span>
              <span class="smooth-dot">.</span>
              <span class="smooth-dot">.</span>
            </span>
          </span>
        </h2>
      </div>

      <!-- Barrita roja de carga -->
      <div class="loader-progress-track">
        <div class="loader-progress-bar-red"></div>
      </div>
    </div>
  `;

  // Control del loop después de 3 segundos si la página sigue cargando
  const imgElement = loader.querySelector(".christmas-logo-img");
  let isReversed = false;

  const loopInterval = setInterval(() => {
    if (!document.body.contains(loader) || !imgElement) {
      clearInterval(loopInterval);
      return;
    }

    isReversed = !isReversed;

    // Reiniciamos las clases para disparar el giro al otro lado + pulso hacia arriba
    imgElement.classList.remove("spin-forward", "spin-reverse");
    void imgElement.offsetWidth; // Forzar reflow para reiniciar animación CSS
    imgElement.classList.add(isReversed ? "spin-reverse" : "spin-forward");
  }, 3000);

  // Método para ocultar suavemente el loader (compatible con main.js)
  loader.hide = () => {
    clearInterval(loopInterval);
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