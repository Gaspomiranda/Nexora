import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';


export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Política de Privacidad | EduWealth</title>
        <meta
          name="description"
          content="Leé nuestra Política de Privacidad y conocé cómo protegemos tus datos en Nexora."
        />
        <link rel="icon" href="/nexora-logo.png" />
      </Head>

      <div style={styles.wrapper}>
        <div style={styles.page}>
          <Navbar />

          <main style={styles.main}>
            <h1 style={styles.title}>Política de Privacidad</h1>

            <p style={styles.paragraph}>
              En <strong>Nexora</strong>,nos comprometemos a proteger su privacidad. La presente Política de Privacidad describe cómo recopilamos, utilizamos y protegemos sus datos personales cuando usted utiliza nuestra plataforma de educación financiera impulsada por inteligencia artificial. Al hacer uso de nuestros servicios, usted acepta las prácticas aquí descritas.
            </p>

            <h2 style={styles.subtitle}>1. Información que recopilamos</h2>
            <p style={styles.paragraph}>Recopilamos distintos tipos de información personal para poder brindar y mejorar nuestros servicios. Esto incluye:

Datos personales proporcionados por usted: información que nos suministra directamente al registrarse o usar la plataforma, como su nombre, dirección de correo electrónico, contraseña de acceso y otros datos necesarios.

Datos técnicos recopilados automáticamente: información sobre su dispositivo y conexión cuando interactúa con nuestro servicio, por ejemplo, su dirección IP, tipo y versión de navegador, sistema operativo, configuración de idioma, zona horaria y modelo de dispositivo utilizado. También podemos recopilar información sobre su navegación o uso de la plataforma, como las secciones visitadas, funciones utilizadas y tiempos de acceso. Para ello podríamos emplear cookies u otras tecnologías de seguimiento comunes en la industria (ver nuestra Política de Cookies si corresponde).

Datos derivados de su actividad: en algunos casos, podríamos inferir preferencias u otros datos a partir de su uso de la plataforma (por ejemplo, contenido educativo que consulta con más frecuencia), con el único fin de personalizar su experiencia. Estos datos derivados están sujetos a las mismas salvaguardas que el resto de su información personal. (IP, navegador, dispositivo).</p>

            <h2 style={styles.subtitle}>2. Cómo utilizamos su información</h2>
            <p style={styles.paragraph}>Utilizamos sus datos personales con las siguientes finalidades principales:

Proveer el servicio: Para crear y gestionar su cuenta, autenticar su identidad y brindarle acceso a nuestra plataforma de educación financiera con inteligencia artificial, garantizando el funcionamiento adecuado de todas las funcionalidades contratadas.

Comunicación: Para enviarle notificaciones o comunicaciones importantes relacionadas con su cuenta, como confirmaciones de registro, restablecimiento de contraseña, alertas de seguridad o información sobre cambios en nuestros términos. Asimismo, para hacerle llegar contenido educativo personalizado, recomendaciones u ofertas relacionadas con EduWealth que consideremos de su interés, siempre de forma acorde con sus preferencias de comunicación.

Mejora del servicio: Para analizar el uso que usted hace de la plataforma y así mejorar la calidad de nuestros servicios, desarrollar nuevas funcionalidades, evaluar el desempeño de la inteligencia artificial incorporada y, en general, optimizar la experiencia del usuario. Estos análisis se realizan de forma agregada o pseudonimizada, sin perfilamientos invasivos. También podemos utilizar sus comentarios, consultas o retroalimentación para mejorar la atención al cliente y el funcionamiento de EduWealth.


En todos los casos, trataremos sus datos únicamente para los propósitos legítimos e informados por los cuales fueron recopilados, y no los utilizaremos de manera incompatible con dichos fines.</p>

            <h2 style={styles.subtitle}>3. Compartir datos con terceros</h2>
            <p style={styles.paragraph}>Su privacidad es importante para nosotros; por tanto, no compartimos sus datos personales con terceros salvo en las siguientes circunstancias excepcionales:

Con su consentimiento: Si usted nos autoriza explícitamente, podremos compartir ciertos datos con terceros. Por ejemplo, si participa en actividades conjuntas con aliados de EduWealth y nos da permiso para compartir su contacto, lo haremos bajo los términos acordados.

