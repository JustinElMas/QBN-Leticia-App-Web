import "./style.css";
import { Navbar, initNavbar } from './components/Navbar.js';
import { Footer } from "./components/Footer.js";
import { Home } from "./pages/Home.js";
import { Directorio, initStickyFilter, initDirectorioEvents } from "./pages/Directorio.js";
//import { Directorio, renderResults, initStickyFilter } from "./pages/Directorio.js";
import { Categorias } from "./pages/Categorias.js";
import { Negocio } from "./pages/Negocio.js";
import { NotFound } from "./pages/NotFound.js";
import { DescuentosView, initDescuentosLogic } from "./pages/Descuentos.js";
import { getRoute } from "./router/router.js";
import { negocios } from "./data/negocios.js";
import { promocionesOnline } from './data/promocionesOnline.js';

// 1. IMPORTAMOS EL GLOBAL LOADER
import { GlobalLoader } from "./components/GlobalLoader.js"; // Ajusta la ruta a tu carpeta

const app = document.querySelector("#app");
const todosLosProductos = promocionesOnline || [];


function initApp() {
  // Renderizamos con loader en la carga inicial de la aplicación
  renderWithLoader();
}

// 2. FUNCIÓN PARA MOSTRAR EL LOADER MIENTRAS RENDERIZA CADA VISTA
function renderWithLoader() {
  const loader = GlobalLoader();
  document.body.appendChild(loader);

  setTimeout(() => {
    try {
      render();
    } catch (error) {
      console.error("🚨 Error capturado al renderizar:", error);
    } finally {
      // Ocurra un error o no, SIEMPRE ocultamos el loader para evitar que se pegue
      if (loader && typeof loader.hide === "function") {
        loader.hide();
      }
    }
  }, 400);
}

function render() {
  try {
    // 1. Obtenemos las variables de la ruta asegurando valores por defecto
    const route = getRoute() || {};
    const path = route.path || "/";
    const params = route.params || new URLSearchParams();

    let content = "";

    const searchParam = params.get("q") || params.get("search") || "";
    const categoriaParam = params.get("categoria") || "";

    if (path === "/") {
      content = Home(todosLosProductos);
    } else if (path === "/directorio") {
      content = Directorio({ search: searchParam, categoria: categoriaParam });
    } else if (path === "/categorias") {
      content = Categorias();
    } else if (path && path.startsWith("/negocio/")) {
      content = Negocio(path.split("/")[2]);
      if (!content) content = NotFound();
    } else if (path === "/descuentos") {
      content = DescuentosView();
    } else {
      content = NotFound();
    }

    app.innerHTML = `${typeof Navbar === 'function' ? Navbar() : ''}<main>${content}</main>${typeof Footer === 'function' ? Footer() : ''}`;

    if (typeof initNavbar === 'function') initNavbar();
    bindEvents();

    if (path === "/") initTypewriter();
    if (path === "/directorio") {
      initStickyFilter();
      initDirectorioEvents(categoriaParam);
    }
    if (path === "/descuentos") initDescuentosLogic(todosLosProductos);

  } catch (error) {
    console.error("🚨 ERROR CRÍTICO EN RENDER:", error);
    app.innerHTML = `<main class="py-20 text-center px-4"><h2 class="text-2xl text-red-600 font-bold">Error al cargar la página</h2></main>`;
  }
}

function navigate(url) {
  history.pushState({}, "", url);
  // 3. Al cambiar de ruta invocamos la versión con loader
  renderWithLoader();
}

function bindEvents() {
  document.querySelectorAll("[data-link]").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || link.target === "_blank") return;
      e.preventDefault();
      navigate(href);
    });
  });
}

function initTypewriter() {
  const target = document.getElementById("typewriter-text");
  if (!target) return;
  const texts = ["tiendas", "servicios", "restaurantes", "locales"];
  let textIndex = 0, charIndex = 0, isDeleting = false;

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
    } else if (isDeleting && charIndex === 0) { // 👈 Corregido aquí (===)
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      speed = 500;
    }
    setTimeout(type, speed);
  }
  type();
}

window.addEventListener("popstate", renderWithLoader);
document.addEventListener("DOMContentLoaded", initApp);