import { icon, escapeHtml } from "../utils/helpers.js";

export function CategoryCard(categoria, totalNegocios = 0) {
  return `
    <a href="/directorio?categoria=${categoria.id}" data-link class="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md">
      <!-- Badge de Conteo -->
      <span class="absolute right-4 top-4 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600">
        ${totalNegocios} ${totalNegocios === 1 ? 'negocio' : 'negocios'}
      </span>

      <div>
        <!-- Emoji -->
        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl select-none" style="background-color: ${categoria.bgColor || '#f1f5f9'};">
          ${categoria.icon || '🏪'}
        </div>

        <!-- Título -->
        <h3 class="text-lg font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
          ${categoria.nombre}
        </h3>
      </div>

      <!-- Botón -->
      <div class="mt-5 flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
        <span>Explorar</span>
        <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </div>
    </a>
  `;
}
