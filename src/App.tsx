import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Jogos from "./jogos/index.tsx";
import Cadastro from "./cadastro/index.tsx";
import Estatistica from "./estatistica/index.tsx";
import Home from "./home/index.tsx";
import Login from "./login/index.tsx";
import Conversas from "./conversas/index.tsx";
import ProtectedRoute from "./protecaoRota.tsx";
import { AuthProvider, useAuth } from "./autenticacoes.tsx";
import { useEffect, useState } from "react";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

const AppRoutes = () => {
  const { user, isUserRegistered, loading } = useAuth();
  const navigate = useNavigate();
  const [redirected, setRedirected] = useState(false); // 👈 Estado para controlar redirecionamento
  
  useEffect(() => {
    console.log("🔄 Monitorando mudanças: user:", user, "isUserRegistered:", isUserRegistered);

    if (!redirected && user && isUserRegistered !== null) {
      if (isUserRegistered) {
        console.log("✅ Usuário registrado! Redirecionando para /home...");
        navigate("/home");
      } else {
        console.log("⚠️ Usuário não registrado! Redirecionando para /cadastro...");
        navigate("/cadastro");
      }
      setRedirected(true); // 👈 Marca que o redirecionamento foi feito
    }
  }, [user, isUserRegistered, navigate, redirected]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={user ? (isUserRegistered ? <Navigate to="/home" /> : <Navigate to="/cadastro" />) : <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<ProtectedRoute><Cadastro /></ProtectedRoute>} />
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/estatistica" element={<ProtectedRoute><Estatistica /></ProtectedRoute>} />
      <Route path="/conversas" element={<ProtectedRoute><Conversas /> </ProtectedRoute>} />
      <Route path="/jogos" element={<ProtectedRoute><Jogos /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
