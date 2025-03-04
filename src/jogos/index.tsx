import './style.css';
import { useEffect, useState } from 'react';
import { supabase } from '../clienteSupabase.tsx';
import Back from '../../icones/navegar.svg';
import { useNavigate } from "react-router-dom"; 
import { motion } from "framer-motion";

export default function Jogos() {
    const [jogos, setJogos] = useState<{ id: number; imagemJogo: string; genero: string }[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJogos = async () => {
            const { data, error } = await supabase.from('jogos').select('id, imagemJogo, genero');
            if (error) {
                console.error('Erro ao buscar jogos:', error);
            } else {
                setJogos(data || []);
            }
        };
        fetchJogos();
    }, []);
    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <div className='conteudoJOGOS'>
            <div className='BotaoRETORNO'>
                <img 
                    src={Back} 
                    alt="Voltar" 
                    onClick={() => handleNavigation("/home")}
                />
            </div>
            <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{ duration: 0.8, delay: 0.5}}
                >
                <h1>RPG</h1>
                <ul>
                    <li>
                        {jogos
                            .filter(jogo => jogo.genero === "RPG")
                            .map((jogo) => (
                                <img 
                                className='imagemGAMES'
                                src={jogo.imagemJogo} alt="" 
                                onClick={() => handleNavigation("/dinamicaJogos")}
                                />
                            ))
                        }
                    </li>
                </ul>
            </motion.div>
            <motion.div
                initial={{opacity: 0, scale: 0.8}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ duration: 0.8, delay: 0.7}}
            >
                <h1>Tiro</h1>
                <ul>
                    <li>
                        {jogos
                            .filter(jogo => jogo.genero === "Tiro")
                            .map((jogo) => (
                                <img 
                                    className='imagemGAMES'
                                    src={jogo.imagemJogo}
                                    alt='Jogos' />
                            ))
                        }
                    </li>
                </ul>
            </motion.div>            
            <motion.div
                initial={{opacity: 0, scale: 0.8}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ duration: 0.8, delay: 0.9}}
            >
                <h1>Simulação</h1>
                <ul>
                    <li>
                        {jogos
                            .filter(jogo => jogo.genero === "Simulação")
                            .map((jogo) => (
                                <img
                                    className='imagemGAMES' 
                                    src={jogo.imagemJogo} 
                                    alt="Jogos" />
                            ))
                        }
                    </li>
                </ul>        
            </motion.div>
        </div>
    );
}
