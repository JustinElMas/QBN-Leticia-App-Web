export function BottomNav(activeFilter = 'descuentos') {
  return `
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 px-4 py-2 flex justify-around items-center md:hidden shadow-lg">
      
      <button 
        data-filter="descuentos" 
        class="filter-btn flex flex-col items-center text-xs font-semibold ${activeFilter === 'descuentos' ? 'text-[#e61d63]' : 'text-slate-500'}"
      >
        <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
        </svg>
        Más Descuento
      </button>

      <button 
        data-filter="economico" 
        class="filter-btn flex flex-col items-center text-xs font-semibold ${activeFilter === 'economico' ? 'text-[#e61d63]' : 'text-slate-500'}"
      >
        <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
        Más Económico
      </button>

      <button 
        data-filter="disponibilidad" 
        class="filter-btn flex flex-col items-center text-xs font-semibold ${activeFilter === 'disponibilidad' ? 'text-[#e61d63]' : 'text-slate-500'}"
      >
        <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
        </svg>
        Más Disponibilidad
      </button>

    </nav>
  `;
}