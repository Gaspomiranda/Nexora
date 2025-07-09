import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../lib/firebase';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function ResetPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Te enviamos un correo para restablecer tu contraseña.');
    } catch (err) {
      setError('No pudimos enviar el correo. Verificá la dirección e intentá de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Restablecer contraseña | Nexora</title>
        <meta name="description" content="Restablecé tu contraseña de Nexora y recuperá el acceso a tu cuenta." />
        <link rel="icon" href="/logo-nexora.svg" />
      </Head>

      <div style={styles.pageContainer}>
        <Navbar />

        <main style={styles.main}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.card}
          >
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={styles.heading}
            >
              🔑 Restablecer contraseña
            </motion.h1>

            <p style={styles.text}>Ingresá tu correo electrónico y te enviaremos un enlace para cambiar tu contraseña.</p>

            <form onSubmit={handleReset} style={styles.form}>
              <input
                type="email"
                placeholder="📧 Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
              />

              {message && <p style={styles.success}>{message}</p>}
              {error && <p style={styles.error}>{error}</p>}

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#2563eb', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                style={styles.button}
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar enlace'}
              </motion.button>

              <p style={styles.linkText}>
                ¿Recordaste tu contraseña?{' '}
                <span style={styles.link} onClick={() => router.push('/login')}>
                  Iniciar sesión
                </span>
              </p>
            </form>
          </motion.div>
        </main>
      </div>
    </>
  );
}

const styles = {
  pageContainer: {
    background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Inter, sans-serif',
    color: '#fff',
  },
  main: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4rem 1rem',
    width: '100%',
    minHeight: '100vh',
  },
  card: {
    maxWidth: '500px',
    width: '100%',
    backgroundColor: 'rgba(30, 41, 59, 0.95)',
    padding: '3rem 2rem',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#fff',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    color: '#e2e8f0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  input: {
    padding: '1rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    width: '93,6%',
  },
  button: {
    padding: '1rem 2rem',
    backgroundColor: '#16a34a',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  success: {
    color: '#4ade80',
    fontSize: '0.95rem',
  },
  error: {
    color: '#f87171',
    fontSize: '0.95rem',
  },
  linkText: {
    marginTop: '1.5rem',
    fontSize: '0.95rem',
    color: '#fff',
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};