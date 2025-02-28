import "./style.css";
import Bottom from "../bottom/index.tsx";
import { motion } from "framer-motion";

import Configuracao from '../../icones/pontos-config.svg';
import TagEscolha from '../../icones/tag-escolha.svg';
import Diamante from '../../icones/diamante.svg'
import UsuarioImagem from './usuario/usuario.jpg';
import Dinheiro from '../../icones/money.svg';
import Amigos from '../../icones/amigos.svg';
import Matchs from '../../icones/matchs.svg';
import Games from '../../icones/games.svg';


import LogoNav from "../../Squad.png";
import { useEffect, useState } from "react";
import { supabase } from "../clienteSupabase.tsx";
import { useAuth } from "../autenticacoes.tsx";
import { useNavigate } from "react-router-dom"; 

export default function Home() {
  const { user, isUserRegistered, logout } = useAuth(); 
  const [nomeCompleto, setNomeCompleto] = useState("Carregando...");
  const [jogoPreferido, setJogoPreferido] = useState("Carregando...");
  const navigate = useNavigate(); 

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
            <h1>Game preferido</h1>
            <img src={UsuarioImagem} alt="" />
            <h1>{jogoPreferido} </h1>
        </motion.div>
        <motion.div 
          className="preferido"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 1 }}
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
          >
            <h1>Novos Matchs</h1>
            <img src={Matchs} alt="" />
            <h1>Buscar</h1>
        </motion.div>
      </div>
      
      






      

      

      

      

      <Bottom />
    </div>
  );
}
