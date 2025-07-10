// components/ProtectedRoute.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const publicRoutes = ['/', '/login', '/register', '/reset-password'];

    if (!loading && !user && !publicRoutes.includes(router.pathname)) {
      router.push('/login');
    }
  }, [user, loading, router]);  // ✅ Agregué "router" en lugar de solo "router.pathname"

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '3rem', color: '#fff' }}>Cargando...</p>;
  }

  return <>{children}</>;
}