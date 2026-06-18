import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Curso de Desarrollo Web Avanzado | Mi Sitio SEO</title>
        <meta name="description" content="Aprende sobre optimización SEO y rendimiento de aplicaciones web en Next.js." />
        <meta name="keywords" content="Next.js, SEO, optimización web" />
        <meta property="og:title" content="Curso de Desarrollo Web Avanzado" />
        <meta property="og:description" content="Aprende sobre optimización SEO y rendimiento de aplicaciones web en Next.js." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Bienvenido a mi página optimizada</h1>
      <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>
      
      <Image src="/images/seo-image.png" width={800} height={400} alt="Imagen optimizada" priority />
      <DynamicComponent />
    </>
  );
}