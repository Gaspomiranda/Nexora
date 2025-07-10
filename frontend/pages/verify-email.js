import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { auth } from '../lib/firebase';
import { sendEmailVerification, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function VerifyEmail() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [resending, setResending] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        if (currentUser.emailVerified) {
          router.push('/dashboard');
        }
      } else {
        router.push('/login');
      }
    });

    const interval = setInterval(() => {
      auth.currentUser?.reload().then(() => {
        if (auth.currentUser?.emailVerified) {
          router.push('/dashboard');
        }
      });
    }, 3000);

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, [router]);

  const handleResend = async () => {
    if (!user) return;
    setMessage('');
    setError('');
    setResending(true);

    try {
      await sendEmailVerification(user);
      setMessage('Correo de verificación reenviado correctamente.');
    } catch (err) {
      console.error('Error al reenviar:', err);  // ✅ Agregado
      setError('Error al reenviar el correo. Intentá de nuevo.');
    } finally {
      setResending(false);
    }
  };

  return (
    <>
      <Head>
        <title>Verificá tu correo | Nexora</title>
        <meta name="description" content="Por favor, verificá tu correo electrónico para activar tu cuenta en Nexora." />
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
              📧 Verificá tu correo
            </motion.h1>

            <p style={styles.text}>
              Te enviamos un correo a la dirección registrada. Por favor revisá tu bandeja de entrada y confirmá tu cuenta.
            </p>

            <p style={styles.text}>
              Una vez verificado, serás redirigido automáticamente a tu panel en <strong>Nexora</strong>.
            </p>

            {message && <p style={styles.success}>{message}</p>}
            {error && <p style={styles.error}>{error}</p>}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResend}
              disabled={resending}
              style={styles.button}
            >
              {resending ? 'Enviando...' : 'Reenviar correo'}
            </motion.button>

            <p style={styles.footerText}>
              Si no recibiste el correo, revisá la carpeta de spam o volvé a registrarte.
            </p>
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
    alignItems: 'center',
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
  },
  card: {
    maxWidth: '600px',
    width: '100%',
    backgroundColor: 'rgba(30, 41, 59, 0.95)',
    padding: '4rem 3rem',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.4rem',
    marginBottom: '1.8rem',
    color: '#fff',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '1.2rem',
    color: '#e2e8f0',
  },
  footerText: {
    fontSize: '0.9rem',
    color: '#94a3b8',
    marginTop: '2rem',
  },
  button: {
    padding: '0.9rem 2rem',
    backgroundColor: '#2563eb',
    border: 'none',
    borderRadius: '10px',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  success: {
    color: '#4ade80',
    fontSize: '0.95rem',
  },
  error: {
    color: '#f87171',
    fontSize: '0.95rem',
  },
};