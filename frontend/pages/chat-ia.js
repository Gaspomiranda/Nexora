import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function ChatIA() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      setResponse(data.result || 'Lo siento, no pude generar una respuesta.');
    } catch (error) {
      console.error('⚠️ Error al conectar con la IA:', error); // ✅ Ahora sí usamos 'error'
      setResponse('⚠️ Error al conectar con la IA. Intentá de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Chat IA | Nexora</title>
        <meta name="description" content="Conversá en tiempo real con la inteligencia artificial de Nexora." />
        <link rel="icon" href="/logo-nexora.svg" />
      </Head>

      <div style={styles.pageContainer}>
        <Navbar />

        <main style={styles.main}>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.heading}
          >
            🤖 Chat IA
          </motion.h1>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribí tu pregunta o consulta financiera..."
            style={styles.textarea}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.button}
            onClick={handleSend}
            disabled={loading}
          >
            {loading ? 'Consultando...' : 'Enviar'}
          </motion.button>

          {loading && <p style={styles.loading}>⏳ Pensando...</p>}

          {response && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={styles.response}
            >
              {response}
            </motion.div>
          )}
        </main>
      </div>
    </>
  );
}

const styles = {
  pageContainer: {
    background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)',
    minHeight: '100vh',
    fontFamily: 'Inter, sans-serif',
    color: '#fff',
  },
  main: {
    flex: 1,
    padding: '4rem 2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  textarea: {
    width: '100%',
    padding: '1rem',
    borderRadius: '10px',
    border: '1px solid #cbd5e1',
    fontSize: '1rem',
    marginBottom: '1rem',
    resize: 'vertical',
    minHeight: '120px',
  },
  button: {
    padding: '0.8rem 2rem',
    borderRadius: '10px',
    backgroundColor: '#16a34a',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    marginBottom: '1.5rem',
  },
  loading: {
    textAlign: 'center',
    color: '#94a3b8',
    marginBottom: '1rem',
  },
  response: {
    backgroundColor: '#1e293b',
    padding: '1.5rem',
    borderRadius: '10px',
    color: '#e2e8f0',
    fontSize: '1rem',
    whiteSpace: 'pre-wrap',
  },
};