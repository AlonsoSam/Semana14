import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto y Asesoría SEO Personalizada | Expertos Next.js</title>
        <meta name="description" content="Contacta con nuestro equipo para realizar una auditoría completa de SEO y rendimiento de tu plataforma web." />
        <meta name="keywords" content="contacto seo, auditoria web, soporte nextjs" />
        <meta property="og:title" content="Contacto y Asesoría SEO Personalizada" />
        <meta property="og:description" content="Contacta con nuestro equipo para realizar una auditoría completa de SEO." />
        <meta property="og:image" content="/images/contacto-seo.png" />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ padding: '20px' }}>
        <h1>Página de Contacto</h1>
        <p>Escríbenos y lleva tu sitio web al siguiente nivel.</p>
      </div>
    </>
  );
}