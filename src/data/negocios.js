export const negocios = [
  {
    id: 1,
    slug: "ch-repuestos",
    nombre: "CH Repuestos",
    categoria: "Repuestos Para Motos",
    categoriaId: "repuestos",
    template: "general",
    verificado: true,
    destacado: true,
    rating: 4.8,
    logo: "/media/negocios_media/HC_Repuestos/CH_Repuestos.jpeg",
    portada: "/media/negocios_media/HC_Repuestos/CH_Productos.jpeg",
    descripcion: "Venta de repuestos, lubricantes, aceites y llantas de alta calidad para motocicletas en Leticia.",
    servicios: ["Repuestos Para Motos", "Aceite para motos", "Llantas Para Motos"],
    productos: [
      { name: "Repuestos Para Motos", price: "Disponible", image: "/media/negocios_media/HC_Repuestos/CH_Productos.jpeg", hasDelivery: true },
      { name: "Aceite para motos", price: "Disponible", image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/fd1b7555325745.56097b47146b1.jpg", hasDelivery: true },
      { name: "Llantas Para Motos", price: "Disponible", image: "/media/negocios_media/HC_Repuestos/Llantas.jpeg", hasDelivery: true }
    ],
    galeria: [
      "/media/negocios_media/HC_Repuestos/CH_Repuestos.jpeg",
      "/media/negocios_media/HC_Repuestos/CH_Productos.jpeg",
      "/media/negocios_media/HC_Repuestos/Llantas.jpeg"
    ],
    contacto: {
      telefono: "315 343 6808",
      whatsapp: "573153436808",
      email: "chrepuestos98@gmail.com"
    },
    ubicacion: {
      ciudad: "Leticia",
      departamento: "Amazonas",
      direccion: "Calle 9 - 08, Barrio Centro Diagonal Migracion Leticia, Amazonas",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d248.8595763530242!2d-69.94169431685548!3d-4.214219275865953!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1786910772148!5m2!1ses!2sco"
    },
    horario: {
      Abrimos: "Lunes a sábado: 7:30 am - 12:00 am | 2:00 pm - 6:15 pm",
      festivos: "Domingos y festivos: 8:30 am - 12:00 am"
    },
    redes: {
      facebook: "",
      youtube: "",
      tiktok: "",
      instagram: "",
      website: ""
    }
  },
  {
    id: 2,
    slug: "barberia-stylers",
    nombre: "Barbería Stylers",
    categoria: "Belleza y Cuidado",
    categoriaId: "belleza",
    template: "profesional",
    verificado: true,
    destacado: false,
    rating: 4.7,
    logo: "https://www.meridachevere.com/wp-content/uploads/2014/05/13-Juancho%C2%B4s-Barberia.png",
    portada: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1400&q=80",
    descripcion: "Cortes clásicos y modernos, perfilado de barba y productos especializados para el cuidado masculino.",
    servicios: ["Corte Clásico", "Arreglo de Barba", "Productos para Barba"],
    productos: [
      { name: "Corte Clásico", price: "$20.000", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60", hasDelivery: false },
      { name: "Arreglo de Barba", price: "$15.000", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60", hasDelivery: false },
      { name: "Productos para Barba (Cera)", price: "$35.000", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60", hasDelivery: true }
    ],
    galeria: [
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80"
    ],
    contacto: {
      telefono: "3109876543",
      whatsapp: "573109876543",
      email: ""
    },
    ubicacion: {
      ciudad: "Leticia",
      departamento: "Amazonas",
      direccion: "Barrio Centro, Leticia",
      mapUrl: ""
    },
    horario: {
      Abrimos: "Lunes a sábado: 9:00 AM - 7:00 PM",
      festivos: "Cerrado"
    },
    redes: {
      facebook: "",
      youtube: "",
      tiktok: "",
      instagram: "",
      website: ""
    }
  },
  {
    id: 3,
    slug: "pave-express-zolly-y-leo",
    nombre: "Pavé Express Zolly y Leo",
    categoria: "Postres",
    categoriaId: "postres",
    template: "restaurante",
    verificado: true,
    destacado: false,
    rating: 4.9,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9w3mLgGH_RB6ZeCPDPatSK6D1vccxwE8fj2WqrekOzpwWYCilK49tnJrm&s=10",
    portada: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1400&q=80",
    descripcion: "Helados artesanales con frutas exóticas de la selva, copas especiales de copoazú y postres únicos.",
    servicios: ["Copa Copoazú", "Litro de Helado Artesanal"],
    productos: [
      { name: "Copa Copoazú", price: "$18.000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp9T085F5ckXGBVLh-_8F1Y_nLzRR64x4enQ&s", hasDelivery: true },
      { name: "Litro de Helado Artesanal", price: "$30.000", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60", hasDelivery: true }
    ],
    galeria: [
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=80"
    ],
    contacto: {
      telefono: "3204567890",
      whatsapp: "573204567890",
      email: ""
    },
    ubicacion: {
      ciudad: "Leticia",
      departamento: "Amazonas",
      direccion: "Leticia, Amazonas",
      mapUrl: ""
    },
    horario: {
      Abrimos: "Lunes a domingo: 12:00 PM - 9:00 PM"
    },
    redes: {
      facebook: "",
      youtube: "",
      tiktok: "",
      instagram: "",
      website: ""
    }
  },
  {
    id: 4,
    slug: "tienda-la-esquina",
    nombre: "Tienda La Esquina",
    categoria: "Tiendas",
    categoriaId: "tiendas",
    template: "general",
    verificado: false,
    destacado: false,
    rating: 4.5,
    logo: "https://abarrotero.com/wp-content/uploads/2020/07/tienditas_cerrar_abarrotero.png",
    portada: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1400&q=80",
    descripcion: "Víveres, abarrotes y artículos esenciales del hogar con entrega rápida.",
    servicios: ["Víveres", "Abarrotes", "Lácteos", "Domicilios"],
    productos: [
      { name: "Azucar Kilo", price: "$5.000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6fbz2Q9SlUllBxMllLcACPgcZeDG7iXiWuUs_5MKHi4FxLBTi-KNtyGbT&s=10", hasDelivery: true },
      { name: "Litro de Leche", price: "$10.000", image: "https://supermu.com/cdn/shop/products/supermercados_la_vaquita_supervaquita_leche_alqueria_1_litro_ligth_und_leches_800x.jpg?v=1747901990", hasDelivery: true }
    ],
    galeria: [
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=900&q=80"
    ],
    contacto: {
      telefono: "3204567890",
      whatsapp: "573204567890",
      email: ""
    },
    ubicacion: {
      ciudad: "Leticia",
      departamento: "Amazonas",
      direccion: "Leticia, Amazonas",
      mapUrl: ""
    },
    horario: {
      Abrimos: "Lunes a domingo: 6:00 AM - 9:00 PM"
    },
    redes: {
      facebook: "",
      youtube: "",
      tiktok: "",
      instagram: "",
      website: ""
    }
  },
  {
    id: 5,
    slug: "selva-tic",
    nombre: "Selva TIC",
    categoria: "Tecnología",
    categoriaId: "tecnologia",
    template: "general",
    verificado: true,
    destacado: true,
    rating: 4.9,
    logo: "/media/selva_tic.jpeg",
    portada: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    descripcion: "Soluciones digitales para empresas, emprendimientos y personas. Impresiones, fotocopias, diseño web, automatizaciones y capacitaciones.",
    servicios: ["Fotocopias", "Impresiones", "Diseño web", "Diseño gráfico", "Automatización", "Capacitaciones"],
    productos: [
      { name: "Fotocopia", price: "$100", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwfDKig7fTDtVa4rBe_jIgoIcWxIwfpPIfNUwi8feY7qKP_aJsRyH1RHSM&s=10", hasDelivery: true },
      { name: "Impresiones", price: "$500", image: "https://imgv2-2-f.scribdassets.com/img/document/785766516/original/f295a9824d/1?v=1", hasDelivery: true }
    ],
    galeria: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"
    ],
    contacto: {
      telefono: "313 8958098",
      whatsapp: "573138958098",
      email: "hola@selvatic.example"
    },
    ubicacion: {
      ciudad: "Leticia",
      departamento: "Amazonas",
      direccion: "Centro, Leticia",
      mapUrl: ""
    },
    horario: {
      Abrimos: "Lunes a sábado: 8:00 AM - 6:00 PM",
      festivos: "Cerrado"
    },
    redes: {
      instagram: "#",
      facebook: "#",
      tiktok: "#",
      youtube: "",
      website: ""
    }
  },
  {
    id: 6,
    slug: "pizzeria-raul",
    nombre: "Pizzeria Raul",
    categoria: "Pizzerias y Restaurantes",
    categoriaId: "restaurantes",
    template: "restaurante",
    verificado: true,
    destacado: false,
    rating: 4.6,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Ir3jFjkzBq4Ia895DPR_LSVTinDyZUd2Pz_kHp5xiHtfUtwBDcZp3Wot&s=10",
    portada: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1400&q=80",
    descripcion: "Pizzas recién horneadas artesanales en presentaciones personales y familiares con servicio a domicilio.",
    servicios: ["Pizzas Personales", "Pizzas Familiares", "Domicilios"],
    productos: [
      { name: "Personal", price: "$10.000", image: "https://panpaya.com.co/storage/products/4/06295f62885c4107a71b0111d4575290.jpg", hasDelivery: true },
      { name: "Familiar", price: "$35.000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqrApGC6fFKlOB1oEnIKBCSP4xOBts-hh5Plu85RV4NGsZV-xZ2Ap6W8A&s=10", hasDelivery: true }
    ],
    galeria: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80"
    ],
    contacto: {
      telefono: "312 554 5693",
      whatsapp: "573125545693",
      email: ""
    },
    ubicacion: {
      ciudad: "Leticia",
      departamento: "Amazonas",
      direccion: "Leticia, Amazonas",
      mapUrl: ""
    },
    horario: {
      Abrimos: "Lunes a domingo: 5:00 PM - 11:00 PM"
    },
    redes: {
      facebook: "",
      youtube: "",
      tiktok: "",
      instagram: "",
      website: ""
    }
  },
  {
    id: 7,
    slug: "pinateria-manantial-de-colores",
    nombre: "Piñatería Manantial De Colores",
    categoria: "Detalles y Piñatería",
    categoriaId: "detalles",
    template: "general",
    verificado: true,
    destacado: true,
    rating: 4.8,
    logo: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/542728468_122110131764982808_4383054687675358333_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1600&ctp=s1600x1600&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mnexMegG-bgQ7kNvwEkxPqx&_nc_oc=AdrhSVk42ADxUgKEpUQHEt_rxqSSlch_kDG-UU3NRwRNG00uplXsDAbQhGz8y5At8Gs&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=x25IGA5FM5eXPY6h9PROXg&_nc_ss=7b289&oh=00_AQEi08EmHYdRW033h8qPSDtvmSRvEzhIOs4TZ6xuGfxfzQ&oe=6A96F6E4",
    portada: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn8Pdj3KgfIhYyKARJMeq4cqsX5FdH5_LKp8pt7aNEoPt1X2WoTCSY5qhvL8A415HaQ8O2amYadIAVfrF_9-MhR-MtYQRttLG8BAujXfmtUIL18wKavdalQJ6b-RsV1QbVf2BWvGLIHfGVu=s1360-w1360-h1020-rw",
    descripcion: "Especialistas en decoraciones de cumpleaños, arreglos con globos y detalles personalizados para toda ocasión especial.",
    servicios: ["Decoraciones Cumpleaños", "Detalles para toda ocasión", "Arreglo de Globos"],
    productos: [
      { name: "Decoraciones Cumpleaños", price: "A convenir", image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn8Pdj3KgfIhYyKARJMeq4cqsX5FdH5_LKp8pt7aNEoPt1X2WoTCSY5qhvL8A415HaQ8O2amYadIAVfrF_9-MhR-MtYQRttLG8BAujXfmtUIL18wKavdalQJ6b-RsV1QbVf2BWvGLIHfGVu=s1360-w1360-h1020-rw", hasDelivery: true },
      { name: "Detalles para toda ocasión", price: "A Convenir", image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkXx0geny05m-y7ZBC9WZmZAgbp5BKqKpgTlntO5jar_ddjVbgtzWAD0Jv3VS0r9FU10zESpNs495kBYZ9QHSQi797U2Y2mvGSP5CbCwzSKE_CDYa7JSqpWZPDc7Cir5c58_fjonPKJS68=s1360-w1360-h1020-rw", hasDelivery: true },
      { name: "Arreglo de Globos", price: "A Convenir", image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmDbUQGn37DzU23Ajyy4dRn1zxzZXHvgau9lClejrEMOVMXXspIGtLZO8wYFJQShAN-IQewvVFBmMjTflTHYy4WA4MxiFSkp-L2bICnpNeQpEYJnJiO4L0T1ia4F0-VHS1kwGRAJVQBZpzP=s1360-w1360-h1020-rw", hasDelivery: true }
    ],
    galeria: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn8Pdj3KgfIhYyKARJMeq4cqsX5FdH5_LKp8pt7aNEoPt1X2WoTCSY5qhvL8A415HaQ8O2amYadIAVfrF_9-MhR-MtYQRttLG8BAujXfmtUIL18wKavdalQJ6b-RsV1QbVf2BWvGLIHfGVu=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmuokA7NMjZ4XrKEXbQb3yVffLQoiqUjPZk3iHitKZDcbcT0CMMwAbV_QJE_Yh4RCFhsfU4yXibikQ6IAeA0krvkTTUIQuOV7W7o7K-_A0EEIjgTRodZcVuHX4iDy4iQ4sxlHTKr8s84qyi=s1360-w1360-h1020-rw",
      "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/586948217_122128233260982808_1755146983839524826_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=auOgJ4x9zIgQ7kNvwGqf_G8&_nc_oc=Adp-cmVhzpdRMtECkeEa9w0XJwLYGZCrRCKawOCl56GIbii_G8tbxp_Rvt_ZGxkr4Ag&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=mjH14rGWpMMGE3ryx5c69Q&_nc_ss=7b289&oh=00_AQGcADhzSf5nhIBr6nQHB_pXj58TSBLpOuN7C4d3Qm-JbQ&oe=6A96D462",
      "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/546719420_122112873140982808_6322804073300130693_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Mc4FvsnWV6UQ7kNvwFLx8N1&_nc_oc=AdrYxxCu3GyFLHATfkiKCm7SawGyZ040mLT292vSvXaEN-QljCCR8pxbjQOE1RmUzgU&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=Q-_JTGFqY6u_lHz022Mf8A&_nc_ss=7b289&oh=00_AQGCdCLhTmrCgcIAF-OOeXAitiqfFDCJC-JRiv-AfbEJ8A&oe=6A96EBA3",
      "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/547453956_122112685874982808_5207508074324095816_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=W5SQfu56cCgQ7kNvwEh6Waz&_nc_oc=AdoePKbjzmCSoWjI9wWb2JYzTQzfmWYkZVt97YovGjo8FnWtQwrPiZqzcGLs1fBC968&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=qfGX2p0dwIWfeh63XUfIkw&_nc_ss=7b289&oh=00_AQGLDjs7C6_xDjpkKdzwT7eIvfIKnF-9vahgiLKxr7qISg&oe=6A96DFB0",
      "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/539827188_122107079618982808_2622675900669059520_n.jpg?stp=dst-jpg_tt6&cstp=mx1596x1126&ctp=s1596x1126&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LOyjD6Xbg78Q7kNvwGO7z7X&_nc_oc=AdqGmqx8TRJfidPGfwq2iKRIIfKJkk1stsmeFWTOEtrhGQavDKJebJ-4mCLBYlt4cjU&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=8GWgAS0UPRhkrkg2GNtW0g&_nc_ss=7b289&oh=00_AQFVkszggQ8sYmorlhHlV60wh__sjFrLc5suCXMLXV_xuw&oe=6A96CFFD",
      "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/545856530_122112685550982808_4311681541382002734_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=k2wQqGB0QEsQ7kNvwEZy_3D&_nc_oc=AdoG3SisjWSsc01OawbeKhBZzkF8joI7K4Z3XvFof5rdKwn2XV6KYKikPCF0aaBb9ow&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=j9WSfHsKHRUIWyioTjEg1Q&_nc_ss=7b289&oh=00_AQEbU269ZJMM5pKrM27sDre5MTZyroO75SrMCfWWkiAofQ&oe=6A96DEAC",
      "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/540362039_122107096898982808_3025486829337640407_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x1600&ctp=s1200x1600&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=b8cEJivKv8MQ7kNvwEiF9cv&_nc_oc=AdqGQb3lGQqtuhWhxgNDsh7RGk3dQ-yBAa2sclAP-PGJXeNek4XIoso4CkKrPmEFC4k&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=nvwze-oBwzJwIIR1sfL28g&_nc_ss=7b289&oh=00_AQGK7TsLvJptEo7GfqjME4Xc7vvkSB5HbpfaCx_8Xc4nbg&oe=6A96D6C5",
      "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/540434023_122107106636982808_7796719167669572421_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x1599&ctp=s1200x1599&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xptjdRmSkKsQ7kNvwE9U1Uu&_nc_oc=AdqUSPVScFJfGzkTZ-q2FIWnHDbuCk03f5T0ia16aYyfJnKssncvKTjqeiA401RPCX4&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=e6mB01RAxdOLIXnjGA9LkQ&_nc_ss=7b289&oh=00_AQENr9Xv1JOkhNyw0eMYFTQ1NqyPIO5g7kI9uHY4Xc_SuQ&oe=6A96F7B9",
      "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/539888663_122107105376982808_5275678814712563098_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1344&ctp=s1600x1344&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kn6oIbprlSYQ7kNvwFytOgn&_nc_oc=AdpNXMkJLXevGjEqf0pVJRoWoCamy2mVtFylvsKnm_qnHnxpFtbZJvqegz-xdRwP84o&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=KvAFqoY20cTNx2-L47FUWg&_nc_ss=7b289&oh=00_AQFNBtQs6XjgNjkJNYsHd9-xcKrwfnlrqWv_VbhV9Y5hlw&oe=6A96D415"
    ],
    contacto: {
      telefono: "321 9672281",
      whatsapp: "573219672281",
      email: ""
    },
    ubicacion: {
      ciudad: "Leticia",
      departamento: "Amazonas",
      direccion: "Leticia, Amazonas",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d248.8595763530242!2d-69.94169431685548!3d-4.214219275865953!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1786910772148!5m2!1ses!2sco"
    },
    horario: {
      Abrimos: "De Domingo a Domingo de 7 am a 7 pm"
    },
    redes: {
      facebook: "",
      youtube: "",
      tiktok: "https://www.tiktok.com/@manantialdecolores2319?_r=1&_t=ZS-98TuQfWvu6f",
      instagram: "",
      website: ""
    }
  },
  {
    id: 8,
    slug: "hospedaje-mirador-grecia",
    nombre: "Hospedaje Mirador Grecia",
    categoria: "Hoteles",
    categoriaId: "hoteles",
    template: "general",
    verificado: true,
    destacado: false,
    rating: 4.7,
    logo: "/media/negocios_media/hmg-2025.jpg",
    portada: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlxHQsOzlq5azKiTWThLNv0IDPMSiEOvLxluDx4IkMTXX-wieDQ68fFWyFwBKy3UCf6soVdodv1_FXtqJwzbXdbWfSl8_6b_TaeA58E0Q5vHHAzT40_ZBhVyXRq1S0XWHQZ8Bcf=w574-h384-n-k-rw-no-v1",
    descripcion: "Habitaciones cómodas, tranquilas y confortables con vista panorámica desde el mirador.",
    servicios: ["Habitaciones Cómodas", "Servicios de Hospedaje", "Mirador"],
    productos: [
      { name: "Habitaciones Cómodas", price: "Disponible", image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlxHQsOzlq5azKiTWThLNv0IDPMSiEOvLxluDx4IkMTXX-wieDQ68fFWyFwBKy3UCf6soVdodv1_FXtqJwzbXdbWfSl8_6b_TaeA58E0Q5vHHAzT40_ZBhVyXRq1S0XWHQZ8Bcf=w574-h384-n-k-rw-no-v1", hasDelivery: true },
      { name: "Servicios de Hospedaje", price: "Disponible", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYvBCu3aioHxXkILLEIquuUz76FxGcUh2zLL-kTlBufzxG2Lv_fvJIIq7&s=10", hasDelivery: true },
      { name: "Mirador", price: "Incluido en reserva", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvPXPrwILl6xETLj55tw6dYhahFmc1llT7VgcHLdweg&s", hasDelivery: true }
    ],
    galeria: [
      "/media/negocios_media/hmg-2025.jpg"
    ],
    contacto: {
      telefono: "312 401 7377",
      whatsapp: "573124017377",
      email: ""
    },
    ubicacion: {
      ciudad: "Leticia",
      departamento: "Amazonas",
      direccion: "Leticia, Amazonas",
      mapUrl: ""
    },
    horario: {
      Abrimos: "Atención 24 horas"
    },
    redes: {
      facebook: "",
      youtube: "",
      tiktok: "",
      instagram: "",
      website: ""
    }
  },
  {
    id: 9,
    slug: "casa-de-fe-cruzada-cristiana",
    nombre: "Casa De Fe Cruzada Cristiana",
    categoria: "Iglesias y Centros Religiosos",
    categoriaId: "iglesias",
    template: "general",
    verificado: true,
    destacado: false,
    rating: 4.9,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGeeYKOy7PUGOEeY_VJ6kvPeLKjMcECRu10EWuZEz3S9ojRxfxLjUqjFs&s=10",
    portada: "/media/negocios_media/celebracion_1.jpeg",
    descripcion: "Centro cristiano comunitario enfocado en celebraciones, capacitaciones espirituales y discipulados para niños y familias.",
    servicios: ["Celebraciones", "Capacitaciones", "Escuela para niños"],
    productos: [
      { name: "Celebraciones", price: "Sábados", image: "/media/negocios_media/celebracion_1.jpeg", hasDelivery: false },
      { name: "Capacitaciones", price: "Disponible", image: "/media/negocios_media/Discipulados_3.jpeg", hasDelivery: true },
      { name: "Escuela para niños", price: "Disponible", image: "/media/negocios_media/celebracion_3.jpeg", hasDelivery: true }
    ],
    galeria: [
      "/media/negocios_media/celebracion_1.jpeg",
      "/media/negocios_media/Discipulados_3.jpeg",
      "/media/negocios_media/celebracion_3.jpeg"
    ],
    contacto: {
      telefono: "316 2468753",
      whatsapp: "573162468753",
      email: "contacto@casadefe.org"
    },
    ubicacion: {
      ciudad: "Leticia",
      departamento: "Amazonas",
      direccion: "Cl. 10 #10-45, Leticia, Amazonas",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.825603710775!2d-69.9458!3d-4.2098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTInMzUuMyJTIDY5wrA1Nic0NC45Ilc!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco"
    },
    horario: {
      Abrimos: "Sábados y Domingos según programación"
    },
    redes: {
      facebook: "https://facebook.com/casadefe",
      youtube: "https://youtube.com/c/casadefe",
      tiktok: "https://tiktok.com/@casadefe",
      instagram: "https://instagram.com/casadefe",
      website: "https://casadefe.org"
    }
  },
  {
    id: 10,
    slug: "barriguita-y-mas-barriga",
    nombre: "Barriguita y más Barriga",
    categoria: "Restaurante / Cómida Rápida",
    categoriaId: "restaurantes",
    template: "restaurante",
    verificado: true,
    destacado: true,
    rating: 4.8,
    logo: "/media/negocios_media/raul-pizzas.jpeg",
    portada: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    descripcion: "Lo mejor en comida rápida, desayunos amazónicos tradicionales, café expreso doble y sándwiches gourmet.",
    servicios: ["Desayuno Amazónico", "Café Expreso Doble", "Sándwich de Pollo"],
    productos: [
      { name: "Desayuno Amazónico", price: "$15.000", image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60", hasDelivery: true },
      { name: "Café Expreso Doble", price: "$4.500", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60", hasDelivery: false },
      { name: "Sándwich de Pollo", price: "$12.000", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60", hasDelivery: true }
    ],
    galeria: [
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=900&q=80"
    ],
    contacto: {
      telefono: "3001234567",
      whatsapp: "573001234567",
      email: ""
    },
    ubicacion: {
      ciudad: "Leticia",
      departamento: "Amazonas",
      direccion: "Zona Centro, Leticia",
      mapUrl: ""
    },
    horario: {
      Abrimos: "Lunes a domingo: 7:00 AM - 10:00 PM"
    },
    redes: {
      facebook: "",
      youtube: "",
      tiktok: "",
      instagram: "",
      website: ""
    }
  },
  {
    id: 11,
    slug: "bloomkstore",
    nombre: "Bloomkstore",
    categoria: "Tiendas K-Pop",
    categoriaId: "tiendas",
    template: "general",
    verificado: true,
    destacado: true,
    rating: 4.9,
    logo: "/media/negocios_media/Bloom/Bloom.jpeg",
    portada: "/media/negocios_media/Bloom/Bloom_2.jpeg",
    descripcion: "La tienda K-Pop en Leticia para fans reales✨. K-Pop kits, Bias kits, Mystery packs y mercancía exclusiva.",
    servicios: ["K-Pop kits", "Bias kits", "Mystery packs"],
    productos: [
      { name: "K-Pop kits", price: "$18.000", image: "/media/negocios_media/Bloom/Bloom_2.jpeg", hasDelivery: true },
      { name: "Bias kits", price: "$15.000", image: "/media/negocios_media/Bloom/Blom_1.jpeg", hasDelivery: true },
      { name: "Mystery packs", price: "$20.000", image: "/media/negocios_media/Bloom/Bloom_3.jpeg", hasDelivery: true }
    ],
    galeria: [
      "/media/negocios_media/Bloom/Bloom.jpeg",
      "/media/negocios_media/Bloom/Bloom_2.jpeg",
      "/media/negocios_media/Bloom/Blom_1.jpeg",
      "/media/negocios_media/Bloom/Bloom_3.jpeg"
    ],
    contacto: {
      telefono: "310 6006061",
      whatsapp: "573106006061",
      email: ""
    },
    ubicacion: {
      ciudad: "Leticia",
      departamento: "Amazonas",
      direccion: "Leticia, Amazonas",
      mapUrl: ""
    },
    horario: {
      Abrimos: "Lunes a sábado: 7:30 am - 12:00 pm | 2:00 pm - 6:15 pm",
      festivos: "Domingos y festivos: 8:30 am - 12:00 pm"
    },
    redes: {
      instagram: "https://www.instagram.com/bloomkstore_let?igsh=aTJmZmYxNWRtZ2Zt&utm_source=qr",
      tiktok: "https://www.tiktok.com/@bloomkstore_let?_r=1&_t=ZS-98wLnYQFuMv",
      facebook: "",
      youtube: "",
      website: "@bloomkstore_let"
    }
  }
];