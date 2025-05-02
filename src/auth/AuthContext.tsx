// src/auth/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

// Creamos el contexto
const AuthContext = createContext<{ user: User | null }>({ user: null });

// Hook para acceder fácilmente al contexto
export const useAuth = () => useContext(AuthContext);

// Provider que rodeará nuestra app
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Escuchar cambios en la sesión de usuario
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe(); // Limpiar el listener
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
