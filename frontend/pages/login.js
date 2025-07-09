import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, signInWithGoogle } from '../lib/firebase';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const phrases = [
    'Potenciá tu futuro financiero',
    'Invertí en tu conocimiento',
    'El primer paso hacia tu libertad financiera',
    'Aprendé. Crecé. Invertí.',
    'Construí tu camino hacia la libertad financiera',
    'La libertad financiera comienza con una decisión',
    'Invertir en vos es el mejor negocio'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!captchaVerified) {
      setError('Por favor verificá el CAPTCHA.');
      return;
    }

    if (!email.includes('@') || email.length < 5) {
      setError('Por favor ingresá un correo válido.');
      return;
    }

    if (loginAttempts >= 5) {
      setError('Demasiados intentos fallidos. Intentalo más tarde.');
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (err) {
      setError('Correo o contraseña inválidos');
      setLoginAttempts(prev => prev + 1);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (!captchaVerified) {
      setError('Por favor verificá el CAPTCHA.');
      return;
    }

    try {
      await signInWithGoogle();
      router.push('/');
    } catch (err) {
      setError('Error al iniciar sesión con Google');
    }
  };

  return (
    <>
      <Head>
        <title>Iniciar sesión | Nexora</title>
        <meta name="description" content="Accedé a tu cuenta de Nexora para gestionar tu libertad financiera." />
        <link rel="icon" href="/logo-nexora.svg" />
      </Head>

      <div style={styles.pageContainer}>
        <Navbar />

        <main style={styles.main}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={styles.card}
          >
            <motion.p
              key={phraseIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={styles.phrase}
            >
              {phrases[phraseIndex]}
            </motion.p>

            <h1 style={styles.heading}>Iniciar sesión</h1>

            <form onSubmit={handleLogin} style={styles.form}>
              <div style={styles.inputRow}>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styles.input}
                />
                <div style={{ position: 'relative', flex: 1 }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ ...styles.input, paddingRight: '2.5rem' }}
                  />
                  <span onClick={() => 
              setShowPassword(!showPassword)} 
              style={styles.eyelcon}>
                 {showPassword ? '👀' : '🤫'}
                </span>
               </div>
             </div>

              <div style={{ margin: '1rem 0' }}>
                <ReCAPTCHA
                  sitekey="6LcetHcrAAAAALmvlKQJ4xvVTJlnWo05AvlRST0v"
                  onChange={() => setCaptchaVerified(true)}
                />
              </div>

              {error && <p style={styles.error}>{error}</p>}

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#2563eb', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                style={styles.ctaButton}
                disabled={loading}
              >
                {loading ? 'Cargando...' : 'Ingresar'}
              </motion.button>
            </form>

            <div style={{ marginTop: '1.8rem' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGoogleLogin}
                style={styles.googleButton}
              >
                <Image src="/google-icon.svg" alt="Google" width={16} height={16} />
                <span style={{ marginLeft: '0.5rem', fontWeight: '500', fontSize: '0.95rem' }}>Iniciar con Google</span>
              </motion.button>
            </div>

            <p style={styles.forgot} onClick={() => router.push('/reset-password')}>¿Olvidaste tu contraseña?</p>

            <p style={styles.linkText}>
              ¿No tenés una cuenta?{' '}
              <span style={styles.link} onClick={() => router.push('/register')}>Registrate</span>
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
    fontFamily: 'Inter, sans-serif',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4rem 2rem',
  },
  card: {
    maxWidth: '650px',
    width: '100%',
    backgroundColor: 'rgba(30, 41, 59, 0.95)',
    padding: '4rem 3rem',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    textAlign: 'center',
  },
  phrase: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '1.5rem',
    minHeight: '1.8rem',
  },
  heading: {
    fontSize: '2.7rem',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inputRow: {
    display: 'flex',
    gap: '1rem',
  },
  input: {
    flex: 1,
    padding: '1.1rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '1rem',
  },
  eyeIcon: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  ctaButton: {
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
  forgot: {
    marginTop: '1.5rem',
    fontSize: '0.95rem',
    color: '#3b82f6',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  linkText: {
    marginTop: '1rem',
    fontSize: '1rem',
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  error: {
    color: '#f87171',
    fontSize: '0.95rem',
  },
};