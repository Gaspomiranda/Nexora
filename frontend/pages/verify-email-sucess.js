import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';  // ✅ Importar Link

export default function VerifyEmailSuccess() {
  return (
    <>
      <Head>
        <title>Email Verificado | Nexora</title>
        <meta name="description" content="Gracias por verificar tu correo en Nexora." />
        <link rel="icon" href="/logo-nexora.svg" />
      </Head>

      <div style={{
        background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter, sans-serif',
        color: '#fff'
      }}>
        <Navbar />

        <main style={{ textAlign: 'center', padding: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅ ¡Correo verificado!</h1>
          <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#cbd5e1' }}>
            Tu cuenta en <strong>Nexora</strong> está activada. Ahora podés comenzar a usar la plataforma.
          </p>

          {/* ✅ Cambiado por Link */}
          <Link href="/" legacyBehavior>
            <a
              style={{
                padding: '12px 24px',
                backgroundColor: '#16a34a',
                color: '#fff',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              Ir al inicio
            </a>
          </Link>

        </main>
      </div>
    </>
  );
}