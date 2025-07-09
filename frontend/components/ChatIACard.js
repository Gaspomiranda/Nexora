// ✅ components/ChatIACard.js - Cuadrado Chat IA Nexora

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function ChatIACard() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/chat-ia');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      style={styles.card}
    >
      <motion.div
        whileHover={{ y: -5, scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{ marginBottom: '1rem' }}
      >
        <MessageSquare size={40} />
      </motion.div>
      <h2 style={styles.cardTitle}>Chat IA</h2>
      <p style={styles.cardDescription}>Consultá y creá con inteligencia artificial al instante</p>
    </motion.div>
  );
}

const styles = {
  card: {
    backgroundColor: 'rgba(30,41,59,0.95)',
    padding: '2rem',
    borderRadius: '12px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
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