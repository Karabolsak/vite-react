import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./clienteSupabase";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setIsAuthenticated(!!data.user); // Define true se o usuário estiver autenticado
    };
    
    checkUser();
  }, []);

  if (isAuthenticated === null) {
    return <p>Carregando...</p>; // Mostra um loading enquanto verifica
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
