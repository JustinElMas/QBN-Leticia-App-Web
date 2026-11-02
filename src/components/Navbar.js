import { icon } from "../utils/helpers.js";

export function Navbar() {
  return `
    <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" data-link class="flex items-center gap-3">
          <span class="grid h-10 w-10 place-items-center rounded-2xl bg-blue-600 text-white shadow-lg">:D</span>
          <span class="text-lg font-black tracking-tight text-slate-950">QBN Leticia<span class="text-indigo-600">.com</span></span>
        </a>
        <nav class="hidden items-center gap-7 md:flex">
          <a href="/" data-link class="text-sm font-semibold text-slate-600 hover:text-slate-950">Inicio</a>
          <a href="/directorio" data-link class="text-sm font-semibold text-slate-600 hover:text-slate-950">Directorio</a>
          <a href="/categorias" data-link class="text-sm font-semibold text-slate-600 hover:text-slate-950">Categorías</a>
          <a href="#como-funciona" class="text-sm font-semibold text-slate-600 hover:text-slate-950">Cómo funciona</a>
        </nav>
        <div class="flex items-center gap-2">
          <a href="descuentos" class="hidden rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-950/10 hover:bg-indigo-700 sm:inline-flex">Ver ofertas</a>
     <button id="mobile-menu-btn" class="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-xl font-extrabold md:hidden">
  ☰
</button>
        </div>
      </div>
      <div id="mobile-menu" class="hidden border-t border-slate-200 bg-white px-4 py-4 md:hidden">
        <div class="flex flex-col gap-3">
          <a href="/" data-link class="rounded-xl px-3 py-2 font-semibold">Inicio</a>
          <a href="/directorio" data-link class="rounded-xl px-3 py-2 font-semibold">Directorio</a>
          <a href="/categorias" data-link class="rounded-xl px-3 py-2 font-semibold">Categorías</a>
        </div>
      </div>
    </header>`;
}


// 2. Función de inicialización (Aquí va la lógica de JavaScript)
export function initNavbar() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuBtn || !mobileMenu) return; // Salvaguarda por si el componente no está en el DOM

  menuBtn.addEventListener('click', () => {
    // Alternar visibilidad del menú
    const isClosed = mobileMenu.classList.toggle('hidden');
    
    // Cambiar el icono entre hamburguesa y X según el estado
    menuBtn.textContent = isClosed ? '☰' : '✕';
  });
}