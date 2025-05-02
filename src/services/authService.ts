// src/services/authService.ts
import axios from "axios";

const API_URL = "https://tudominio.execute-api.us-east-1.amazonaws.com/dev"; // ← cambia esto luego

export const enviarTokenAlBackend = async (token: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth`, { token });
    return response.data;
  } catch (error) {
    console.error("❌ Error al enviar el token al backend:", error);
    throw error;
  }
};
