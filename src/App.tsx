import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Jogos from "./jogos/index.tsx";
import Cadastro from "./cadastro/index.tsx";
import Estatistica from "./estatistica/index.tsx";
import Home from "./home/index.tsx";
import Login from "./login/index";
import ProtectedRoute from "./protecaoRota.tsx";
import { useEffect, useState } from "react";
import { supabase } from "./clienteSupabase.tsx";

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

const AppRoutes = () => {
  const [user, setUser] = useState<any>(null);
  const [isUserRegistered, setIsUserRegistered] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        console.error("Erro ao obter sessão:", sessionError);
        setLoading(false);
        return;
      }

      if (session?.user) {
        console.log("UID do usuário:", session.user.id);
        setUser(session.user);

        
        const { data, error } = await supabase
          .from("complementares")
          .select("usuario")
          .eq("usuario", session.user.id)
          .maybeSingle();

        if (error) {
          console.error("Erro ao buscar usuário na tabela:", error);
          setIsUserRegistered(false);
        } else {
          console.log("Usuário encontrado no banco:", data);
          setIsUserRegistered(!!data);
        }
      } else {
        setIsUserRegistered(false);
      }

      setLoading(false);
    }

    fetchUser();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={user ? <Cadastro /> : <Navigate to="/login" />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/estatistica" element={<Estatistica />} />
        <Route path="/jogos" element={<Jogos />} />
      </Route>
      {isUserRegistered === false && <Navigate to="/cadastro" replace />}
    </Routes>
  );
};

export default App;
