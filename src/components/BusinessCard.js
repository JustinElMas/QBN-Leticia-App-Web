import { icon, escapeHtml } from "../utils/helpers.js";

export function BusinessCard(business) {
  return `
    <article class="group overflow-hidden rounded-3xl border border-slate-200 bg-white card-shadow transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <a href="/negocio/${business.slug}" data-link class="block">
        <div class="relative h-48 overflow-hidden">
          <img src="${business.portada}" alt="${escapeHtml(business.nombre)}" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent"></div>
          ${business.destacado ? `<span class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-slate-900 shadow">${icon("star",13,"inline-block fill-current")} Destacado</span>` : ""}
          <span class="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800">${escapeHtml(business.categoria)}</span>
        </div>
        <div class="p-5">
          <div class="flex items-start gap-3">
            <img src="${business.logo}" alt="" class="h-12 w-12 rounded-2xl object-cover ring-4 ring-white shadow-md" />
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-1.5">
                <h3 class="truncate text-lg font-black text-slate-950">${escapeHtml(business.nombre)}</h3>
                ${business.verificado ? `<span class="text-indigo-600">${icon("badge-check",17)}</span>` : ""}
              </div>
              <div class="mt-1 flex items-center gap-2 text-sm text-slate-500">
                <span class="inline-flex items-center gap-1">${icon("star",14,"fill-amber-400 text-amber-400")} ${business.rating}</span>
                <span>·</span>
                <span>${escapeHtml(business.ubicacion.ciudad)}</span>
              </div>
            </div>
          </div>
          <p class="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">${escapeHtml(business.descripcion)}</p>
          <div class="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
            <span class="text-sm font-bold text-indigo-600">Ver mini-página</span>
            <span class="grid h-9 w-9 place-items-center rounded-full bg-slate-50 text-slate-600 transition group-hover:bg-indigo-50 group-hover:text-indigo-600">${icon("arrow-up-right",17)}</span>
          </div>
        </div>
      </a>
    </article>`;
}