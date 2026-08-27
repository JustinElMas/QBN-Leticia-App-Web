import { icon } from "../utils/helpers.js";
export function NotFound() {
  return `<section class="mx-auto max-w-3xl px-4 py-28 text-center"><div class="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">${icon("map-pin-off",28)}</div><h1 class="mt-6 text-4xl font-black">Página no encontrada</h1><p class="mt-3 text-slate-500">El contenido que buscas no existe o fue movido.</p><a href="/" data-link class="mt-7 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white">Volver al inicio</a></section>`;
}