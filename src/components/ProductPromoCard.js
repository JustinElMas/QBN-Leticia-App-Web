import { negocios } from "../data/negocios.js";

export function ProductPromoCard(prod) {
  if (!prod) return '';

  // 1. Mapeo exacto de los campos de tu promociones.js
  const nombre = prod.nombre || 'Producto sin nombre';
  const imagen = prod.imagen || 'https://placehold.co/300x200?text=Sin+Imagen';
  const descuento = prod.descuento || null;
  const stock = prod.stock !== undefined ? prod.stock : null;

  // 2. Manejo de precios
  const precioAhora = prod.precioAhora || "$0";
  const precioAntes = prod.precioAntes || null;

  // 3. Control de Stock dinámico
  let textoStock = '';
  let claseStock = 'text-slate-500';
  if (stock !== null) {
    if (stock <= 5) {
      textoStock = `¡Solo ${stock} disponible${stock === 1 ? '' : 's'}!`;
      claseStock = 'text-amber-600 font-bold';
    } else {
      textoStock = `Disponible: ${stock} uni.`;
    }
  }

  // 4. Búsqueda y Enlaces del Negocio
  const negocioAsociado = negocios?.find(n => n.id === prod.negocioId);
  const nombreNegocio = prod.negocioNombre || negocioAsociado?.nombre || "Negocio Local";
  const urlNegocio = `/negocio/${prod.negocioId}`;

  // WhatsApp dinámico
  const telWssp = prod.whatsapp || negocioAsociado?.whatsapp || "573000000000";
  const msgWssp = encodeURIComponent(`Hola, quisiera pedir a domicilio: ${nombre} (${precioAhora})`);
  const urlWssp = `https://wa.me/${telWssp}?text=${msgWssp}`;
  const urlMaps = negocioAsociado?.maps || "#";

  return `
    <div class="card-product flex-shrink-0 w-[280px] sm:w-[300px] snap-start bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col relative shadow-sm hover:shadow-md transition-shadow">
      ${descuento ? `<span class="absolute top-3 left-3 bg-[#d81b60] text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">${descuento}</span>` : ''}
      
      <!-- Imagen -->
      <div class="w-full h-48 bg-slate-50 flex items-center justify-center cursor-pointer border-b border-slate-100">
        <img src="${imagen}" alt="${nombre}" class="w-full h-full object-cover" loading="lazy" onerror="this.onerror=null; this.src='https://placehold.co/300x200?text=Sin+Imagen';">
      </div>

      <div class="p-4 flex flex-col flex-grow">
        <!-- Nombre del Negocio Dinámico -->
        <span class="text-xs font-bold text-[#2563EB] mb-1 uppercase tracking-wide">🏪 ${nombreNegocio}</span>
        
        <!-- Nombre del Producto Dinámico -->
        <h3 class="text-sm font-bold text-slate-900 mb-1 line-clamp-2 uppercase">${nombre}</h3>
        
        ${stock !== null ? `<span class="text-xs mb-3 ${claseStock}">${textoStock}</span>` : '<div class="mb-3"></div>'}
        
        <!-- Precios -->
        <div class="mt-auto mb-4 flex items-baseline gap-2">
          <span class="text-xl font-black text-[#d81b60]">${precioAhora}</span>
          ${precioAntes ? `<span class="line-through text-slate-400 text-xs">${precioAntes}</span>` : ''}
        </div>

        <!-- Botones de Acción -->
        <div class="flex flex-col gap-2">
          <a href="${urlWssp}" target="_blank" class="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-[#25d366] text-white hover:bg-[#22bf5b] transition-colors">
            💬 Pedir a Domicilio
          </a>
          <div class="grid grid-cols-2 gap-2">
            <a href="${urlMaps}" target="_blank" class="flex items-center justify-center gap-1 py-2 px-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
              📍 Ubicación
            </a>
            <a href="${urlNegocio}" data-link class="flex items-center justify-center gap-1 py-2 px-2 rounded-xl text-xs font-bold bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-colors text-center">
              🏪 Ver Negocio
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}