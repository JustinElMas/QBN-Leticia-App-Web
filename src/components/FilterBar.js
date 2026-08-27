export function renderFilterBar(categorias, categoriaActiva = 'todas') {
  return `
    <!-- Sentinel: Puntos de referencia invisibles para detectar el scroll -->
    <div id="filter-sentinel" class="h-1 w-full"></div>

    <!-- BARRA DE FILTROS STICKY -->
    <div id="sticky-filter-bar" class="sticky top-0 z-40 w-full transition-all duration-300 ease-in-out bg-white text-slate-800 shadow-sm rounded-2xl p-4 my-4">
      <div class="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-3">
        
        <!-- Título / Indicador (Cambia dinámicamente) -->
        <div class="flex items-center gap-2 font-bold text-sm">
          <span class="text-xl">🔍</span>
          <span id="filter-title">Filtrar por categoría</span>
        </div>

        <!-- LISTA DE CATEGORÍAS (Scrollable en móviles) -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none no-scrollbar">
          <!-- Botón "Todas" -->
          <button 
            data-cat="todas"
            class="filter-chip whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${categoriaActiva === 'todas' ? 'active-chip bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}"
          >
            🏪 Todas
          </button>

          <!-- Categorías Dinámicas -->
          ${categorias.map(cat => `
            <button 
              data-cat="${cat.id}"
              class="filter-chip whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${categoriaActiva === cat.id ? 'active-chip bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}"
            >
              ${cat.icon} ${cat.nombre}
            </button>
          `).join('')}
        </div>

      </div>
    </div>
  `;
}