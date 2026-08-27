import { icon, escapeHtml, whatsappUrl } from "../utils/helpers.js";

export function GeneralTemplate(business) {
  return baseTemplate(business, "Sobre el negocio");
}

export function baseTemplate(business, aboutTitle = "Sobre nosotros") {
  return `
    <section class="bg-slate-50">
      <div class="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <a href="/directorio" data-link class="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-950">${icon("arrow-left",16)} Volver al directorio</a>
        <div class="mt-6 overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl">
          <div class="relative h-72 sm:h-96">
            <img src="${business.portada}" alt="${escapeHtml(business.nombre)}" class="h-full w-full object-cover opacity-80" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <div class="flex flex-col gap-5 sm:flex-row sm:items-end">
                <img src="${business.logo}" alt="" class="h-24 w-24 rounded-3xl object-cover ring-4 ring-white/90 shadow-2xl" />
                <div class="min-w-0 flex-1">
                  <div class="flex flex-wrap items-center gap-2">
                    <h1 class="text-3xl font-black text-white sm:text-5xl">${escapeHtml(business.nombre)}</h1>
                    ${business.verificado ? `<span class="inline-flex items-center gap-1 rounded-full bg-indigo-500 px-3 py-1 text-xs font-black text-white">${icon("badge-check",14)} Verificado</span>` : ""}
                  </div>
                  <div class="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-300"><span>${escapeHtml(business.categoria)}</span><span>·</span><span class="inline-flex items-center gap-1">${icon("star",14,"fill-amber-400 text-amber-400")} ${business.rating}</span><span>·</span><span>${escapeHtml(business.ubicacion.ciudad)}</span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-3 border-t border-white/10 bg-slate-950 p-5 sm:px-10">
            <a href="${whatsappUrl(business.contacto.whatsapp)}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-black text-white hover:bg-emerald-400">${icon("message-circle",18)} WhatsApp</a>
            <a href="tel:${business.contacto.telefono}" class="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-black text-white hover:bg-white/15">${icon("phone",17)} Llamar</a>
            <button data-share="${business.nombre}" class="share-btn inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-black text-white hover:bg-white/15">${icon("share-2",17)} Compartir</button>
          </div>
        </div>

        <div class="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          <main class="space-y-8">
            <section class="rounded-3xl border border-slate-200 bg-white p-6 card-shadow sm:p-8">
              <span class="text-xs font-black uppercase tracking-widest text-indigo-600">${aboutTitle}</span>
              <p class="mt-4 text-base leading-8 text-slate-600">${escapeHtml(business.descripcion)}</p>
            </section>
            <section class="rounded-3xl border border-slate-200 bg-white p-6 card-shadow sm:p-8">
              <h2 class="text-xl font-black text-slate-950">Servicios</h2>
              <div class="mt-5 grid gap-3 sm:grid-cols-2">${business.servicios.map(s => `<div class="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-bold text-slate-700">${icon("check-circle-2",18,"text-indigo-600")} ${escapeHtml(s)}</div>`).join("")}</div>
            </section>
            <section class="rounded-3xl border border-slate-200 bg-white p-6 card-shadow sm:p-8">
              <div class="flex items-center justify-between"><h2 class="text-xl font-black text-slate-950">Galería</h2><span class="text-sm text-slate-400">${business.galeria.length} fotos</span></div>
              <div class="mt-5 grid gap-3 sm:grid-cols-2">${business.galeria.map(img => `<img src="${img}" alt="" class="h-56 w-full rounded-2xl object-cover transition hover:scale-[1.01]" />`).join("")}</div>
            </section>
          </main>
          <aside class="space-y-5">
            <section class="rounded-3xl border border-slate-200 bg-white p-6 card-shadow">
              <h2 class="font-black text-slate-950">Contacto</h2>
              <div class="mt-5 space-y-4 text-sm">
                <div class="flex gap-3">${icon("map-pin",18,"mt-0.5 text-indigo-600 shrink-0")}<span class="text-slate-600">${escapeHtml(business.ubicacion.direccion)}, ${escapeHtml(business.ubicacion.ciudad)}</span></div>
                <div class="flex gap-3">${icon("phone",18,"mt-0.5 text-indigo-600 shrink-0")}<span class="text-slate-600">${escapeHtml(business.contacto.telefono)}</span></div>
                <div class="flex gap-3">${icon("mail",18,"mt-0.5 text-indigo-600 shrink-0")}<span class="break-all text-slate-600">${escapeHtml(business.contacto.email)}</span></div>
              </div>
            </section>
            <section class="rounded-3xl border border-slate-200 bg-white p-6 card-shadow">
              <h2 class="font-black text-slate-950">Horarios</h2>
              <div class="mt-4 space-y-2 text-sm">${Object.entries(business.horario).map(([day,time]) => `<div class="flex justify-between gap-4 border-b border-slate-100 py-2 last:border-0"><span class="capitalize text-slate-500">${day}</span><span class="text-right font-bold text-slate-700">${time}</span></div>`).join("")}</div>
            </section>
<section class="rounded-3xl border border-slate-200 bg-white p-6 card-shadow">
              <h2 class="font-black text-slate-950 mb-4">Ubicación</h2>
              ${business.ubicacion?.mapUrl ? `
                <div class="overflow-hidden rounded-2xl border border-slate-100 h-56 w-full bg-slate-50">
                  <iframe 
                    src="${business.ubicacion.mapUrl}" 
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Ubicación de ${escapeHtml(business.nombre)}">
                  </iframe>
                </div>
              ` : `
                <div class="mt-4 grid h-40 place-items-center rounded-2xl bg-slate-100 text-center text-sm text-slate-500">
                  ${icon("map", 25, "mx-auto mb-2 text-slate-400")}
                  Mapa próximamente<br>
                  <span class="text-xs">Preparado para integrar mapas</span>
                </div>
              `}
            </section>
          </aside>
        </div>
      </div>
    </section>`;
}