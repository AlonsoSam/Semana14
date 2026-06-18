import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog de Optimización y Rendimiento Web | Agencia SEO</title>
        <meta name="description" content="Artículos técnicos especializados en Core Web Vitals, carga diferida y meta tags dinámicos." />
        <meta name="keywords" content="Blog SEO, Core Web Vitals, tecnología" />
        <meta property="og:title" content="Blog de Optimización y Rendimiento Web" />
        <meta property="og:description" content="Artículos técnicos especializados en Core Web Vitals y rendimiento." />
        <meta property="og:image" content="/images/blog-seo.png" />
        <meta property="og:type" content="article" />
      </Head>

      <div style={{ padding: '20px' }}>
        <h1>Nuestro Blog de Tecnología</h1>
        <p>Explora guías avanzadas sobre posicionamiento orgánico.</p>
      </div>
    </>
  );
}