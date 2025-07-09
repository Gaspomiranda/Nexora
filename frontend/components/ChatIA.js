import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Save, Download } from 'lucide-react';

export default function ChatIA() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResponse(data.result);
    } catch (error) {
      setResponse('Error al generar respuesta.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>¿Qué querés aprender hoy?</h2>

      <input
        type="text"
        placeholder="Ej: ¿Cómo invertir con poco dinero?"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={styles.input}
      />

      <motion.button
        onClick={handleGenerate}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={styles.button}
      >
        {loading ? 'Generando...' : 'Generar con IA'}
      </motion.button>

      {response && (
        <div style={styles.responseContainer}>
          <p style={styles.responseText}>{response}</p>

          <div style={styles.actions}>
            <button style={styles.iconButton}><Copy size={16} /> Copiar</button>
            <button style={styles.iconButton}><Save size={16} /> Guardar</button>
            <button style={styles.iconButton}><Download size={16} /> PDF</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: 'rgba(30,41,59,0.95)',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
  },
  input: {
    width: '100%',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    marginBottom: '1rem',
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#16a34a',
    color: '#fff',
    padding: '0.9rem 2rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '2rem',
  },
  responseContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '1rem',
    borderRadius: '12px',
    marginTop: '1rem',
    textAlign: 'left',
  },
  responseText: {
    color: '#e2e8f0',
    marginBottom: '1rem',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
  },
  iconButton: {
    backgroundColor: 'transparent',
    border: '1px solid #3b82f6',
    borderRadius: '8px',
    padding: '0.5rem 1rem',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.85rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
};