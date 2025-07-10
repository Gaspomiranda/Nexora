import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';  // ✅ Agregado
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const [isClient, setIsClient] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/');
  };

  return (
    <nav style={styles.navbar}>
      <motion.div
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={styles.logo}
      >
        <Link href="/">
          <Image
            src="/nexora-logo.png"
            alt="Nexora"
            width={130}
            height={40}
            style={{ borderRadius: '8px', boxShadow: '0 0 10px rgba(255, 255, 255, 0.15)' }}
          />
        </Link>
      </motion.div>

      {isClient && (
        <div style={styles.links}>
          {!loading && user ? (
            <>
              <motion.div
                whileTap={{ scale: 1.2 }}
                style={{ cursor: 'pointer', position: 'relative' }}
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell size={22} color="#fff" />
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    style={styles.notificationPanel}
                  >
                    <p style={{ color: '#fff' }}>No hay notificaciones aún.</p>
                  </motion.div>
                )}
              </motion.div>

              <div style={styles.profile} onClick={() => router.push('/dashboard')}>
                {user.photoURL ? (
                  <Image
                    src={user.photoURL}
                    alt="Avatar"
                    width={40}
                    height={40}
                    style={{ borderRadius: '50%' }}
                  />
                ) : (
                  <div style={styles.defaultAvatar}>👤</div>
                )}
              </div>

              <motion.button
                onClick={handleLogout}
                style={styles.glassButton}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                Cerrar sesión
              </motion.button>
            </>
          ) : (
            <>
              <motion.a
                href="/login"
                style={styles.glassButton}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.95 }}
              >
                Iniciar sesión
              </motion.a>
              <motion.a
                href="/register"
                style={styles.glassButton}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.95 }}
              >
                Registrarse
              </motion.a>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#0f172a',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    width: '100%',
    boxSizing: 'border-box',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    position: 'relative',
  },
  glassButton: {
    padding: '0.6rem 1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    color: '#ffffff',
    fontWeight: 500,
    fontSize: '0.95rem',
    textDecoration: 'none',
    cursor: 'pointer',
    backdropFilter: 'blur(4px)',
    transition: 'all 0.3s ease',
  },
  profile: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e2e8f0',
  },
  defaultAvatar: {
    fontSize: '1.2rem',
    color: '#475569',
  },
  notificationPanel: {
    position: 'absolute',
    top: '2.5rem',
    right: 0,
    backgroundColor: '#1e293b',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    minWidth: '200px',
    zIndex: 100,
  },
};

export default Navbar;