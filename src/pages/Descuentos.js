import { negocios } from "../data/negocios.js";

export function DescuentosView() {
  return `
    <div class="catalogo-page-container px-4 py-8 pb-28 max-w-7xl mx-auto">
      <!-- Encabezado de la página -->
      <header style="text-align: center; margin-bottom: 32px;">
        <h1 style="font-size: 2.25rem; font-weight: 900; color: #0d3b66; margin-bottom: 8px; letter-spacing: -0.025em;">
          Catálogo de Productos con Descuentos 🛒🔥
        </h1>
        <p style="color: #d81b60; font-weight: 700; font-size: 1rem; max-width: 700px; margin: 0 auto;">
          📲 Selecciona tus productos y pídelos directo por WhatsApp a Domicilio o visita nuestros puntos de venta locales en Leticia. 🎉
        </p>
      </header>

      <!-- Barra Superior: Buscador y Filtro de Ordenamiento -->
      <div id="searchWrapper" style="background: #ffffff; padding: 16px; border-radius: 16px; box-shadow: 0 4px 20px rgba(13, 59, 102, 0.08); display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-bottom: 32px; border: 1px solid rgba(13,59,102,0.08);">
        <div style="position: relative; flex-grow: 1; min-width: 260px; display: flex; align-items: center;">
          <input 
            type="text" 
            id="buscador" 
            placeholder="Buscar por nombre, SKU o código..." 
            style="width: 100%; padding: 12px 16px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 0.95rem; outline: none; transition: border-color 0.2s;"
            onfocus="this.style.borderColor='#2563EB'"
            onblur="this.style.borderColor='#e2e8f0'"
          >
        </div>
        
        <select 
          id="ordenar" 
          style="padding: 12px 16px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 0.95rem; background-color: #ffffff; color: #1e293b; cursor: pointer; outline: none; min-width: 220px;"
        >
          <option value="defecto">✨ Recomendados</option>
          <option value="descuento">💥 Mayor Descuento</option>
          <option value="precio_bajo">⬇️ Precio más bajo</option>
          <option value="disponibilidad">📦 Más Disponibilidad</option>
        </select>
      </div>

      <!-- Barra de Búsqueda Flotante para Móvil (Aparece al hacer scroll hacia abajo) -->
      <div id="mobileSearchSticky" class="md:hidden" style="position: fixed; top: 0; left: 0; right: 0; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); padding: 10px 16px; box-shadow: 0 4px 20px rgba(13,59,102,0.12); z-index: 140; transform: translateY(-100%); transition: transform 0.3s ease; border-bottom: 1px solid #e2e8f0;">
        <input 
          type="text" 
          id="buscadorMobileSticky" 
          placeholder="🔍 Buscar producto en oferta..." 
          style="width: 100%; padding: 10px 14px; border: 1.5px solid #cbd5e1; border-radius: 10px; font-size: 0.9rem; outline: none; background: #f8fafc;"
        >
      </div>

      <!-- Grid de Productos -->
      <div id="contenedor-catalogo" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; min-height: 300px; margin-bottom: 40px;"></div>
      
      <!-- Centinela para Scroll Infinito -->
      <div id="infinite-sentinel" style="width: 100%; text-align: center; padding: 30px 0; color: #64748b; font-weight: 600; font-size: 0.95rem;">
        Cargando más ofertas...
      </div>

      <!-- Botón Flotante para Subir -->
      <button 
        id="btnTop" 
        onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" 
        style="position: fixed; bottom: 85px; right: 20px; background-color: #2563EB; color: #ffffff; border: none; border-radius: 50%; width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4); opacity: 0; visibility: hidden; transition: opacity 0.3s ease, transform 0.2s; z-index: 99;"
        onmouseover="this.style.transform='scale(1.08)'"
        onmouseout="this.style.transform='scale(1)'"
      >
        ⬆
      </button>

      <!-- Botón Flotante de Búsqueda Rápida para Móvil 
      <button 
        id="btnSearchMobile" 
        class="md:hidden"
        style="position: fixed; bottom: 85px; left: 20px; background-color: #0d3b66; color: #ffffff; border: none; border-radius: 50%; width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 14px rgba(13, 59, 102, 0.4); z-index: 99;"
        onclick="window.scrollTo({ top: 0, behavior: 'smooth' }); document.getElementById('buscador').focus();"
      >
        🔍
      </button> -->

      <!-- Navbar Móvil Inferior Estilo App (Responsive con Tailwind md:hidden flex) -->
      <nav class="md:hidden flex fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(13,59,102,0.1)] z-[150] justify-around py-2.5 px-2 rounded-t-2xl border-t border-slate-100">
        <button class="nav-btn flex flex-col items-center gap-0.5 text-slate-500 text-[11px] font-bold cursor-pointer flex-1 py-1" data-orden="descuento">
          <span class="text-lg">🔥</span> Descuentos
        </button>
        <button class="nav-btn flex flex-col items-center gap-0.5 text-slate-500 text-[11px] font-bold cursor-pointer flex-1 py-1" data-orden="precio_bajo">
          <span class="text-lg">⬇️</span> + Barato
        </button>
        <button class="nav-btn flex flex-col items-center gap-0.5 text-slate-500 text-[11px] font-bold cursor-pointer flex-1 py-1" data-orden="disponibilidad">
          <span class="text-lg">📦</span> Stock
        </button>
      </nav>

      <!-- Modal con Zoom para Imágenes de Productos -->
      <div id="miModal" style="display: none; position: fixed; z-index: 1000; inset: 0; background-color: rgba(13, 59, 102, 0.85); align-items: center; justify-content: center; padding: 16px;" onclick="if(event.target.id === 'miModal') this.style.display='none';">
        <div style="position: relative; background: #fff; border-radius: 20px; padding: 20px; max-width: 90vw; max-height: 85vh; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
          <button onclick="document.getElementById('miModal').style.display='none'" style="position: absolute; top: 12px; right: 12px; background: #f1f5f9; color: #0d3b66; border: none; border-radius: 50%; width: 32px; height: 32px; font-weight: bold; font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center;">×</button>
          <img id="imgAmpliada" src="" style="max-width: 80vw; max-height: 75vh; object-fit: contain; display: block; margin: 0 auto;" alt="Zoom Producto">
        </div>
      </div>
    </div>
  `;
}

