import './style.css'
import Usuario from '../home/usuario/usuario.jpg';
import Logo from './usuario/logo.png';
import { motion } from 'framer-motion';
import Menu from './constante.tsx';
import jogos from '../../public/assets/joystick_1.png';
import estatistica from '../../public/assets/statistics_1.png';
import conectado from '../../public/assets/conection_1.png';
import mission from '../../public/assets/mission_1.png';
import home from '../../public/assets/home_1.png';
import jogosAtivo from '../../public/assets/joystick_2.png';
import estatisticaAtivo from '../../public/assets/statistics_2.png';
import conectadoAtivo from '../../public/assets/conection_2.png';
import homeAtivo from '../../public/assets/home_2.png';
import missionAtivo from '../../public/assets/mission_2.png';
import Social from '../../public/assets/social.png';
import LogoNav from '../../Squad.png';
import Config from '../../public/assets/config_1.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home () {
    const [active, setActive] = useState<string>("home");
    const navigate = useNavigate();

    const handleNavigation = (path: string, name: string) => {
        setActive(name);
        navigate(path);
    };
    const handleSocialClick = () => {
        navigate('/Notificacao');
    };

    return (      
        <div className='conteudoHOME'>
            <div className='navegacaoTOP'>
                <ul>
                    <li>
                        <img src={Social} alt="Social" className='TOP-usuario' onClick={handleSocialClick} />
                    </li>
                    <li>
                        <img src={LogoNav} alt="Logo" className='TOP-logo' />
                    </li>
                    <li>
                        <img src={Config} alt="Configuração" className='TOP-img' />
                    </li>
                </ul>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}>
                    <h3>Olá, Gabriel</h3>
            </motion.div>
            <div className='perfilHOME'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: 0.3 }}>
                            <img src={Usuario} alt="foto de usuario" className='IMG-user' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}> 
                            <div>
                                <p>Ranking</p>
                                <motion.img 
                                    src={Logo}
                                    alt='Ranking'
                                    className='ranking-User'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1}}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                />
                            </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.5, delay: 0.7 }}>
                            <p>Partidas</p>
                            <p>234</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.5, delay: 0.7 }}>
                            <p>Amigos</p>
                            <p>15</p>
                    </motion.div>                                      
            </div>
            <div>
                <ul>
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.1, delay: 0.3 }}>
                                <p>Jogos</p>
                                <p>5</p>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}>
                                <p>Pontos</p>
                                <p>31.578</p>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1}}
                            transition={{ duration: 0.5, delay: 0.3 }}>
                                <p>Avaliação</p>
                                <p>*****</p>
                        </motion.div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.3}}>
                                <p>Destaque</p>
                                <p>Valorant</p>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9, delay: 0.3 }}>
                                <p>Nickname</p>
                                <p>Jorjão Matador</p>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.1, delay: 0.3 }}>
                                <p>Ranking</p>
                                <p>Bronze</p>
                        </motion.div>
                    </li>
                </ul>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}>
                    <Menu />
            </motion.div>
            <nav className='navagecaoBOT'>
                <ul>
                    <li className='BOTlista'>
                        <img 
                            src={active === "jogos" ? jogosAtivo : jogos} 
                            alt="Jogos"
                            className={`navegadores ${active === "jogos" ? "active" : ""}`} 
                            onClick={() => handleNavigation("/jogos", "jogos")}
                        />
                    </li>
                    <li className='BOTlista'>
                        <img 
                            src={active === "estatistica" ? estatisticaAtivo : estatistica} 
                            alt="estatisticas"
                            className={`navegadores ${active === "estatistica" ? "active" : ""}`} 
                            onClick={() => handleNavigation("/estatistica", "estatistica")}    
                        />
                    </li>  
                    <li className='BOTlista'>
                        <img 
                            src={active === "conectado" ? conectadoAtivo : conectado}
                            alt="Conexões" 
                            className={`navegadores ${active === "conectado" ? "active" : ""}`}
                            onClick={() => handleNavigation("/conectado", "conectado")}
                        />
                    </li>    
                    <li className='BOTlista'>
                        <img 
                            src={active === "mission" ? missionAtivo : mission}
                            alt="Missões"
                            className={`navegadores ${active === "mission" ? "active" : ""}`}
                            onClick={() => handleNavigation("/mission", "mission")} 
                        />
                    </li>
                    <li className='BOTlista'>
                        <img 
                            src={active === "home" ? homeAtivo : home}
                            alt="home" 
                            className={`navegadores ${active === "home" ? "active" : ""}`}
                            onClick={() => handleNavigation("/home", "home")}
                        />
                    </li>              
                </ul>
            </nav>
        </div>  
    )
}