import { negocios } from "../data/negocios.js";

export function ProductPromoCard(prod) {
  const nombre = prod["NOMBRE DEL PRODUCTO"] || 'Producto sin nombre';
  const sku = prod.SKU || prod["Código Artículo"] || '';
  const imagen = prod["URL IMAGEN"] || 'https://via.placeholder.com/300?text=Sin+Imagen';
  
  // Limpieza de precios monetarios
  const limpiarPrecio = (val) => typeof val === 'number' ? val : parseFloat((val || '0').replace(/[^0-9]/g, '')) || 0;
  
  const precioActual = limpiarPrecio(prod.Precio_Final);
  const precioAnterior = prod.Precio_Antes ? limpiarPrecio(prod.Precio_Antes) : null;
  const descuento = prod.Descuento || null;
  const stock = prod.Disponible !== undefined ? prod.Disponible : null;

  const precioFormateado = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precioActual);
  const precioAntesFormateado = precioAnterior ? new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precioAnterior) : '';

  // Control de Stock dinámico
  let textoStock = '';
  let claseStock = 'color: #0d3b66;';
  if (stock !== null) {
    if (stock <= 5) {
      textoStock = `¡Solo ${stock} disponible${stock === 1 ? '' : 's'}!`;
      claseStock = 'color: #d97706; font-weight: 600;';
    } else {
      textoStock = `Disponible: ${stock} uni.`;
    }
  }

  // Búsqueda del Negocio asociado (puedes ajustar esta lógica según cómo relaciones tu producto con el negocio, ej: prod.negocioId o por defecto "Droguería Gloria")
  const negocioAsociado = negocios.find(n => n.id === prod.negocioId) || negocios[0]; 
  const nombreNegocio = negocioAsociado ? negocioAsociado.nombre : "Droguería Gloria";
  const urlNegocio = negocioAsociado ? `/negocio/${negocioAsociado.id}` : "/directorio";

  // Enlaces de WhatsApp y Ubicación dinámicos del negocio
  const telWssp = negocioAsociado?.whatsapp || "3144618719";
  const msgWssp = encodeURIComponent(`Hola, quisiera pedir a domicilio: ${nombre} (${precioFormateado}) ${sku ? '- SKU: '+sku : ''}`);
  const urlWssp = `https://wa.me/${telWssp}?text=${msgWssp}`;
  const urlMaps = negocioAsociado?.maps || "https://maps.app.goo.gl/sptmkLFM5SNTgezF6";

  return `
    <div class="card-product flex-shrink-0 w-[280px] sm:w-[300px] snap-start bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col relative shadow-sm hover:shadow-md transition-shadow">
      ${descuento ? `<span class="absolute top-3 left-3 bg-[#d81b60] text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">-${descuento}</span>` : ''}
      
      <!-- Imagen con Zoom en Modal -->
      <div class="w-full h-48 bg-white flex items-center justify-center cursor-pointer border-b border-slate-100" onclick="document.getElementById('imgAmpliada').src='${imagen}'; document.getElementById('miModal').style.display='flex';">
        <img src="${imagen}" alt="${nombre}" class="w-full h-full object-contain p-4" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/300?text=Sin+Imagen';">
      </div>

      <div class="p-4 flex flex-col flex-grow">
        <!-- Variable del nombre del negocio -->
        <span class="text-xs font-semibold text-[#2563EB] mb-1">Negocio: ${nombreNegocio}</span>
        
        <h3 class="text-sm font-bold text-slate-900 mb-1 line-clamp-2 uppercase">${nombre}</h3>
        
        ${sku ? `<span class="text-[11px] text-slate-500 mb-1">SKU: ${sku}</span>` : ''}
        ${stock !== null ? `<span class="text-xs mb-3 ${claseStock}">${textoStock}</span>` : '<div class="mb-3"></div>'}
        
        <div class="mt-auto mb-4 flex items-baseline gap-2">
          <span class="text-xl font-black text-[#d81b60]">${precioFormateado}</span>
          ${precioAnterior ? `<span class="line-through text-slate-400 text-xs">${precioAntesFormateado}</span>` : ''}
        </div>

        <!-- Botones orientados al negocio registrado -->
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