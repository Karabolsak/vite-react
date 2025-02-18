import { Navigate } from "react-router-dom";
import { useAuth } from "./autenticacoes.tsx";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isUserRegistered, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (isUserRegistered === false) {
    return <Navigate to="/cadastro" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;