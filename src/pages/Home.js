import { negocios } from "../data/negocios.js";
import { categorias } from "../data/categorias.js";
// 1. Importamos las promociones demo locales con un alias para evitar conflictos
import { promociones as promocionesDemo } from "../data/promociones.js"; 
import { BusinessCard } from "../components/BusinessCard.js";
import { CategoryCard } from "../components/CategoryCard.js";
import { ProductPromoCard } from "../components/ProductPromoCard.js";
import { icon } from "../utils/helpers.js";

// Mantenemos la firma de la función igual por si tu enrutador la llama pasando argumentos
export function Home(productos = []) {
  const destacados = negocios.filter(n => n.destacado);

  const emojisIzquierda = ['👨‍🔧', '👩‍🍳', '👷‍♂️', '👨‍🌾', '💇‍♀️', '👨‍🎨', '👨‍⚕️'];
  const emojisDerecha = ['👩‍💻', '👨‍💼', '👩‍🚀', '👨‍🏫', '🕵️‍♂️', '🦸‍♀️', '👩‍🔬'];
  
  const emojiRandomIzq = emojisIzquierda[Math.floor(Math.random() * emojisIzquierda.length)];
  const emojiRandomDer = emojisDerecha[Math.floor(Math.random() * emojisDerecha.length)];

  // 2. FORZAMOS el uso de los demos locales para la sección del carrusel en la Home
  const productosLimitados = promocionesDemo.slice(0, 15);

  return `
    <section class="relative w-full min-h-[90vh] bg-[#2563EB] overflow-hidden flex flex-col items-center justify-center pt-20 pb-16">
      <div class="absolute top-0 left-0 w-48 sm:w-64 md:w-80 text-white transform -translate-x-10 -translate-y-10 opacity-90">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M39.9,-51.7C53.7,-39.8,68.4,-29.6,73,-15.7C77.7,-1.8,72.2,15.7,62.2,30.3C52.1,44.9,37.5,56.5,21.2,63.1C5,69.7,-12.9,71.2,-28.9,65.3C-44.9,59.3,-59,45.8,-66.1,29.3C-73.2,12.7,-73.3,-6.9,-65.7,-23.5C-58.1,-40.1,-42.8,-53.8,-27.6,-61C-12.3,-68.2,2.8,-68.9,16.5,-64.1C30.2,-59.4,42.5,-53.1,39.9,-51.7Z" transform="translate(100 100) scale(1.2)" />
        </svg>
      </div>

      <div class="absolute top-0 right-0 w-56 sm:w-72 md:w-96 text-white transform translate-x-10 -translate-y-16 opacity-90">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M51.8,-66.1C65.5,-55.8,73.8,-37.7,77.7,-18.8C81.6,0.1,81.1,19.9,71.5,35.1C61.9,50.3,43.2,60.9,23.3,66.6C3.4,72.3,-17.7,73.1,-34.5,65.5C-51.3,57.9,-63.9,41.9,-70.6,23.6C-77.3,5.4,-78.2,-15,-70.2,-31.2C-62.1,-47.4,-45.1,-59.4,-28.6,-66.5C-12.1,-73.6,3.9,-75.7,21.5,-72.1C39.1,-68.5,58.3,-59.3,51.8,-66.1Z" transform="translate(100 100) scale(1.1)" />
        </svg>
      </div>

      <div class="relative z-20 w-full max-w-5xl px-4 text-center mt-8">
        <h1 class="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-7xl leading-[1.2] mb-6">
          Encuentra los mejores<br>
          productos y <span id="typewriter-text"></span><span class="cursor-blink"></span>
        </h1>
        
        <p class="mx-auto mt-8 max-w-2xl text-lg text-white/90 sm:text-xl font-light">
          Encuentra las mejores tiendas, restaurantes y servicios locales en<br>Leticia.<br>
          Navega, explora y conoce más.
        </p>
        
        <div class="mt-10 flex flex-wrap items-center justify-center gap-5">
          <a href="/directorio" data-link class="rounded-[2rem] bg-white px-10 py-3.5 text-base font-semibold text-[#2563EB] shadow-lg transition-transform hover:scale-105">
            Ver Negocios
          </a>
          <a href="https://wa.me/573138958098?text=Hola,%20quiero%20registrar%20mi%20negocio%20en%20el%20directorio" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="rounded-[2rem] border-[1.5px] border-white bg-transparent px-10 py-3.5 text-base font-semibold text-white transition-transform hover:scale-105 hover:bg-white/10 text-center inline-block">
            Registrarme
          </a>
        </div>
      </div>

      <div class="absolute -bottom-4 left-0 sm:left-10 z-10 reveal-up delay-200 pointer-events-none">
        <div class="hero-emoji transform rotate-12 origin-bottom-left transition-transform duration-700 hover:rotate-6 text-5xl">
          ${emojiRandomIzq}
        </div>
      </div>
      
      <div class="absolute -bottom-4 right-0 sm:right-10 z-10 reveal-up delay-400 pointer-events-none">
        <div class="hero-emoji transform -rotate-12 origin-bottom-right transition-transform duration-700 hover:-rotate-6 text-5xl">
          ${emojiRandomDer}
        </div>
      </div>
    </section>

    <section class="bg-slate-50">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between gap-5 border-b border-gray-200 pb-5">
          <div>
            <span class="text-xs font-black uppercase tracking-widest text-[#2563EB]">Destacados</span>
            <h2 class="mt-2 text-3xl font-black tracking-tight text-slate-900">Negocios que vale la pena conocer</h2>
          </div>
          <a href="/directorio" data-link class="hidden items-center gap-2 text-sm font-bold text-[#2563EB] sm:inline-flex hover:underline">
            Ver directorio ${icon("arrow-right", 16)}
          </a>
        </div>
        <div class="mt-8 grid gap-6 lg:grid-cols-2">
          ${destacados.map(BusinessCard).join("")}
        </div>
      </div>
    </section>

    <section class="bg-amber-50/60 border-y border-amber-100/80 py-16 relative overflow-hidden">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-5 border-b border-amber-200/80 pb-5">
          <div>
            <span class="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-red-600 bg-red-100/80 px-3 py-1 rounded-full">
              ⚡ Ofertas por tiempo limitado
            </span>
            <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900">
              🔥 Productos en Descuentos y Promociones
            </h2>
          </div>
          
          <div class="flex items-center gap-3">
            <a href="/descuentos" data-link class="inline-flex items-center justify-center gap-2 bg-[blue] hover:bg-[green] text-white text-sm font-bold py-2.5 px-5 rounded-xl shadow-md transition-all">
              Ver Más Descuentos ➔
            </a>

            <div class="hidden md:flex items-center gap-2">
              <button 
                onclick="document.getElementById('promo-carousel').scrollBy({left: -320, behavior: 'smooth'})"
                class="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                aria-label="Anterior"
              >
                ❮
              </button>
              <button 
                onclick="document.getElementById('promo-carousel').scrollBy({left: 320, behavior: 'smooth'})"
                class="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                aria-label="Siguiente"
              >
                ❯
              </button>
            </div>
          </div>
        </div>

        <div id="promo-carousel" class="mt-8 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scrollbar-none scroll-smooth">
          ${productosLimitados.length > 0 
            ? productosLimitados.map(prod => ProductPromoCard(prod)).join("") 
            : '<p class="text-slate-500 text-sm">No hay promociones disponibles por el momento.</p>'
          }
        </div>

      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between gap-5 border-b border-gray-200 pb-5">
        <div>
          <span class="text-xs font-black uppercase tracking-widest text-[#2563EB]">Explora</span>
          <h2 class="mt-2 text-3xl font-black tracking-tight text-slate-900">Categorías populares</h2>
        </div>
        <a href="/categorias" data-link class="hidden items-center gap-2 text-sm font-bold text-[#2563EB] sm:inline-flex hover:underline">
          Ver todas ${icon("arrow-right", 16)}
        </a>
      </div>
      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        ${categorias.map(c => CategoryCard(c, negocios.filter(n => n.categoriaId === c.id).length)).join("")}
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      <div>
        <div class="text-center mb-6">
          <span class="text-xs font-black uppercase tracking-widest text-indigo-600">Ecosistema</span>
          <h2 class="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">Marcas que confían en nosotros</h2>
        </div>

        <div class="relative overflow-hidden py-2">
          <div class="flex items-center gap-6 overflow-x-auto no-scrollbar py-3 px-2 opacity-75 grayscale transition-all hover:grayscale-0 justify-start sm:justify-center">
            <div class="flex shrink-0 items-center gap-2 rounded-2xl border border-slate-200/80 bg-white px-6 py-3.5 shadow-sm font-bold text-slate-800 text-sm">
              <span>🏢</span> Selva TIC
            </div>
            <div class="flex shrink-0 items-center gap-2 rounded-2xl border border-slate-200/80 bg-white px-6 py-3.5 shadow-sm font-bold text-slate-800 text-sm">
              <span>⚡</span> Netlify
            </div>
            <div class="flex shrink-0 items-center gap-2 rounded-2xl border border-slate-200/80 bg-white px-6 py-3.5 shadow-sm font-bold text-slate-800 text-sm">
              <span>🌐</span> Name cheap
            </div>
            <div class="flex shrink-0 items-center gap-2 rounded-2xl border border-slate-200/80 bg-white px-6 py-3.5 shadow-sm font-bold text-slate-800 text-sm">
              <span>🚀</span> Programadores del Amazonas
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <div class="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl">
          <div>
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-600">
              🏪
            </div>
            <h3 class="mt-5 text-xl font-black text-slate-900">Registrar un negocio</h3>
            <p class="mt-2 text-xs text-slate-500 leading-relaxed">
              Suma tu local o servicio al directorio y empieza a captar nuevos clientes directo en tu WhatsApp.
            </p>
          </div>
          <a 
            href="https://wa.me/573138958098?text=Hola,%20quiero%20registrar%20mi%20negocio%20en%20el%20directorio" 
            target="_blank" 
            rel="noopener noreferrer"
            class="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3.5 text-xs font-bold text-white shadow-md shadow-emerald-500/20 transition-all hover:bg-emerald-600 active:scale-95"
          >
            💬 Registrar mi local
          </a>
        </div>

        <div class="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl">
          <div>
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-2xl text-indigo-600">
              💻
            </div>
            <h3 class="mt-5 text-xl font-black text-slate-900">Desarrollo de Software</h3>
            <p class="mt-2 text-xs text-slate-500 leading-relaxed">
              ¿Buscas una app web, software a medida o integrarte a nuestro equipo dev? Hablemos de tecnología.
            </p>
          </div>
          <a 
            href="https://wa.me/573138958098?text=Hola,%20me%20interesa%20el%20servicio%20de%20desarrollo%20de%20software" 
            target="_blank" 
            rel="noopener noreferrer"
            class="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3.5 text-xs font-bold text-white shadow-md shadow-indigo-600/20 transition-all hover:bg-indigo-700 active:scale-95"
          >
            🚀 Cotizar / Unirme
          </a>
        </div>

        <div class="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-xl">
          <div>
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl text-slate-700">
              🎧
            </div>
            <h3 class="mt-5 text-xl font-black text-slate-900">Contacto y Soporte</h3>
            <p class="mt-2 text-xs text-slate-500 leading-relaxed">
              ¿Tienes dudas sobre la plataforma o necesitas actualizar datos de tu tienda? Te ayudamos de inmediato.
            </p>
          </div>
          <a 
            href="https://wa.me/573138958098?text=Hola,%20necesito%20soporte%20o%20tengo%20una%20consulta" 
            target="_blank" 
            rel="noopener noreferrer"
            class="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-slate-800 active:scale-95"
          >
            📞 Hablar con Soporte
          </a>
        </div>
      </div>
    </section>
  `;
}