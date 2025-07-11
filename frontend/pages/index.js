import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [displayText, setDisplayText] = useState('');

  const fullText = 'Bienvenido a Nexora';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>Nexora - Todo en un solo Lugar</title>
        <meta name="description" content="Todo lo que necesitas, en un solo lugar" />
        <link rel="icon" href="/logo-nexora.svg" />
      </Head>

      <div style={styles.wrapper}>
        <div style={styles.page}>
          <Navbar />

          <main style={styles.hero}>
            <motion.h1
              style={styles.title}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {displayText}
              <br />
              todo en un solo lugar
            </motion.h1>

            <motion.button
              style={styles.ctaButton}
              onClick={handleStart}
              whileHover={{ scale: 1.1, backgroundColor: '#2563eb', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
            >
              Empezar ahora
            </motion.button>
          </main>
        </div>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 60%)',
    minHeight: '100vh',
    width: '100%',
    margin: 0,
    padding: 0,
  },
  page: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    padding: '0 1rem',
    boxSizing: 'border-box',
  },
  hero: {
    textAlign: 'center',
    paddingTop: '6rem',
    paddingBottom: '4rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  ctaButton: {
    backgroundColor: '#1e293b',
    color: '#fff',
    padding: '0.9rem 2.2rem',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.2)',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};