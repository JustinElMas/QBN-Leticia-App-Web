export const escapeHtml = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));

export const icon = (name, size = 18, cls = "") =>
  `<i data-lucide="${name}" width="${size}" height="${size}" class="${cls}"></i>`;

export const getBusinessBySlug = (businesses, slug) =>
  businesses.find((business) => business.slug === slug);

export const whatsappUrl = (number, message = "Hola, vi tu negocio en el directorio.") =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

