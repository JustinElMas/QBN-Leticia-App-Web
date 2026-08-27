export function ProductPromoCard(promo) {
  const mensajeWA = encodeURIComponent(`¡Hola! Quisiera aprovechar la oferta de "${promo.nombre}" a ${promo.precioAhora}.`);

  return `
    <div class="min-w-[280px] sm:min-w-[320px] max-w-[320px] bg-white rounded-3xl shadow-md hover:shadow-xl border border-slate-100 overflow-hidden flex flex-col justify-between snap-start transform transition-all duration-300 hover:-translate-y-1.5">
      
      <!-- Imagen del producto y badges -->
      <div class="relative h-48 w-full overflow-hidden bg-slate-100">
        <img 
          src="${promo.imagen}" 
          alt="${promo.nombre}" 
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onerror="this.src='https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=500&q=80'"
        />
        
        <!-- Badge Descuento -->
        <span class="absolute top-3 right-3 bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg tracking-wider">
          ${promo.descuento}
        </span>

        <!-- Badge Negocio -->
        <span class="absolute bottom-3 left-3 bg-black/65 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full truncate max-w-[80%]">
          🏪 ${promo.negocioNombre}
        </span>
      </div>

      <!-- Detalles del Producto -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-base font-bold text-slate-900 line-clamp-1">${promo.nombre}</h3>
          <p class="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">${promo.descripcion}</p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100">
          
          <!-- Stock restante -->
          <div class="flex items-center justify-between text-xs mb-3">
            <span class="text-slate-400 font-medium">Disponibles:</span>
            <span class="font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
              ⚡ Quedan ${promo.stock}
            </span>
          </div>

          <!-- Precios (Antes / Ahora) -->
          <div class="flex items-baseline justify-between">
            <div>
              <span class="block text-xs font-semibold text-slate-400 line-through leading-none">${promo.precioAntes}</span>
              <span class="text-2xl font-black text-emerald-600 leading-tight">${promo.precioAhora} <span class="text-lg">🤑</span></span>
            </div>
          </div>

          <!-- Botón de Pedido por WhatsApp -->
          <a 
            href="https://wa.me/${promo.whatsapp}?text=${mensajeWA}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="mt-4 flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 px-4 rounded-2xl shadow-md transition-colors"
          >
            Aprovechar Oferta 📲
          </a>
        </div>
      </div>

    </div>
  `;
}