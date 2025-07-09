export default function emailTemplate(verificationLink, nombre = 'Usuario') {
  return `
    <div style="background: linear-gradient(to bottom, #0f172a, #1e293b); padding: 40px; font-family: Inter, sans-serif; color: #fff; text-align: center;">
      <img src="https://i.ibb.co/xJrD5pr/nexora-logo.png" alt="Nexora Logo" width="120" style="margin-bottom: 20px; border-radius: 12px;" />

      <h1 style="font-size: 24px; margin-bottom: 16px;">Hola ${nombre}, confirmá tu correo electrónico</h1>

      <p style="font-size: 16px; margin-bottom: 30px; color: #cbd5e1;">
        Gracias por registrarte en <strong>Nexora</strong>.
        Para activar tu cuenta y comenzar a explorar todo lo que tenemos para ofrecerte, hacé clic en el botón de abajo:
      </p>

      <a href="${verificationLink}" style="display: inline-block; padding: 12px 24px; background-color: #16a34a; color: #fff; border-radius: 10px; text-decoration: none; font-weight: bold;">
        Verificar correo
      </a>

      <p style="font-size: 14px; margin-top: 30px; color: #94a3b8;">
        Si no creaste esta cuenta, podés ignorar este mensaje sin problemas.
      </p>

      <p style="font-size: 14px; margin-top: 10px; color: #94a3b8;">
        ¡Gracias por confiar en Nexora!
      </p>
    </div>
  `;
}