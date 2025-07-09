export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { prompt } = req.body;
  if (!prompt || prompt.trim() === '') {
    return res.status(400).json({ message: 'Prompt inválido' });
  }

  const apiKey = process.env.HUGGINGFACE_API_KEY;

  try {
    const response = await fetch('https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ inputs: prompt }),
    });

    const contentType = response.headers.get('content-type');

    if (!contentType || !contentType.includes('application/json')) {
      const errorText = await response.text();
      throw new Error(`Respuesta no válida: ${errorText}`);
    }

    const data = await response.json();
    const result = data.generated_text || 'Lo siento, no pude generar una respuesta.';

    return res.status(200).json({ result });
  } catch (error) {
    console.error('Error al conectar con Hugging Face:', error.message);
    return res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
  }
}