import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import ProtectedRoute from '../components/ProtectedRoute';
import Navbar from '../components/Navbar';

export default function Perfil() {
  const [user, loading] = useAuthState(auth);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [provider, setProvider] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  // ✅ Eliminado: const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const userRef = doc(db, 'usuarios', user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const data = userSnap.data();
            setNombre(data.nombre || '');
            setEmail(data.email || user.email);
            setProvider(user.providerData[0]?.providerId === 'google.com' ? 'Google' : 'Email/Contraseña');
          }
        } catch (err) {
          console.error('Error al obtener perfil:', err);  // ✅ Obligatorio para ESLint
          setError('Error al cargar los datos del perfil.');
        }
      }
    };

    if (user && !loading) fetchData();
  }, [user, loading]);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const userRef = doc(db, 'usuarios', user.uid);
      await updateDoc(userRef, { nombre });
      setSuccess('✅ Nombre actualizado correctamente');
    } catch (err) {
      console.error(err);  // ✅ Obligatorio para ESLint
      setError('❌ Error al actualizar el nombre');
    } finally {
      setSaving(false);
    }
  };

  return (
    <ProtectedRoute>
      <Head>
        <title>Editar Perfil | EduWealth</title>
      </Head>

      <Navbar />

      <div style={styles.container}>
        <h1 style={styles.title}>📝 Editar Perfil</h1>
        <p style={styles.subtitle}>Modificá tus datos personales</p>

        <form onSubmit={handleSave} style={styles.form}>
          <label>Nombre completo</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={styles.input}
            required
          />

          <label>Email (no editable)</label>
          <input
            type="email"
            value={email}
            disabled
            style={{ ...styles.input, backgroundColor: '#f1f5f9', color: '#64748b' }}
          />

          <label>Método de acceso</label>
          <input
            type="text"
            value={provider}
            disabled
            style={{ ...styles.input, backgroundColor: '#f1f5f9', color: '#64748b' }}
          />

          {error && <p style={styles.error}>{error}</p>}
          {success && <p style={styles.success}>{success}</p>}

          <button
            type="submit"
            style={{ ...styles.button, opacity: saving ? 0.6 : 1 }}
            disabled={saving}
          >
            {saving ? 'Guardando...' : 'Guardar cambios'}
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '4rem auto',
    padding: '2rem',
    fontFamily: 'Inter, sans-serif',
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '0.5rem',
    color: '#1e293b',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1rem',
    color: '#64748b',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#0f766e',
    color: '#fff',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  error: {
    color: '#dc2626',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
  success: {
    color: '#16a34a',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
};