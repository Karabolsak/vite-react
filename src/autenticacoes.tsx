import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./clienteSupabase.tsx";

interface AuthContextType {
  user: any;
  isUserRegistered: boolean | null;
  loading: boolean;
  logout: (navigate: (path: string) => void) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [isUserRegistered, setIsUserRegistered] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
  
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        console.warn("⚠️ Nenhum usuário logado.");
        setUser(null);
        setIsUserRegistered(null);
        setLoading(false);
        return;
      }
  
      console.log("✅ UID do usuário autenticado:", session.user.id);
      setUser(session.user);
  
      const { data, error } = await supabase
        .from("complementares")
        .select("usuario")
        .eq("usuario", session.user.id);
  
      if (error) {
        console.error("❌ Erro ao buscar usuário na tabela complementares:", error);
        setIsUserRegistered(false);
      } else {
        console.log("🔍 Resultado da busca via Supabase:", data);
        setIsUserRegistered(data.length > 0);
      }
  
      setLoading(false);
    };
  
    // ✅ Monitorar mudanças na sessão para atualizar o estado
    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      fetchUser();
    });
  
    fetchUser();
  
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const logout = async (navigate: (path: string) => void) => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setIsUserRegistered(null);
      localStorage.removeItem("user");
      localStorage.removeItem("isUserRegistered");
      console.log("👋 Usuário deslogado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error("❌ Erro ao deslogar:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isUserRegistered, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
