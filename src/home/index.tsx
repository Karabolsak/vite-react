import "./style.css";
import Bottom from "../bottom/index.tsx";
import Logo from "./usuario/logo.png";
import { motion } from "framer-motion";
import Menu from "./constante.tsx";
import Config from "../../public/assets/config_1.png";
import LogoNav from "../../Squad.png";
import { useEffect, useState } from "react";
import { supabase } from "../clienteSupabase.tsx";
import { useAuth } from "../autenticacoes.tsx";
import { useNavigate } from "react-router-dom"; // 🔹 Adicione o useNavigate

export default function Home() {
  const { user, isUserRegistered, logout } = useAuth(); // 🔹 Certifique-se de pegar o logout
  const [nomeCompleto, setNomeCompleto] = useState("Carregando...");
  const [jogoPreferido, setJogoPreferido] = useState("Carregando...");
  const [nomeUsuario, setNomeUsuario] = useState("Carregando...");
  const navigate = useNavigate(); // 🔹 Certifique-se de ter o useNavigate

  useEffect(() => {
    if (user && isUserRegistered) {
      console.log("📥 Salvando dados no localStorage...");
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isUserRegistered", JSON.stringify(isUserRegistered));
    }
  }, [user, isUserRegistered]);

  useEffect(() => {
    const fetchNomeCompleto = async () => {
      try {
        const { data: userData, error: userError } = await supabase.auth.getUser();
        if (userError || !userData?.user) {
          console.error("Erro ao obter usuário:", userError);
          return;
        }

        const userId = userData.user.id;
        const { data, error } = await supabase
          .from("complementares")
          .select("nomeCompleto, jogoPreferido, nomeUsuario")
          .eq("usuario", userId)
          .limit(1);

        if (error) {
          console.error("Erro ao buscar nome:", error);
        } else if (data.length > 0) {
          setNomeCompleto(data[0].nomeCompleto || "");
          setJogoPreferido(data[0].jogoPreferido || "");
          setNomeUsuario(data[0].nomeUsuario || "");
        } else {
          setNomeCompleto("");
          setJogoPreferido("");
        }
      } catch (err) {
        console.error("Erro inesperado:", err);
      }
    };

    fetchNomeCompleto();
  }, []);

  // 🔹 Função de logout dentro do Home.tsx
  const handleLogout = async () => {
    await logout(navigate);
    navigate("/login"); // 🔹 Redireciona o usuário após o logout
  };

  return (
    <div className="conteudoHOME">
      <div className="navegacaoTOP">
        <ul>
          <li>
            {/* 🔹 Adicionei onClick={() => handleLogout()} para chamar o logout corretamente */}
            <img src={LogoNav} alt="logo" className="TOP-logo" onClick={handleLogout} />
          </li>
          <li>
            <p>Squad</p>
          </li>
          <li>
            <img src={Config} alt="Configuração" className="TOP-img" />
          </li>
        </ul>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2, delay: 0.3 }}>
        <h3>Olá, {nomeCompleto}</h3>
      </motion.div>

      <div className="perfilHOME">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <div className="perfilHOME-P">
            <p>Ranking</p>
            <motion.img
              src={Logo}
              alt="Ranking"
              className="ranking-User"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="perfilHOME-P">
          <p>Partidas</p>
          <p>234</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="perfilHOME-P">
          <p>Amigos</p>
          <p>15</p>
        </motion.div>
      </div>

      <div className="informacoesHOME">
        <ul>
          <li className="informacoesLista">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.1, delay: 0.3 }}>
              <h1>Jogos</h1>
              <h3>5</h3>
            </motion.div>
          </li>
          <li>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.3 }}>
              <h1>Pontos</h1>
              <h3>31.578</h3>
            </motion.div>
          </li>
          <li>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <h1>Avaliação</h1>
              <h3>*****</h3>
            </motion.div>
          </li>
        </ul>
        <ul>
          <li>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
              <h1>Destaque</h1>
              <h3>{jogoPreferido}</h3>
            </motion.div>
          </li>
          <li>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}>
              <h1>Nickname</h1>
              <h3>{nomeUsuario}</h3>
            </motion.div>
          </li>
          <li>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.3 }}>
              <h1>Ranking</h1>
              <h3>Bronze</h3>
            </motion.div>
          </li>
        </ul>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
        <Menu />
      </motion.div>

      <Bottom />
    </div>
  );
}
