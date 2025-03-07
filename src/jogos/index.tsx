import "./style.css";
import { useEffect, useState } from "react";
import { supabase } from "../clienteSupabase.tsx";
import Back from "../../icones/navegar.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Jogo {
  id: number;
  imagemJogo: string;
  genero: string;
}

export default function Jogos() {
  const [jogos, setJogos] = useState<Jogo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJogos = async () => {
      const { data, error } = await supabase.from("jogos").select("id, imagemJogo, genero");
      if (error) {
        console.error("Erro ao buscar jogos:", error);
      } else {
        setJogos(data || []);
      }
    };
    fetchJogos();
  }, []);

  const handleNavigation = (id: number) => {
    navigate(`/dinamicaJogos/${id}`);
  };

  const renderJogosPorGenero = (genero: string, delay: number) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <h1>{genero}</h1>
      <ul>
        <li>
          {jogos
            .filter((jogo) => jogo.genero === genero)
            .map((jogo) => (
              <img
                key={jogo.id}
                className="imagemGAMES"
                src={jogo.imagemJogo}
                alt={genero}
                onClick={() => handleNavigation(jogo.id)}
              />
            ))}
        </li>
      </ul>
    </motion.div>
  );

  return (
    <div className="conteudoJOGOS">
      <div className="BotaoRETORNO">
        <img src={Back} alt="Voltar" onClick={() => navigate("/home")} />
      </div>
      {renderJogosPorGenero("RPG", 0.5)}
      {renderJogosPorGenero("Tiro", 0.7)}
      {renderJogosPorGenero("Simulação", 0.9)}
    </div>
  );
}
