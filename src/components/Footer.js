export function Footer() {
  return `
    <footer class="mt-20 border-t border-slate-200 bg-slate-950 text-slate-300">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div class="text-xl font-black text-white">:D QBN Leticia<span class="text-indigo-400">.com</span></div>
          <p class="mt-3 max-w-sm text-sm leading-6 text-slate-400">Una nueva forma de descubrir negocios y conocerlos desde internet.</p>
        </div>
        <div>
          <h3 class="font-bold text-white">Explora</h3>
          <div class="mt-4 space-y-2 text-sm">
            <a href="/directorio" data-link class="block hover:text-white">Directorio</a>
            <a href="/categorias" data-link class="block hover:text-white">Categorías</a>
          </div>
        </div>
        <div>
          <h3 class="font-bold text-white">Para negocios</h3>
          <p class="mt-4 text-sm leading-6 text-slate-400">Queremos trabajar juntos para llevar a Leticia en el próximo nivel en tecnología. Contactanos Hoy</p>
        </div>
      </div>
      <div class="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">MVP · Desarrollado por Selva TIC</div>
    </footer>`;
}