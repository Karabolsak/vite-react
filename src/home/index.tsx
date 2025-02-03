import './style.css'

import Usuario from './usuario/usuario.jpg';
import Logo from './usuario/logo.png';
import { motion } from 'framer-motion';


export default function Home () {
    return (
        <>
        <div className='principal'>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                >
                <h3>Olá, Gabriel</h3>
            </motion.div>    
            <div className='perfil-container'>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}>
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
                    <div className="ranking-container">
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
                        className="jogos-container"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}>
                        <p>Jogos</p>
                        <p>100.000</p>
                </motion.div>
            </div>
        </div>
        </>
    )
}