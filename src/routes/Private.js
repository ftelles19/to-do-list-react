import { useState, useEffect } from 'react'
import { auth } from '../firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'
import { Navigate } from 'react-router-dom'

export default function Private({ children }) {
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
        };
        localStorage.setItem("@detailUser", JSON.stringify(userData));
        setSigned(true);
      } else {
        setSigned(false);
      }
      setLoading(false);
    });

    // Limpa o listener ao desmontar o componente
    return () => unsub();
  }, []);

  if (loading) {
    return <div></div>;
  }

  if (!signed) {
    return <Navigate to="/" />;
  }

  return children;
}