Obligación legal: Podemos divulgar información personal si una ley, reglamento, proceso legal o requerimiento gubernamental exigible (por ejemplo, una orden judicial) nos obliga a hacerlo. En tal caso, solo revelaremos lo estrictamente necesario y, cuando proceda, le notificaremos sobre dicha divulgación.

Proveedores de servicios (Encargados de tratamiento): En ocasiones puede ser necesario compartir ciertos datos con proveedores externos para operar el servicio o realizar funciones en nuestro nombre. Por ejemplo, utilizamos servicios de terceros para la autenticación de usuarios (como Google Sign-In), para alojamiento de infraestructura o para procesar pagos. En estos casos, dichos terceros acceden a la información únicamente para cumplir las tareas que les solicitamos y bajo nuestras instrucciones, con la obligación contractual de proteger la confidencialidad y seguridad de sus datos personales. Nunca compartimos más datos que los necesarios para la prestación específica del servicio contratado.


En ningún caso vendemos ni cedemos sus datos personales a terceros para fines comerciales o de marketing directo. Todos los terceros con quienes podamos compartir datos en virtud de lo anterior están sujetos a compromisos legales de cumplimiento de la normativa de protección de datos aplicable y al deber de mantener la información bajo estricta confidencialidad.</p>

            <h2 style={styles.subtitle}>4. Seguridad</h2>
            <p style={styles.paragraph}> En Nexora hemos implementado medidas de seguridad técnicas y organizativas apropiadas para resguardar sus datos personales frente a accesos no autorizados, alteración, divulgación o destrucción. Esto incluye, por ejemplo, la encriptación de comunicaciones a través de protocolos seguros, el almacenamiento de información en servidores protegidos mediante firewalls, controles de acceso restringido al personal autorizado y políticas internas de manejo de información. Asimismo, realizamos copias de seguridad periódicas de los datos para prevenir pérdidas accidentales y evaluamos regularmente nuestras prácticas de seguridad.

Sin perjuicio de lo anterior, usted debe tener en cuenta que ningún sistema de transmisión o almacenamiento de datos es completamente infalible o 100% seguro. Por ello, no podemos garantizar una seguridad absoluta de la información en todo momento. Le recomendamos también a usted como usuario que adopte medidas de precaución adicionales: mantenga la confidencialidad de su contraseña, evite compartir sus credenciales con terceros, y notifíquenos de inmediato si detecta algún uso o acceso no autorizado a su cuenta. De nuestra parte, cualquier violación significativa a la seguridad de los datos personales será comunicada a los usuarios y a las autoridades competentes según lo exigen las leyes aplicables. </p>

            <h2 style={styles.subtitle}>5. Tus derechos</h2>
            <p style={styles.paragraph}>Usted, como titular de sus datos personales, cuenta con una serie de derechos que puede ejercer en cualquier momento, de acuerdo con la normativa de protección de datos vigente. En particular, tiene derecho a:

Acceso: Obtener confirmación sobre si en Nexora estamos tratando datos personales que le conciernen, y en tal caso, acceder a ellos y conocer con qué fines y bajo qué condiciones los tratamos.

Rectificación: Solicitar la corrección o actualización de sus datos personales que puedan estar desactualizados, sean inexactos o incompletos.

Cancelación/Supresión: Pedir la eliminación de sus datos personales de nuestros registros y bases de datos cuando, por ejemplo, hayan dejado de ser necesarios para los fines para los que fueron recogidos, o cuando usted retire su consentimiento (en caso de que este fuera la base legal del tratamiento).

Oposición: Oponerse, por motivos relacionados con su situación particular, a que continuemos tratando sus datos personales en determinadas circunstancias y siempre que la ley aplicable lo permita. Por ejemplo, tiene derecho a oponerse a que usemos sus datos con fines de marketing directo, o a decisiones basadas únicamente en tratamientos automatizados, incluida la elaboración de perfiles, que produzcan efectos jurídicos o significativos sobre usted.

Limitación del tratamiento: Solicitar que se restrinja temporalmente el tratamiento de sus datos personales en ciertos supuestos establecidos por ley –por ejemplo, mientras se verifica la exactitud de los datos tras haber solicitado una rectificación, o cuando el tratamiento sea ilícito y usted prefiera la limitación al borrado–.

