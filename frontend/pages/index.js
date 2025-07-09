
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function Home() {
const router = useRouter();
const [user, loading] = useAuthState(auth);
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
if (user) {
router.push('/dashboard');
} else {
router.push('/login');
}
};

return (
<>
<Head>
<title>Nexora- Todo en un solo Lugar</title>
<meta  
name="description"  
content="Todo lo que necesitas, en un solo ugar"  
/>
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
          {loading ? 'Cargando...' : 'Empezar ahora'}  
        </motion.button>  
      </main>  

      <motion.section  
        style={styles.features}  
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}  
        transition={{ delay: 1.5, duration: 1 }}  
      >  
        <div style={styles.featureItem}>  
          <span style={styles.featureIcon}>💬</span>  
          <p>IA que<br />responde tus dudas</p>  
        </div>  
        <div style={styles.featureItem}>  
          <span style={styles.featureIcon}>🛍️</span>  
          <p>Tienda</p>  
        </div>  
        <div style={styles.featureItem}>  
          <span style={styles.featureIcon}>📚</span>  
          <p>Biblioteca</p>  
        </div>  
        <div style={styles.featureItem}>  
          <span style={styles.featureIcon}>📊</span>  
          <p>Plantillas<br />Inteligentes</p>  
        </div>  
      </motion.section>  

      <footer style={styles.footer}>  
        <p style={styles.footerText}>&copy; 2025 EduWealth. Todos los derechos reservados.</p>  
        <div style={styles.footerLinksContainer}>  
          <Link href="/privacy" style={styles.footerLink}>Política de privacidad</Link>  
          <span style={styles.footerDivider}>|</span>  
          <Link href="/terms" style={styles.footerLink}>Términos de uso</Link>  
        </div>  
      </footer>  
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
subtitle: {
fontSize: '1.25rem',
marginBottom: '2rem',
color: '#cbd5e1',
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
features: {
display: 'flex',
justifyContent: 'center',
flexWrap: 'wrap',
marginTop: '4rem',
gap: '3rem',
textAlign: 'center',
},
featureItem: {
textAlign: 'center',
minWidth: '100px',
},
featureIcon: {
fontSize: '2.5rem',
display: 'block',
marginBottom: '0.75rem',
},
footer: {
marginTop: '4rem',
padding: '2rem 0',
fontSize: '0.85rem',
color: '#cbd5e1',
textAlign: 'center',
},
footerText: {
marginBottom: '0.5rem',
},
footerLinksContainer: {
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
gap: '0.5rem',
},
footerLink: {
color: '#cbd5e1',
textDecoration: 'underline',
fontWeight: 500,
},
footerDivider: {
color: '#cbd5e1',
},
};