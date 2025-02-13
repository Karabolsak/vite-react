import './style.css'
import Bottom from '../bottom/index.tsx';
import Usuario from '../home/usuario/usuario.jpg';
import Logo from './usuario/logo.png';
import { motion } from 'framer-motion';
import Menu from './constante.tsx';
import Social from '../../public/assets/social.png';
import Config from '../../public/assets/config_1.png';
import LogoNav from '../../Squad.png';
import { useNavigate } from "react-router-dom";


export default function Home () {

    const navigate = useNavigate();   
    const handleSocialClick = () => {
        navigate('/');
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
                            <div className='perfilHOME-P'>
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
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className='perfilHOME-P'>
                            <p>Partidas</p>
                            <p>234</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className='perfilHOME-P'>
                            <p>Amigos</p>
                            <p>15</p>
                    </motion.div>                                      
            </div>
            <div className='informacoesHOME'>
                <ul>
                    <li className='informacoesLista'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.1, delay: 0.3 }}>
                                <h1>Jogos</h1>
                                <h3>5</h3>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}>
                                <h1>Pontos</h1>
                                <h3>31.578</h3>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1}}
                            transition={{ duration: 0.5, delay: 0.3 }}>
                                <h1>Avaliação</h1>
                                <h3>*****</h3>
                        </motion.div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.3}}>
                                <h1>Destaque</h1>
                                <h3>Valorant</h3>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9, delay: 0.3 }}>
                                <h1>Nickname</h1>
                                <h3>BigBigBig</h3>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.1, delay: 0.3 }}>
                                <h1>Ranking</h1>
                                <h3>Bronze</h3>
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

            <Bottom />
        </div>  
    )
}