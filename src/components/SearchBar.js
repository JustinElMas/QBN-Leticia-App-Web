import { icon } from "../utils/helpers.js";

export function SearchBar({ value = "" } = {}) {
  return `
    <form id="search-form" class="mx-auto flex max-w-3xl flex-col gap-2 rounded-2xl border border-white/70 bg-white p-2 shadow-2xl shadow-indigo-950/10 sm:flex-row">
      <div class="flex min-w-0 flex-1 items-center gap-3 px-3">
        ${icon("search",20,"shrink-0 text-slate-400")}
        <input id="search-input" value="${value}" autocomplete="off" placeholder="Busca restaurantes, tiendas, tecnología..." class="h-12 w-full bg-transparent text-sm font-medium outline-none placeholder:text-slate-400" />
      </div>
      <button class="h-12 rounded-xl bg-slate-950 px-6 text-sm font-black text-white transition hover:bg-indigo-700">Buscar</button>
    </form>`;
}