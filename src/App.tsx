import React from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth } from "./auth/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Bienvenido a la App</h1>

      {user ? (
        <div>
          <p>Sesión iniciada como: <strong>{user.displayName}</strong></p>
          <p>Email: {user.email}</p>
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;