export function initDescuentosLogic(productosTotales = []) {
  let productosFiltrados = [...productosTotales];
  let paginaActual = 0;
  const PRODUCTOS_POR_PAGINA = 12;
  let cargando = false;
  let finDeDatos = false;

  const inputBuscador = document.getElementById('buscador');
  const inputBuscadorSticky = document.getElementById('buscadorMobileSticky');
  const selectOrdenar = document.getElementById('ordenar');
  const contenedor = document.getElementById('contenedor-catalogo');
  const centinela = document.getElementById('infinite-sentinel');
  const mobileSearchSticky = document.getElementById('mobileSearchSticky');

  if (!inputBuscador || !contenedor) return;

  function limpiarPrecio(val) {
    if (typeof val === 'number') return val;
    return parseFloat((val || '0').replace(/[^0-9]/g, '')) || 0;
  }

  function aplicarFiltros(textoBusqueda = null) {
    const busqueda = (textoBusqueda !== null ? textoBusqueda : inputBuscador.value).toLowerCase().trim();
    const orden = selectOrdenar.value;

    // Sincronizar ambos campos de búsqueda si se escribe en uno
    if (inputBuscador.value.toLowerCase().trim() !== busqueda) inputBuscador.value = busqueda;
    if (inputBuscadorSticky && inputBuscadorSticky.value.toLowerCase().trim() !== busqueda) inputBuscadorSticky.value = busqueda;

    productosFiltrados = productosTotales.filter(prod => {
      const nombre = (prod["NOMBRE DEL PRODUCTO"] || '').toLowerCase();
      const sku = (prod.SKU || prod["Código Artículo"] || '').toString().toLowerCase();
      return nombre.includes(busqueda) || sku.includes(busqueda);
    });

    if (orden === 'descuento') {
      productosFiltrados.sort((a, b) => limpiarPrecio(b.Descuento) - limpiarPrecio(a.Descuento));
    } else if (orden === 'precio_bajo') {
      productosFiltrados.sort((a, b) => limpiarPrecio(a.Precio_Final) - limpiarPrecio(b.Precio_Final));
    } else if (orden === 'disponibilidad') {
      productosFiltrados.sort((a, b) => parseInt(b.Disponible || 0) - parseInt(a.Disponible || 0));
    }

    paginaActual = 0;
    finDeDatos = false;
    contenedor.innerHTML = '';
    if (centinela) {
      centinela.style.display = 'block';
      centinela.innerText = "Cargando ofertas...";
    }
    cargando = false;

    if (productosFiltrados.length === 0) {
      contenedor.innerHTML = "<p style='grid-column:1/-1; text-align:center; color:#64748b; padding:3rem; font-weight:600;'>No se encontraron productos coincidentes con tu búsqueda.</p>";
      if (centinela) centinela.style.display = 'none';
      return;
    }
    renderizarSiguienteLote();
  }

  function renderizarSiguienteLote() {
    if (cargando || finDeDatos) return;
    cargando = true;

    const inicio = paginaActual * PRODUCTOS_POR_PAGINA;
    const fin = inicio + PRODUCTOS_POR_PAGINA;
    const lote = productosFiltrados.slice(inicio, fin);

    if (lote.length === 0) {
      finDeDatos = true;
      if (centinela) centinela.innerText = "✨ ¡Has explorado todo el catálogo de ofertas disponible!";
      cargando = false;
      return;
    }

    lote.forEach(prod => {
      const nombre = prod["NOMBRE DEL PRODUCTO"] || 'Producto sin nombre';
      const sku = prod.SKU || prod["Código Artículo"] || '';
      const imagen = prod["URL IMAGEN"] || 'https://via.placeholder.com/300?text=Sin+Imagen';
      const precioActual = limpiarPrecio(prod.Precio_Final);
      const precioAnterior = prod.Precio_Antes ? limpiarPrecio(prod.Precio_Antes) : null;
      const descuento = prod.Descuento || null;
      const stock = prod.Disponible !== undefined ? prod.Disponible : null;

      const precioFormateado = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precioActual);
      const precioAntesFormateado = precioAnterior ? new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precioAnterior) : '';

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

      const negocioAsociado = negocios.find(n => n.id === prod.negocioId) || negocios[0];
      const nombreNegocio = negocioAsociado ? negocioAsociado.nombre : "Droguería Gloria";
      const urlNegocio = negocioAsociado ? `/negocio/${negocioAsociado.id}` : "/directorio";
      
      const telWssp = negocioAsociado?.whatsapp || "3144618719";
      const urlMaps = negocioAsociado?.maps || "https://maps.app.goo.gl/sptmkLFM5SNTgezF6";
      const msgWssp = encodeURIComponent(`Hola, quisiera pedir a domicilio: ${nombre} (${precioFormateado}) ${sku ? '- SKU: '+sku : ''}`);
      const urlWssp = `https://wa.me/${telWssp}?text=${msgWssp}`;

      const card = document.createElement('div');
      card.className = 'card-product';
      card.style.cssText = "background: #fff; border-radius: 16px; border: 1px solid rgba(13,59,102,0.1); overflow: hidden; display: flex; flex-direction: column; position: relative; box-shadow: 0 4px 15px rgba(13,59,102,0.06); transition: transform 0.2s, box-shadow 0.2s;";
      
      card.onmouseover = () => { card.style.transform = 'translateY(-3px)'; card.style.boxShadow = '0 10px 25px rgba(13,59,102,0.12)'; };
      card.onmouseout = () => { card.style.transform = 'translateY(0)'; card.style.boxShadow = '0 4px 15px rgba(13,59,102,0.06)'; };

      card.innerHTML = `
        ${descuento ? `<span style="position: absolute; top: 12px; left: 12px; background-color: #d81b60; color: #fff; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 20px; z-index: 2;">-${descuento}</span>` : ''}
        
        <div style="width: 100%; height: 200px; background: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; border-bottom: 1px solid #f1f5f9;" onclick="document.getElementById('imgAmpliada').src='${imagen}'; document.getElementById('miModal').style.display='flex';">
          <img src="${imagen}" alt="${nombre}" style="width: 100%; height: 100%; object-fit: contain; padding: 16px;" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/300?text=Sin+Imagen';">
        </div>

        <div style="padding: 16px; display: flex; flex-direction: column; flex-grow: 1;">
          <span style="font-size: 0.75rem; font-weight: 700; color: #2563EB; margin-bottom: 4px; display: block;">Negocio: ${nombreNegocio}</span>
          
          <h3 style="font-size: 0.95rem; font-weight: 800; color: #0d3b66; margin-bottom: 6px; line-height: 1.35; text-transform: uppercase; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${nombre}</h3>
          
          ${sku ? `<span style="font-size: 0.75rem; color: #64748b; margin-bottom: 4px;">SKU: ${sku}</span>` : ''}
          ${stock !== null ? `<span style="font-size: 0.75rem; margin-bottom: 8px; ${claseStock}">${textoStock}</span>` : '<div style="margin-bottom:8px;"></div>'}
          
          <div style="margin-top: auto; margin-bottom: 16px; display: flex; align-items: baseline; gap: 8px;">
            <span style="font-size: 1.35rem; font-weight: 900; color: #d81b60;">${precioFormateado}</span>
            ${precioAnterior ? `<span style="text-decoration: line-through; color: #94a3b8; font-size: 0.85rem;">${precioAntesFormateado}</span>` : ''}
          </div>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            <a href="${urlWssp}" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 10px; border-radius: 10px; font-size: 0.85rem; font-weight: 700; background-color: #25d366; color: #fff; text-decoration: none; transition: background 0.2s;">
              💬 Pedir a Domicilio
            </a>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <a href="${urlMaps}" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 4px; padding: 9px; border-radius: 10px; font-size: 0.8rem; font-weight: 700; background-color: #f1f5f9; color: #334155; text-decoration: none; text-align: center;">
                📍 Ubicación
              </a>
              <a href="${urlNegocio}" data-link style="display: flex; align-items: center; justify-content: center; gap: 4px; padding: 9px; border-radius: 10px; font-size: 0.8rem; font-weight: 700; background-color: #2563EB; color: #fff; text-decoration: none; text-align: center;">
                🏪 Ver Negocio
              </a>
            </div>
          </div>
        </div>
      `;
      contenedor.appendChild(card);
    });

    paginaActual++;
    cargando = false;
  }

  // Event Listeners de Buscadores (Principal y Sticky Móvil sincronizados)
  if (inputBuscador) {
    inputBuscador.addEventListener('input', (e) => aplicarFiltros(e.target.value));
  }
  if (inputBuscadorSticky) {
    inputBuscadorSticky.addEventListener('input', (e) => aplicarFiltros(e.target.value));
  }
  if (selectOrdenar) {
    selectOrdenar.addEventListener('change', () => aplicarFiltros());
  }

  // Botones de la barra de navegación móvil inferior
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const orden = this.dataset.orden;
      if (selectOrdenar) {
        selectOrdenar.value = orden;
        aplicarFiltros();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Intersection Observer para el scroll infinito automático
  if (centinela) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !cargando && !finDeDatos) {
        renderizarSiguienteLote();
      }
    }, { rootMargin: '300px' });

    observer.observe(centinela);
  }

  // Comportamiento de Scroll (Barra sticky móvil y botón de subir)
  window.addEventListener('scroll', () => {
    const btnTop = document.getElementById('btnTop');
    const btnSearchMobile = document.getElementById('btnSearchMobile');
    const scrollY = window.scrollY;

    // Mostrar u ocultar botón de scroll top y botón de búsqueda rápida móvil
    if (btnTop) {
      if (scrollY > 350) {
        btnTop.style.visibility = 'visible';
        btnTop.style.opacity = '1';
      } else {
        btnTop.style.visibility = 'hidden';
        btnTop.style.opacity = '0';
      }
    }

    // Mostrar / Ocultar la barra de búsqueda superior flotante en móvil cuando se hace scroll hacia abajo
    if (mobileSearchSticky) {
      if (scrollY > 280) {
        mobileSearchSticky.style.transform = 'translateY(0)';
      } else {
        mobileSearchSticky.style.transform = 'translateY(-100%)';
      }
    }
  });

  // Carga inicial al montar la vista
  aplicarFiltros();
}