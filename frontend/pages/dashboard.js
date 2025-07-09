import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Book, Store, Users, HelpCircle } from 'lucide-react';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.push('/login');
    });
    return () => unsubscribe();
  }, [router]);

  const cards = [
    { title: 'eduwealth', description: 'Impulsá tu libertad financiera', icon: <Book size={40} />, link: '/eduwealth' },
    { title: 'Biblioteca', description: 'Explorá libros de finanzas', icon: <Users size={40} />, link: '/biblioteca' },
    { title: 'Tienda', description: 'Comprá y financiá tu futuro', icon: <Store size={40} />, link: '/tienda' },
    { title: 'Soporte', description: 'Contactanos para ayuda', icon: <HelpCircle size={40} />, link: '/soporte' },
  ];

  return (
    <>
      <Head>
        <title>Dashboard | Nexora</title>
        <meta name="description" content="Panel principal de Nexora" />
        <link rel="icon" href="/logo-nexora.svg" />
      </Head>

      <div style={styles.pageContainer}>
        <Navbar />

        <main style={styles.main}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={styles.title}
          >
            Bienvenido a tu panel financiero
          </motion.h1>

          <div style={styles.grid}>
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                style={styles.card}
                onClick={() => router.push(card.link)}
              >
                <div style={{ marginBottom: '1rem' }}>{card.icon}</div>
                <h2 style={styles.cardTitle}>{card.title}</h2>
                <p style={styles.cardDescription}>{card.description}</p>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

const styles = {
  pageContainer: {
    background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
    minHeight: '100vh',
    fontFamily: 'Inter, sans-serif',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '3rem',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    width: '100%',
    maxWidth: '1000px',
  },
  card: {
    backgroundColor: 'rgba(30,41,59,0.95)',
    padding: '2rem',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '0.8rem',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#cbd5e1',
  },
};