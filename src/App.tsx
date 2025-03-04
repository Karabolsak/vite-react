import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Jogos from "./jogos/index.tsx";
import Cadastro from "./cadastro/index.tsx";
import Loja from "./loja/index.tsx";
import Home from "./home/index.tsx";
import Login from "./login/index.tsx";
import Pet from "./pet/index.tsx";
import Matchs from './matchs/index.tsx';
import Disponibilidade from "./disponibilidade/index.tsx";
import DinamicaJogos from "./jogos/dinamica/index.tsx";
import ProtectedRoute from "./protecaoRota.tsx";
import { AuthProvider, useAuth } from "./autenticacoes.tsx";
import { useEffect, useState } from "react";
import { supabase } from './clienteSupabase.tsx';

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
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isUserRegistered, setIsUserRegistered] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    const checkUserRegistration = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      console.log("🔄 Verificando usuário na tabela complementares...");

      const { data, error } = await supabase
        .from("complementares")
        .select("usuario")
        .eq("usuario", user.id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          console.log("⚠️ Nenhum dado encontrado.");
        } else {
          console.error("Erro ao buscar dados:", error);
        }
      } else {
        
        setIsUserRegistered(!!data);
      }

      setLoading(false);
    };

    checkUserRegistration();
  }, [user]);

  useEffect(() => {
    if (user && isUserRegistered !== null) {
      setRedirected(true);

      if (isUserRegistered) {
        console.log("✅ Usuário registrado! Redirecionando para /home...");
        navigate("/home");
      } else {
        console.log("⚠️ Usuário não registrado! Redirecionando para /cadastro...");
        navigate("/cadastro");
      }
    }
  }, );

  return (
    <Routes>
      <Route path="/" element={user ? (isUserRegistered ? <Navigate to="/home" /> : <Navigate to="/cadastro" />) : <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<ProtectedRoute><Cadastro /></ProtectedRoute>} />
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/loja" element={<ProtectedRoute><Loja /></ProtectedRoute>} />
      <Route path="/pet" element={<ProtectedRoute><Pet /></ProtectedRoute>} />
      <Route path="/jogos" element={<ProtectedRoute><Jogos /></ProtectedRoute>} />
      <Route path="/matchs" element={<ProtectedRoute><Matchs /></ProtectedRoute>} />
      <Route path="/disponibilidade" element={<ProtectedRoute><Disponibilidade /></ProtectedRoute>} />
      <Route path="/dinamicajogos" element={<ProtectedRoute><DinamicaJogos /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
