import { negocios } from "../data/negocios.js";
import { categorias } from "../data/categorias.js";
import { renderEmptyState, renderTiendaCard } from "../components/BuscadorTiendas.js";

/**
 * Función ultra-segura para filtrar y renderizar resultados
 */
export function renderResults(list = [], search = "", categoria = "") {
  const q = (search || "").trim().toLowerCase();

  const results = (list || []).filter(n => {
    // Filtro por categoría
    const matchesCategory = !categoria || n.categoriaId === categoria;

    // Campos de búsqueda seguros contra valores null/undefined
    const nombre = (n.nombre || "").toLowerCase();
    const catNombre = (n.categoria || "").toLowerCase();
    const desc = (n.descripcion || "").toLowerCase();
    const servicios = Array.isArray(n.servicios) ? n.servicios.join(" ").toLowerCase() : "";

    const haystack = `${nombre} ${catNombre} ${desc} ${servicios}`;
    const matchesQuery = !q || haystack.includes(q);

    return matchesCategory && matchesQuery;
  });

  if (!results.length) {
    return renderEmptyState(search);
  }

  return results.map(renderTiendaCard).join("");
}

/**
 * Controlador Sticky de alta compatibilidad (Scroll event + Sentinel)
 */
export function initStickyFilter() {
  const filterBar = document.getElementById("sticky-filter-bar");
  if (!filterBar) return;

  const handleScroll = () => {
    // Detectar cuando el scroll pasa los 120px
    const isStuck = window.scrollY > 120;

    if (isStuck) {
      filterBar.classList.add("bg-blue-600", "text-white", "shadow-xl", "py-2");
      filterBar.classList.remove("bg-white", "text-slate-800", "py-3.5");

      filterBar.querySelectorAll(".filter-chip:not(.active-chip)").forEach(chip => {
        chip.classList.add("bg-white/20", "text-white", "hover:bg-white/30");
        chip.classList.remove("bg-slate-100", "text-slate-700", "hover:bg-slate-200");
      });
    } else {
      filterBar.classList.remove("bg-blue-600", "text-white", "shadow-xl", "py-2");
      filterBar.classList.add("bg-white", "text-slate-800", "py-3.5");

      filterBar.querySelectorAll(".filter-chip:not(.active-chip)").forEach(chip => {
        chip.classList.remove("bg-white/20", "text-white", "hover:bg-white/30");
        chip.classList.add("bg-slate-100", "text-slate-700", "hover:bg-slate-200");
      });
    }
  };

  window.removeEventListener("scroll", handleScroll);
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Ejecución inicial
}

/**
 * Vista de Directorio
 */
export function Directorio({ search = "", categoria = "" } = {}) {
  const selected = categorias.find(c => c.id === categoria);

  return `
    <!-- HEADER Y BUSCADOR -->
    <section class="bg-slate-50 border-b border-slate-200/60">
      <div class="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8">
        <span class="text-xs font-black uppercase tracking-widest text-indigo-600">Directorio</span>
        <h1 class="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Encuentra tu próximo negocio favorito.
        </h1>
        <p class="mt-2 max-w-2xl text-sm text-slate-500">
          Explora negocios locales y descubre sus ofertas.
        </p>

        <!-- Campo de Búsqueda -->
        <div class="mt-6 max-w-2xl">
          <div class="relative flex items-center">
            <span class="absolute left-4 text-slate-400">🔍</span>
            <input 
              type="text" 
              id="search-input" 
              value="${search}"
              placeholder="Buscar por nombre, producto o servicio..." 
              autocomplete="off"
              class="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm font-medium text-slate-800 placeholder-slate-400 shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- BARRA DE FILTROS STICKY (sticky top-0 obligatorio en CSS) -->
    <div class="sticky top-0 z-30 w-full bg-slate-50/80 backdrop-blur-md">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          id="sticky-filter-bar" 
          class="my-3 w-full rounded-2xl bg-white p-3.5 text-slate-800 shadow-sm transition-all duration-300"
        >
          <div class="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            <!-- Botón Todos -->
            <a 
              href="/directorio" 
              data-link 
              class="filter-chip whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition-all ${!categoria ? 'active-chip bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}"
            >
              🏪 Todos (${negocios.length})
            </a>

            <!-- Categorías -->
            ${categorias.map(c => {
              const count = negocios.filter(n => n.categoriaId === c.id).length;
              const isActive = categoria === c.id;
              return `
                <a 
                  href="/directorio?categoria=${c.id}" 
                  data-link 
                  class="filter-chip whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition-all ${isActive ? 'active-chip bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}"
                >
                  ${c.icon || '📍'} ${c.nombre} <span class="ml-0.5 opacity-70">(${count})</span>
                </a>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- GRILLA DE RESULTADOS -->
    <section class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      ${selected ? `
        <div class="mb-4 text-xs font-bold text-slate-500">
          Filtrando por: <span class="text-indigo-600">${selected.nombre}</span>
        </div>
      ` : ''}

      <div id="directory-results" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        ${renderResults(negocios, search, categoria)}
      </div>
    </section>
  `;
}