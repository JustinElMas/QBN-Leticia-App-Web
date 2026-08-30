// directoryService.js

function parseCSV(csvText) {
  const lines = csvText.trim().split('\n');
  if (lines.length === 0) return [];

  // Parsear encabezados
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));

  const result = [];
  for (let i = 1; i < lines.length; i++) {
    // Regex para respetar comas dentro de comillas
    const row = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
    if (row.length === 0) continue;

    const rowObj = {};
    headers.forEach((header, index) => {
      let val = row[index] ? row[index].trim() : '';
      val = val.replace(/^"|"$/g, '');
      rowObj[header] = val;
    });

    // Mapear los nombres de columna del Excel a un formato estandarizado
    result.push({
      codigo: rowObj['Código Artículo'] || '',
      sku: rowObj['SKU'] || '',
      nombre: rowObj['NOMBRE DEL PRODUCTO'] || 'Producto sin nombre',
      precioAntes: rowObj['Precio_Antes'] || '',
      precioFinal: rowObj['Precio_Final'] || '0',
      descuento: rowObj['Descuento'] || '',
      disponible: rowObj['Disponible'] || '0',
      imagen: rowObj['URL IMAGEN'] || 'https://via.placeholder.com/300?text=Sin+Imagen',
      negocio: rowObj['Negocio'] || 'Negocio Local',
      categoria: rowObj['Categoria'] || 'General',
      whatsapp: rowObj['WhatsApp'] || '573000000000', // Columna sugerida o default
      linkNegocio: rowObj['LinkNegocio'] || '#'        // Enlace a la landing del negocio
    });
  }

  return result;
}

export async function fetchProductsData(csvUrl) {
  try {
    const response = await fetch(csvUrl);
    if (!response.ok) throw new Error('Error al conectar con Google Sheets');
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error('Error cargando los productos:', error);
    return [];
  }
}