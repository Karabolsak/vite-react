import "./style.css";
import Bottom from "../bottom/index.tsx";
import { motion } from "framer-motion";
import Configuracao from '../../icones/pontos-config.svg';
import TagEscolha from '../../icones/tag-escolha.svg';
import Diamante from '../../icones/diamante.svg'
import UsuarioImagem from './usuario/usuario.jpeg';
import Dinheiro from '../../icones/money.svg';
import Amigos from '../../icones/amigos.svg';
import Matchs from '../../icones/matchs.svg';
import Games from '../../icones/games.svg';
import Navegar from '../../icones/navegar.svg';
import LogoNav from "../../Squad.png";
import { useEffect, useState } from "react";
import { supabase } from "../clienteSupabase.tsx";
import { useAuth } from "../autenticacoes.tsx";
import { useNavigate } from "react-router-dom"; 
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

export default function Home() {
  const { user, isUserRegistered, logout } = useAuth(); 
  const [nomeCompleto, setNomeCompleto] = useState("Carregando...");
  const [jogoPreferido, setJogoPreferido] = useState("Carregando...");
  const navigate = useNavigate(); 
  const [imagemJogo, setImagemJogo] = useState("");

  useEffect(() => {
    if (user && isUserRegistered) {
      console.log("📥 Salvando dados no localStorage...");
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isUserRegistered", JSON.stringify(isUserRegistered));
    }
  }, [user, isUserRegistered]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;

      try {
        const userId = user.id;
        const { data, error } = await supabase
          .from("complementares")
          .select("nomeCompleto, jogoPreferido")
          .eq("usuario", userId)
          .limit(1)
          .single();

        if (error) {
          console.error("Erro ao buscar dados do usuário:", error);
          return;
        }

        if (data) {
          setNomeCompleto(data.nomeCompleto || "Sem nome");
          setJogoPreferido(data.jogoPreferido || "");

          if (data.jogoPreferido) {
            fetchJogoImagem(data.jogoPreferido);
          }
        }
      } catch (err) {
        console.error("Erro inesperado:", err);
      }
    };

    fetchUserData();
  }, [user]);

  const fetchJogoImagem = async (nomeJogo: string) => {
    try {
      const { data: jogo, error: errorJogo } = await supabase
        .from("jogos")
        .select("imagemJogo")
        .eq("nomeJogo", nomeJogo.trim())
        .single();

      if (errorJogo) {
        console.error("Erro ao buscar imagem do jogo:", errorJogo.message);
      }else if (jogo && jogo.imagemJogo) {
        setImagemJogo(jogo.imagemJogo);
      }
    } catch (err) {
      console.error("Erro inesperado ao buscar imagem do jogo:", err);
    }
  };
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
          .select("nomeCompleto, jogoPreferido")
          .eq("usuario", userId)
          .limit(1);

        if (error) {
          console.error("Erro ao buscar nome:", error);
        } else if (data.length > 0) {
          setNomeCompleto(data[0].nomeCompleto || "");
          setJogoPreferido(data[0].jogoPreferido || "");
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
  const handleLogout = async () => {
    await logout(navigate);
    navigate("/login"); 
  };
  const handleNavigation = (path: string) => {
    navigate(path);
};
  const Data = [
  { dia: "Seg", value: 100},
  { dia: "Terç", value: 20},
  { dia: "Qua", value: 50 },
  { dia: "Qui", value: 70 },
  { dia: "Sex", value: 10 }, 
  { dia: "Sab", value: 60 },
  { dia: "Dom", value: 90 },
]

  return (
    <div className="conteudoHOME">
      <div className="navegacaoTOP">
        <ul>
          <li>
            <img src={LogoNav} alt="logo" className="TOP-logo" onClick={handleLogout} />
          </li>
          <li>
            <p>Squad</p>
          </li>
          <li>
            <img src={Configuracao} alt="Configuração" className="TOP-img" />
          </li>
        </ul>
      </div>
      <motion.div 
        className="conteudoPERFIL"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
        >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.3 }}
          >  
          <div className="descritivoPERFIL">
            <img src={TagEscolha} alt="titulo de escolha"  className="TAG"/>
            <h2>Conquistador</h2>
          </div>
          <div>
            <h1 className="boasVINDAS">Olá, {nomeCompleto} </h1>
          </div>
          <div className="descritivoPERFIL">
            <img src={Diamante} alt="gold trocavel" />
            <p>2.500</p>
            <img src={Dinheiro} alt="gold monetario" />
            <p>150</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.3 }}
          >
          <img className="fotoUsuario" src={UsuarioImagem} alt="" />
        </motion.div> 
      </motion.div>
      <div className="conteudoPreferidos">
        <motion.div 
          className="preferido"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.1, delay: 0.5 }}
          >
            <h1>Jogo preferido</h1>
            <img src={imagemJogo} alt="" />
            <h1>{jogoPreferido} </h1>
        </motion.div>
        <motion.div 
          className="preferido"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 1 }}
          onClick={() => handleNavigation("/jogos")}
          >
            <h1>Novos jogos</h1>
            <img src={Games} alt="" />
            <h1>Buscar</h1>
        </motion.div>
      </div>
      <div className="conteudoPreferidos">
        <motion.div 
          className="preferido"
          initial={{opacity: 0, scale: 0.8}}
          animate={{ opacity: 1, scale: 1}}
          transition={{ duration: 1, delay: 1.5}}
          >
            <h1>Amigos</h1>
            <img src={Amigos} alt="" />
            <h1>15</h1>
        </motion.div>
        <motion.div 
          className="preferido"
          initial={{opacity: 0, scale: 0.8}}
          animate={{ opacity: 1, scale: 1}}
          transition={{ duration: 1, delay: 2}}
          onClick={() => handleNavigation("/matchs")}
          >
            <h1>Novos Matchs</h1>
            <img src={Matchs} alt="" />
            <h1>Buscar</h1>
        </motion.div>
      </div>
      <motion.div 
        className="conteudoDISPONIBILIDADE"
        initial={{opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5}}
      >
        <div className="disponibilidadeJOGAR">
          <h1>Disponibilidade</h1>
          <img src={Navegar} alt="navegação" onClick={() => handleNavigation("/disponibilidade")}/>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="ContainerDisponibildiade"
        >
          <ResponsiveContainer>
            <BarChart data={Data} barSize={25}>
              <XAxis dataKey="dia" />
              <Bar
                dataKey="value"
                fill="#00E676"
                radius={[10, 10, 0, 0]}
                />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </motion.div>
      
      
      <Bottom />
    </div>
  );
}
