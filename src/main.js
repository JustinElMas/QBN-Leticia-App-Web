import "./style.css";
import { Navbar, initNavbar } from './components/Navbar.js';
import { Footer } from "./components/Footer.js";
import { Home } from "./pages/Home.js";
import { Directorio, renderResults, initStickyFilter } from "./pages/Directorio.js";
import { Categorias } from "./pages/Categorias.js";
import { Negocio } from "./pages/Negocio.js";
import { NotFound } from "./pages/NotFound.js";
import { getRoute } from "./router/router.js";
import { negocios } from "./data/negocios.js";
import { GlobalLoader } from './components/GlobalLoader.js';

const app = document.querySelector("#app");

function render() {
  // 1. Instanciar y mostrar el loader en cada renderizado
  const loader = GlobalLoader();
  document.body.prepend(loader);

  const { path, params } = getRoute();
  let content = "";

  const searchParam = params.get("q") || params.get("search") || "";
  const categoriaParam = params.get("categoria") || "";

  if (path === "/") {
    content = Home();
  } else if (path === "/directorio") {
    content = Directorio({
      search: searchParam,
      categoria: categoriaParam
    });
  } else if (path === "/categorias") {
    content = Categorias();
  } else if (path.startsWith("/negocio/")) {
    content = Negocio(path.split("/")[2]);
    if (!content) content = NotFound();
  } else {
    content = NotFound();
  }

  // Renderizar la vista en el DOM
  app.innerHTML = `${Navbar()}<main>${content}</main>${Footer()}`;

  initNavbar();
  bindEvents();

  // === ACTIVAR EFECTOS SEGÚN LA PÁGINA ===
  if (path === "/") {
    initTypewriter();
  }

  if (path === "/directorio") {
    initStickyFilter();
  }

  // 2. Ocultar el loader tras un breve tiempo para dar sensación de transición
  setTimeout(() => {
    loader.hide();
  }, 400);
}

function navigate(url) {
  history.pushState({}, "", url);
  render();
}

function bindEvents() {
  // Enlaces SPA (data-link)
  document.querySelectorAll("[data-link]").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || link.target === "_blank") return;
      e.preventDefault();
      navigate(href);
    });
  });

  // BUSCADOR EN TIEMPO REAL
  const searchInput = document.querySelector("#search-input");
  const directoryResults = document.querySelector("#directory-results");

  if (searchInput && directoryResults) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value;
      const { params } = getRoute();
      const categoria = params.get("categoria") || "";

      directoryResults.innerHTML = renderResults(negocios, query, categoria);

      directoryResults.querySelectorAll("[data-link]").forEach(link => {
        link.addEventListener("click", (evt) => {
          const href = link.getAttribute("href");
          if (!href || href.startsWith("#") || link.target === "_blank") return;
          evt.preventDefault();
          navigate(href);
        });
      });
    });
  }
}

// === EFECTO TYPEWRITER ===
function initTypewriter() {
  const target = document.getElementById("typewriter-text");
  if (!target) return;

  const texts = ["tiendas", "servicios", "restaurantes", "locales"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentTarget = document.getElementById("typewriter-text");
    if (!currentTarget) return;

    const currentWord = texts[textIndex];

    if (isDeleting) {
      currentTarget.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      currentTarget.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 50 : 120;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      speed = 500;
    }

    setTimeout(type, speed);
  }

  type();
}

// Eventos de navegación
window.addEventListener("popstate", render);
document.addEventListener("DOMContentLoaded", render);