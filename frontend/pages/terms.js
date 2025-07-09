import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Términos de Uso | Nexora S.A.</title>
        <meta name="description" content="Lee los Términos de Uso de Nexora S.A. para conocer tus
         derechos y responsabilidades al utilizar nuestra plataforma." />
        <link rel="icon" href="/nexora-logo.png" />
      </Head>

      <div style={styles.wrapper}>
        <div style={styles.container}>
          <Navbar />

          <main style={styles.card}>
            <h1 style={styles.title}>Términos de Uso</h1>
            <p style={styles.updated}>Última actualización: 3 de julio de 2025</p>

            <h2 style={styles.heading}>1. Aceptación de los Términos</h2>
            <p style={styles.paragraph}>Al acceder o utilizar Nexora, el usuario declara ser mayor de 18 años y tener capacidad legal para contratar. El uso de la plataforma implica la aceptación plena de estos Términos, así como de nuestra Política de Privacidad.</p>

            <h2 style={styles.heading}>2. Servicios Ofrecidos</h2>
            <p style={styles.paragraph}>Nexora brinda acceso a contenido educativo financiero, herramientas basadas en inteligencia artificial, plantillas, recursos digitales y otras funcionalidades orientadas al aprendizaje y crecimiento personal en materia económica y financiera.
            La información y los contenidos son de carácter educativo y no constituyen asesoramiento financiero, legal ni de inversión.</p>

            <h2 style={styles.heading}>3. Cuentas de Usuario</h2>
            <p style={styles.paragraph}>El usuario debe proporcionar información veraz y mantener la confidencialidad de sus credenciales de acceso.
            El usuario es responsable de toda actividad realizada desde su cuenta.
            Podrá solicitar la eliminación de su cuenta en cualquier momento escribiendo a contacto@nexora.com.
            La creación de cuentas automáticas o fraudulentas está estrictamente prohibida.</p>

            <h2 style={styles.heading}>4. Restricciones de Uso</h2>
            <p style={styles.paragraph}>El usuario se compromete a:
            No utilizar la plataforma para fines ilegales o no autorizados.
            No distribuir, copiar, revender o explotar comercialmente los contenidos o herramientas sin consentimiento expreso de Nexora S.A.
            No interferir con el funcionamiento del sitio, vulnerar su seguridad o intentar obtener acceso no autorizado.</p>

            <h2 style={styles.heading}>5. Propiedad Intelectual</h2>
            <p style={styles.paragraph}>Todos los derechos de propiedad intelectual sobre el contenido, herramientas, marca, diseños, logos, gráficos, interfaces, y cualquier material relacionado pertenecen exclusivamente a EduWealth S.A.
            El uso indebido de cualquiera de estos elementos puede derivar en acciones legales.</p>

            <h2 style={styles.heading}>6. Contenido Generado con IA</h2>
            <p style={styles.paragraph}>El contenido generado por las herramientas de inteligencia artificial de EduWealth es provisional, automatizado y meramente educativo.
            EduWealth S.A. no garantiza la precisión, veracidad o aplicabilidad de los resultados generados.
            Los usuarios pueden utilizar el contenido para fines personales o comerciales, bajo su exclusiva responsabilidad.
            EduWealth S.A. no será responsable por el uso, consecuencias o decisiones derivadas del uso de estos contenidos.</p>

            <h2 style={styles.heading}>7. Privacidad y Protección de Datos</h2>
            <p style={styles.paragraph}>El tratamiento de los datos personales se rige por nuestra Política de Privacidad.
            El usuario consiente el uso de sus datos para la prestación de los servicios, mejoras, comunicaciones y cumplimiento de obligaciones legales.</p>

            <h2 style={styles.heading}>8. Servicios de Terceros</h2>
            <p style={styles.paragraph}>La plataforma puede integrar servicios o herramientas de terceros (como autenticación con Google). EduWealth no se hace responsable de la disponibilidad, funcionamiento o políticas de dichos servicios.</p>

            <h2 style={styles.heading}>9. Limitación de Responsabilidad</h2>
            <p style={styles.paragraph}>Nexora no garantiza la disponibilidad permanente del servicio, la ausencia de errores o la obtención de resultados concretos.
            En ningún caso EduWealth S.A. será responsable por daños directos, indirectos, incidentales o consecuentes relacionados con el uso o imposibilidad de uso de la plataforma.</p>

            <h2 style={styles.heading}>10. Pagos, Suscripciones y Cancelaciones</h2>
            <p style={styles.paragraph}>Si en el futuro se incorporan planes pagos o suscripciones:
            El usuario podrá consultar los precios, condiciones y derecho de cancelación en las páginas correspondientes.
            Las cancelaciones o solicitudes de reembolso deberán realizarse por los canales oficiales.</p>

            <h2 style={styles.heading}>11. Modificaciones en los Términos</h2>
            <p style={styles.paragraph}>Nexora S.A. se reserva el derecho de modificar estos Términos en cualquier momento. Se notificará a los usuarios sobre cambios sustanciales. El uso continuado implica aceptación de los nuevos términos.</p>

            <h2 style={styles.heading}>12. Ley Aplicable y Jurisdicción</h2>
            <p style={styles.paragraph}>Estos Términos se rigen por la legislación vigente en la República Argentina. Ante cualquier controversia, ambas partes se someten a los tribunales de la ciudad de Tandil, Buenos Aires.</p>
          </main>

          <footer style={styles.footer}>
            <p style={styles.footerText}>&copy; 2025 Nexora S.A. Todos los derechos reservados.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)',
    minHeight: '100vh',
    width: '100%',
    margin: 0,
    padding: '2rem 0',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    maxWidth: '960px',
    margin: '0 auto',
    padding: '1rem',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    padding: '3rem 2rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  updated: {
    fontSize: '0.9rem',
    color: '#cbd5e1',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.4rem',
    marginTop: '2rem',
    marginBottom: '0.75rem',
  },
  paragraph: {
    fontSize: '1rem',
    color: '#e2e8f0',
    lineHeight: '1.8',
  },
  footer: {
    marginTop: '4rem',
    padding: '2rem 0',
    fontSize: '0.85rem',
    color: '#cbd5e1',
    textAlign: 'center',
  },
  footerText: {
    marginBottom: '0.5rem',
  },
};