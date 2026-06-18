export default function LargeComponent() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', marginTop: '20px', borderRadius: '8px', textAlign: 'center' }}>
      <h3>Componente cargado con Lazy Loading</h3>
      <p>Este bloque de texto se descargó de forma diferida gracias a Next.js.</p>
    </div>
  );
}