import { useNavigate } from "react-router-dom";
import { useAuth } from "./autenticacoes.tsx";
import { supabase } from "./clienteSupabase.tsx";
import { useState, useEffect, useRef } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isUserRegistered, setIsUserRegistered] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const hasNavigated = useRef(false); 

  useEffect(() => {
    if (!user) {
      console.log("🔒 Usuário não autenticado! Redirecionando para /login...");
      if (!hasNavigated.current) {
        hasNavigated.current = true;
        navigate("/login", { replace: true });
      }
      return;
    }

    const checkUserRegistration = async () => {
      console.log("🔄 Verificando se o usuário está registrado...");

      const { data, error } = await supabase
        .from("complementares")
        .select("usuario")
        .eq("usuario", user.id)
        .single();

      if (error && error.code !== "PGRST116") {
        console.error("Erro ao verificar usuário:", error.message);
      }

      setIsUserRegistered(!!data);
      setLoading(false);
    };

    checkUserRegistration();
  }, [user, navigate]);

  useEffect(() => {
    if (loading || isUserRegistered === null || hasNavigated.current) return;

    hasNavigated.current = true; 

    if (isUserRegistered) {
      console.log("✅ Usuário registrado! Redirecionando para /home...");
      navigate("/home", { replace: true });
    } else {
      console.log("⚠️ Usuário não registrado! Redirecionando para /cadastro...");
      navigate("/cadastro", { replace: true });
    }
  }, [loading, isUserRegistered, navigate]);

  if (loading) {
    return <div>🔄 Carregando...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
