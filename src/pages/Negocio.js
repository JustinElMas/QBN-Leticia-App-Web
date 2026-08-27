import { negocios } from "../data/negocios.js";
import { getBusinessBySlug } from "../utils/helpers.js";
import { GeneralTemplate } from "../templates/GeneralTemplate.js";
import { RestauranteTemplate } from "../templates/RestauranteTemplate.js";
import { ProfesionalTemplate } from "../templates/ProfesionalTemplate.js";

export function Negocio(slug) {
  const business = getBusinessBySlug(negocios, slug);
  if (!business) return null;
  const templates = { general: GeneralTemplate, restaurante: RestauranteTemplate, profesional: ProfesionalTemplate };
  return templates[business.template]?.(business) || GeneralTemplate(business);
}