import './style.css'
import Usuario from './usuario/usuario.jpg';
import Logo from './usuario/logo.png';
import { motion } from 'framer-motion';
import Menu from './constante.tsx'
import Tab from '../superior/superior.tsx';
import Nav from '../navegacao/index.tsx'

export default function Home () {
    return (
        <>
        <div className='containerTop'>
            <Tab />
        </div>
<div className='exemplo'>
        <div className='telaCompleta'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                        >
                        <h3>Olá, Gabriel</h3>
                    </motion.div> 
                <div className='principalHome'>
                    <div className='perfil-container'>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.3 }}>
                            <img 
                                src={Usuario} 
                                alt="usuario-foto" 
                                className='usuario-foto' 
                            />
                        </motion.div>
                        <motion.div 
                            className='info-container'
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}>
                            <div>
                                <p>Ranking</p> 
                                <motion.img 
                                    src={Logo} 
                                    alt="logo-ranking" 
                                    className="ranking-logo"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                />
                            </div>                    
                        </motion.div>
                        <motion.div
                                className='info-container'
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}>
                                <p>Partidas</p>
                                <p>234</p>
                        </motion.div>
                        <motion.div
                                className='info-container'
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.7 }}>
                                <p>Amigos</p>
                                <p>15</p>
                        </motion.div>
                    </div>
                    <hr className="border-t border-gray-300 my-4" />
                </div>
                <div className='conteudo'>
                    <ul>
                        <li>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.1, delay: 0.3 }}
                                >
                                    <p>Jogos</p>
                                    <p>5</p>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                                >
                                    <p>Pontos</p>
                                    <p>31.846</p>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <p>Avaliação</p>
                                    <p>******</p>
                            </motion.div>
                        </li>
                    </ul>
                </div>
                <div className='conteudo'>
                    <ul>
                        <li>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                >
                                    <p>Destaque</p>
                                    <p>Valorant</p>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.9, delay: 0.3 }}
                                >
                                    <p>Nickname</p>
                                    <p>Hora_do_Rush</p>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.1, delay: 0.3 }}
                                >
                                    <p>Ranking</p>
                                    <p>******</p>
                            </motion.div>
                        </li>
                    </ul>
                </div>
                <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        >
                    <Menu />
                </motion.div>
        </div>
        </div>
        <div className='containerBot'>
            <Nav />
        </div>
    </>
    )
}