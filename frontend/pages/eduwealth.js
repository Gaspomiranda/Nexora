import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'; // ✅ Importación necesaria

import { Bot, Zap, BookOpen, DollarSign, History, User, Layers, HelpCircle } from 'lucide-react';

export default function EduWealth() {
  const cards = [
    { icon: <Bot size={40} />, title: 'Chat IA', text: 'Hacé tus preguntas y recibí respuestas instantáneas.', link: '/chat-ia' },
    { icon: <Zap size={40} />, title: 'Planes', text: 'Desbloqueá beneficios exclusivos.', link: '' },
    { icon: <BookOpen size={40} />, title: 'Plantillas Rápidas', text: 'Accedé a plantillas listas para usar.', link: '' },
    { icon: <DollarSign size={40} />, title: 'Tips Financieros', text: 'Consejos para optimizar tus finanzas.', link: '' },
    { icon: <History size={40} />, title: 'Historial', text: 'Revisá tus actividades y documentos previos.', link: '' },
    { icon: <Layers size={40} />, title: 'Cursos', text: 'Explorá cursos y capacitaciones exclusivas.', link: '' },
    { icon: <User size={40} />, title: 'Perfil', text: 'Gestioná tu cuenta y preferencias.', link: '' },
    { icon: <HelpCircle size={40} />, title: 'Soporte', text: 'Contactanos para recibir ayuda.', link: '' },
  ];

  return (
    <>
      <Head>
        <title>EduWealth | Nexora</title>
        <meta name="description" content="Impulsá tu libertad financiera con las herramientas de EduWealth by Nexora." />
        <link rel="icon" href="/logo-nexora.svg" />
      </Head>

      <div style={styles.wrapper}>
        <Navbar />

        <main style={styles.main}>
          <motion.h1
            style={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            EduWealth
          </motion.h1>

          <motion.p
            style={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Herramientas inteligentes para impulsar tu educación financiera y tu futuro digital.
          </motion.p>

          <div style={styles.grid}>
            {cards.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                text={card.text}
                link={card.link}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

function Card({ icon, title, text, link }) {
  const router = useRouter(); // ✅ Import y uso correcto

  const handleClick = () => {
    if (link) {
      router.push(link);
    } else {
      alert(`${title} - Próximamente`);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={styles.card}
      onClick={handleClick}
    >
      <div style={{ marginBottom: '1rem' }}>{icon}</div>
      <h2 style={styles.cardTitle}>{title}</h2>
      <p style={styles.cardText}>{text}</p>
    </motion.div>
  );
}

const styles = {
  wrapper: {
    background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
    minHeight: '100vh',
    color: '#fff',
    fontFamily: 'Inter, sans-serif',
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#cbd5e1',
    marginBottom: '3rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: 'rgba(30, 41, 59, 0.95)',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '0.8rem',
  },
  cardText: {
    fontSize: '1rem',
    color: '#cbd5e1',
  },
};