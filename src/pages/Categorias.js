import { categorias } from "../data/categorias.js";
import { negocios } from "../data/negocios.js";
import { CategoryCard } from "../components/CategoryCard.js";

export function Categorias() {
  return `
    <section class="bg-slate-50">
      <div class="mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 lg:px-8">
        <span class="text-xs font-black uppercase tracking-widest text-indigo-600">Explora</span>
        <h1 class="mt-2 text-4xl font-black tracking-tight text-slate-950">Categorías</h1>
        <p class="mt-3 max-w-2xl text-slate-500">Encuentra rápidamente el tipo de negocio o servicio que estás buscando.</p>
      </div>
    </section>
    <section class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">${categorias.map(c => CategoryCard(c, negocios.filter(n=>n.categoriaId===c.id).length)).join("")}</div>
    </section>`;
}

