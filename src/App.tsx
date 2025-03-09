import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jogos from "./jogos/index.tsx";
import Cadastro from "./cadastro/index.tsx";
import Home from "./home/index.tsx";
import Login from "./login/index.tsx";
import Matchs from './matchs/index.tsx';
import Disponibilidade from "./disponibilidade/index.tsx";
import DinamicaJogos from "./jogos/dinamica/index.tsx";
import SalvarJogos from "./jogos/salvar/index.tsx";
import ProtectedRoute from "./protecaoRota.tsx";
import { AuthProvider } from "./autenticacoes.tsx";

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
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<ProtectedRoute><Cadastro /></ProtectedRoute>} />
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/jogos" element={<ProtectedRoute><Jogos /></ProtectedRoute>} />
      <Route path="/matchs" element={<ProtectedRoute><Matchs /></ProtectedRoute>} />
      <Route path="/disponibilidade" element={<ProtectedRoute><Disponibilidade /></ProtectedRoute>} />
      <Route path="/dinamicajogos/:id" element={<ProtectedRoute><DinamicaJogos /></ProtectedRoute>} />
      <Route path="/salvar" element={<ProtectedRoute><SalvarJogos /></ProtectedRoute>} />
    </Routes>
  );
};

export default App;
