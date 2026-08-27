// Coloca aquí tu número con código de país (sin el signo '+')
const WHATSAPP_NUMERO = "573000000000"; 

/**
 * Genera el estado vacío cuando no se encuentran tiendas
 */
export function renderEmptyState(busquedaActual = "") {
  const mensajeWA = encodeURIComponent(
    `¡Hola! Estuve buscando "${busquedaActual}" en el directorio pero no la encontré. Me gustaría solicitar añadir una nueva tienda.`
  );
  const linkWhatsApp = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensajeWA}`;

  return `
    <div class="col-span-full my-8 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
      <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-3xl">
        🏪
      </div>
      <h3 class="text-xl font-black text-slate-900 sm:text-2xl">
        No hay tiendas similares a tu búsqueda
      </h3>
      <p class="mt-2 max-w-md text-sm text-slate-500">
        ${busquedaActual 
          ? `No encontramos ningún negocio que coincida con "<strong class="text-slate-800">${busquedaActual}</strong>".` 
          : 'No hay tiendas disponibles en esta categoría actualmente.'}
      </p>
      <a 
        href="${linkWhatsApp}" 
        target="_blank" 
        rel="noopener noreferrer"
        class="mt-6 inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 hover:bg-emerald-600 active:scale-95"
      >
        <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
        <span>Contactar para añadir</span>
      </a>
    </div>
  `;
}

/**
 * Tarjeta individual de tienda
 */
export function renderTiendaCard(tienda) {
  return `
    <a href="/negocio/${tienda.slug || tienda.id}" data-link class="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md">
      <div>
        <div class="relative h-44 w-full overflow-hidden bg-slate-100">
          <img 
            src="${tienda.portada || 'https://via.placeholder.com/400x200?text=Sin+Imagen'}" 
            alt="${tienda.nombre || 'Tienda'}" 
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onerror="this.src='https://via.placeholder.com/400x200?text=Sin+Imagen'"
          />
        </div>
        <div class="p-5">
          <div class="mb-2 flex items-center justify-between">
            <span class="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-600">${tienda.categoria || 'General'}</span>
            <span class="text-xs font-bold text-amber-500">★ ${tienda.rating || '5.0'}</span>
          </div>
          <h3 class="text-base font-bold text-slate-900 group-hover:text-indigo-600">${tienda.nombre || ''}</h3>
          <p class="mt-1 text-xs text-slate-500 line-clamp-2">${tienda.descripcion || ''}</p>
        </div>
      </div>
      <div class="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-5 py-3 text-xs text-slate-500">
        <span>📍 ${tienda.ubicacion?.ciudad || 'Local'}</span>
        <span class="font-semibold text-indigo-600">Ver detalles →</span>
      </div>
    </a>
  `;
}