Portabilidad: Recibir una copia de los datos personales que nos ha proporcionado, en un formato estructurado, de uso común y lectura mecánica, y (cuando sea técnicamente posible) transmitir esos datos a otro proveedor que usted nos indique. Este derecho aplicará en la medida en que resulte procedente, por ejemplo, para datos tratados con base en su consentimiento o en la ejecución de un contrato, conforme al RGPD u otras leyes similares.


Estos derechos —conocidos comúnmente como derechos ARCO/ARSULIPO en la legislación de protección de datos (Acceso, Rectificación, Cancelación/Supresión, Oposición, así como los más recientes de Limitación y Portabilidad) — están garantizados por las normativas vigentes, y usted puede ejercitarlos en cualquier momento. Para ello, podrá hacerlo por las siguientes vías: (i) accediendo a la configuración o sección de privacidad de su perfil de usuario en nuestra plataforma, donde encontrará opciones para revisar, corregir o eliminar cierta información; o (ii) contactándonos directamente a través del correo electrónico contacto@eduwealth.com o cualquier otro canal habilitado a tal efecto, indicando claramente qué derecho desea ejercer y sobre qué datos.

Para su seguridad, podríamos solicitarle información adicional para verificar su identidad antes de atender ciertas solicitudes (por ejemplo, acceso o eliminación de datos sensibles), en línea con los requisitos legales. Atenderemos sus peticiones y le responderemos dentro de los plazos previstos por la ley aplicable. El ejercicio de estos derechos es gratuito, salvo que se formulen solicitudes manifiestamente infundadas o excesivas (por ej., repetitivas), en cuyo caso podríamos cobrar un importe razonable o negarnos a actuar, según corresponda y conforme permite la normativa.

Además, le informamos que tiene derecho a presentar un reclamo o denuncia ante la autoridad de control competente en materia de protección de datos si considera que sus derechos han sido vulnerados. En particular, en la República Argentina, la autoridad de control es la Agencia de Acceso a la Información Pública, órgano de control de la Ley N° 25.326, la cual tiene la atribución de atender las denuncias y reclamos que se formulen con relación al incumplimiento de las normas sobre protección de datos personales. En otros países o jurisdicciones, puede corresponderle dirigirse a la agencia u organismo local encargado de velar por el cumplimiento de las leyes de privacidad. Recomendamos que, antes de recurrir a la autoridad, nos contacte a nosotros para intentar resolver directamente cualquier inquietud o reclamo que pudiera tener, ya que la satisfacción y confianza de nuestros usuarios es primordial. </p>

            <h2 style={styles.subtitle}>6. Cambios a esta política</h2>
            <p style={styles.paragraph}>La presente Política de Privacidad puede sufrir actualizaciones o modificaciones en el futuro, por ejemplo, para reflejar cambios en nuestras prácticas de manejo de información, adaptarnos a nuevas exigencias legales o incorporar mejoras en nuestras medidas de privacidad. Nos reservamos el derecho de actualizar esta Política de Privacidad de vez en cuando, en particular para reflejar cambios normativos o jurisprudenciales relevantes. Por ello le recomendamos revisar esta página periódicamente para mantenerse informado sobre cómo protegemos su información.

En caso de realizar cambios sustanciales o importantes a la Política, se lo comunicaremos a los usuarios por los canales habituales (por ejemplo, mediante un aviso destacado en nuestro sitio web o vía correo electrónico), antes de que dichos cambios entren en vigor. La versión más reciente de la Política de Privacidad estará siempre disponible en nuestro sitio, indicando la fecha de la última actualización. Su uso continuado de la plataforma después de la entrada en vigor de las modificaciones constituirá la aceptación de la Política actualizada.
            <br />Última actualización: 3 de julio de 2025
            </p>
          </main>

          <footer style={styles.footer}>
            <p style={styles.footerText}>&copy; 2025 Nexora. Todos los derechos reservados.</p>
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
    padding: 0,
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
  },
  page: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  main: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '2rem',
    backdropFilter: 'blur(4px)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginTop: '2rem',
    marginBottom: '1rem',
    color: '#e2e8f0',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.8',
    color: '#cbd5e1',
  },
  footer: {
    marginTop: '3rem',
    padding: '2rem 0',
    textAlign: 'center',
    fontSize: '0.85rem',
    color: '#cbd5e1',
  },
  footerText: {
    marginBottom: '0',
  },
};