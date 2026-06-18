const BASE_URL = 'https://mi-proyecto-seo-dscq.onrender.com';

async function obtenerRutasDesdeCMS() {
  return [
    { slug: "/blog/introduccion-a-nextjs" },
    { slug: "/blog/guia-seo-avanzada" },
    { slug: "/blog/como-optimizar-imagenes" }
  ];
}

export default async function handler(req, res) {
  const rutasEstaticas = ["/", "/blog", "/contacto"];

  const articulos = await obtenerRutasDesdeCMS();
  const rutasDinamicas = articulos.map(item => item.slug);

  const todasLasUrls = [...rutasEstaticas, ...rutasDinamicas];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${todasLasUrls
      .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}