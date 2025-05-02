import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { enviarTokenAlBackend } from "../services/authService";

const LoginButton: React.FC = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();

      console.log("✅ Token:", token);

      // 👉 Llamamos a nuestro backend
      const backendResponse = await enviarTokenAlBackend(token);
      console.log("📡 Respuesta del backend:", backendResponse);

    } catch (error) {
      console.error("❌ Error al iniciar sesión:", error);
    }
  };

  return (
    <button onClick={handleLogin}>
      Iniciar sesión con Google
    </button>
  );
};

export default LoginButton;
