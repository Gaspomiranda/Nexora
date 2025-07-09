// ✅ pages/register.js - Nexora completo con verificación real de correo

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db, signInWithGoogle } from '../lib/firebase';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';

export default function Register() {
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const phrases = [
    'Potenciá tu crecimiento financiero',
    'Impulsá tu libertad financiera',
    'Transformá tu futuro con IA',
    'Aprendé. Crecé. Evolucioná.',
    'Nexora: Tu camino al éxito comienza aquí',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex(prev => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const validatePassword = (pwd) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;
    return regex.test(pwd);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!acceptedTerms) {
      setError('Debes aceptar los términos y la política de privacidad.');
      return;
    }

    if (!captchaVerified) {
      setError('Por favor verificá el CAPTCHA.');
      return;
    }

    if (!validatePassword(password)) {
      setError('La contraseña debe tener al menos 6 caracteres, una mayúscula, un número y un símbolo.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'usuarios', user.uid), {
        nombre,
        email,
        creadoEn: new Date(),
      });

      await sendEmailVerification(user);

      router.push('/verify-email');

    } catch (err) {
      setError('Firebase: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    if (!acceptedTerms) {
      setError('Debes aceptar los términos y la política de privacidad.');
      return;
    }

    if (!captchaVerified) {
      setError('Por favor verificá el CAPTCHA.');
      return;
    }

    try {
      const result = await signInWithGoogle();
      await sendEmailVerification(result.user);
      router.push('/verify-email');
    } catch (err) {
      setError('Firebase: ' + err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Registrarse | Nexora</title>
        <meta name="description" content="Creá tu cuenta y accedé a todas las herramientas de Nexora para potenciar tu futuro." />
        <link rel="icon" href="/logo-nexora.svg" />
      </Head>

      <div style={{ background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', color: '#fff' }}>
        <Navbar />

        <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4rem 1rem', width: '100%' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: '650px', width: '100%', backgroundColor: 'rgba(30, 41, 59, 0.95)', padding: '4rem 3rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.4)', textAlign: 'center' }}>

            <motion.p key={phraseIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700, marginBottom: '1.8rem', minHeight: '1.8rem' }}>
              {phrases[phraseIndex]}
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ fontSize: '2.7rem', marginBottom: '2.2rem', color: '#fff' }}>
              Crear cuenta
            </motion.h1>

            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="text" placeholder="👤 Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} style={{ padding: '1rem', fontSize: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', width: '100%' }} required />
              <input type="email" placeholder="📧 Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '1rem', fontSize: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', width: '100%' }} required />
              <div style={{ position: 'relative' }}>
                <input type={showPassword ? 'text' : 'password'} placeholder="🔒 Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '1rem', fontSize: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', width: '100%' }} required />
                <span onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: '1rem' }}>{showPassword ? '👀' : '🤫'}</span>
              </div>

              <label style={{ fontSize: '0.9rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={acceptedTerms} onChange={() => setAcceptedTerms(!acceptedTerms)} required />
                <span>Acepto los <a href="/terms" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Términos de uso</a> y la <a href="/privacy" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Política de privacidad</a></span>
              </label>

              <div style={{ margin: '1rem 0' }}>
                <ReCAPTCHA sitekey="6LcetHcrAAAAALmvlKQJ4xvVTJlnWo05AvlRST0v" onChange={() => setCaptchaVerified(true)} />
              </div>

              {error && <p style={{ color: '#f87171', fontSize: '0.95rem' }}>{error}</p>}

              <motion.button whileHover={{ scale: 1.05, backgroundColor: '#2563eb', color: '#fff' }} whileTap={{ scale: 0.95 }} type="submit" style={{ padding: '1rem 2rem', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s ease' }} disabled={loading || !acceptedTerms}>
                {loading ? 'Registrando...' : 'Registrarse'}
              </motion.button>

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="button" onClick={handleGoogleRegister} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', border: 'none', borderRadius: '10px', padding: '1rem 1.8rem', cursor: 'pointer' }}>
                <Image src="/google-icon.svg" alt="Google" width={16} height={16} />
                <span style={{ marginLeft: '0.5rem' }}>Continuar con Google</span>
              </motion.button>

              <p style={{ marginTop: '2rem', fontSize: '1rem', color: '#fff' }}>¿Ya tenés cuenta? <a href="/login" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Iniciá sesión</a></p>
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
  leftSide: {
    maxWidth: '650px',
    width: '100%',
    backgroundColor: 'rgba(30, 41, 59, 0.95)',
    padding: '4rem 3rem',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    textAlign: 'center',
  },
  phrase: {
    fontSize: '1.1rem',
    color: '#fff',
    fontWeight: 700,
    marginBottom: '1.8rem',
    minHeight: '1.8rem',
  },
  heading: {
    fontSize: '2.7rem',
    marginBottom: '2.2rem',
    color: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  input: {
    padding: '1rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  checkboxContainer: {
    fontSize: '0.9rem',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
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
  googleButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '1rem 1.8rem',
    cursor: 'pointer',
  },
  error: {
    color: '#f87171',
    fontSize: '0.95rem',
  },
  linkText: {
    marginTop: '2rem',
    fontSize: '1rem',
    color: '#fff',
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};