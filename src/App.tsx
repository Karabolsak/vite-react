import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jogos from "./jogos/index.tsx";
import Mission from "./mission/index.tsx";
import Navegacao from "./navegacao/index.tsx";
import Estatistica from "./estatistica/index.tsx";
import Conectado from "./conectados/index.tsx";
import Home from "./home/index.tsx";
import Social from "./navegacao/index.tsx";
import NavegacaoSuperior from "./superior/superior.tsx";
import Notificacao from "./notificacoes/index.tsx";

import { AuthProvider } from "../src/authContext.tsx";
import Login from "../src/login/index.tsx";
import ProtectedRoute from "../src/rotaPrincipal.tsx";

const Dashboard = () => <h1>Área Protegida</h1>;

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavegacaoSuperior />
        <div className="content">
          <Routes>
            {/* Rota pública */}
            <Route path="/login" element={<Login />} />

            {/* Rotas protegidas */}
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/jogos" element={<ProtectedRoute><Jogos /></ProtectedRoute>} />
            <Route path="/mission" element={<ProtectedRoute><Mission /></ProtectedRoute>} />
            <Route path="/estatistica" element={<ProtectedRoute><Estatistica /></ProtectedRoute>} />
            <Route path="/conectado" element={<ProtectedRoute><Conectado /></ProtectedRoute>} />
            <Route path="/social" element={<ProtectedRoute><Social /></ProtectedRoute>} />
            <Route path="/notificacao" element={<ProtectedRoute><Notificacao /></ProtectedRoute>} />
          </Routes>
        </div>
        <Navegacao />
      </Router>
    </AuthProvider>
  );
};

export default App;
