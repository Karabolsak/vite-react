import './constante.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Forza from '../jogos/jogos/forza.png';
import Lol from '../jogos/jogos/lol.png';
import Minecraft from '../jogos/jogos/minecraft.png'
import Conquista1 from '../../public/conquista1.png';
import Estrelas from '../../public/estrelas.png';
import Games from '../../public/games.png';
import { supabase } from '../clienteSupabase'



const Menu = () => {

    const [activeItem, setActiveItem] = useState<string>('Jogos');
    const [jogos, setJogos] = useState<{ id: number; imagemJogo: string }[]>([]);

    useEffect(() => {
        const fetchJogos = async () => {
            const { data, error } = await supabase.from('jogos').select('id, nomeJogo, imagemJogo');
            if (error) {
                console.error('Erro ao buscar jogos:', error);
            } else {
                setJogos(data);
            }
        };
        fetchJogos();
    }, []);


    const menuItems = ['Jogos', 'Histórico', 'Conquistas'];

    const renderContent = () => {
        switch (activeItem) {
            case 'Jogos':
                return (
                    <div className='conteudoJogos'>
                        {jogos.map((jogo) => (
                            <motion.img 
                                key={jogo.id} 
                                src={jogo.imagemJogo} 
                                alt="Destaque" 
                                className='jogos-imagem'
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        ))}
                    </div>
                );
            case 'Histórico':
                return <div>
                            <ul className='conteudoConquista'>
                                    <motion.li
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.3 }}                                    
                                    >
                                            <div className='conquista'>
                                                <img src={Games} alt="Primeira Conquista" className='img-conquista'/>
                                            <div>
                                                <h1>Nome do jogo</h1>
                                                <p>começou a jogar em ../../....</p>
                                            </div>
                                            <div>
                                                <img src={Forza} alt="Primeira Conquista" className='img-jogo'/>
                                            </div>
                                        </div>
                                    </motion.li>
                                    <motion.li
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.3 }}                                    
                                    >
                                            <div className='conquista'>
                                                <img src={Games} alt="Primeira Conquista" className='img-conquista'/>
                                            <div>
                                                <h1>Nome do jogo</h1>
                                                <p>começou a jogar em ../../....</p>
                                            </div>
                                            <div>
                                                <img src={Minecraft} alt="Primeira Conquista" className='img-jogo'/>
                                            </div>
                                        </div>
                                    </motion.li>
                                    <motion.li
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.3 }}                                    
                                    >
                                            <div className='conquista'>
                                                <img src={Games} alt="Primeira Conquista" className='img-conquista'/>
                                            <div>
                                                <h1>Nome do jogo</h1>
                                                <p>começou a jogar em ../../....</p>
                                            </div>
                                            <div>
                                                <img src={Lol} alt="Primeira Conquista" className='img-jogo'/>
                                            </div>
                                        </div>
                                    </motion.li>
                            </ul>
                        </div>;            
            case 'Conquistas':
                return <div>
                            <ul className='conteudoConquista'>
                                    <motion.li
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.3 }}                                    
                                    >
                                            <div className='conquista'>
                                                <img src={Conquista1} alt="Primeira Conquista" className='img-conquista'/>
                                                <div>
                                                    <h1>+1 Gamer na area</h1>
                                                    <p>Difícil</p>
                                                </div>
                                                <div>
                                                <img src={Estrelas} alt="Primeira Conquista" className='img-conquista'/>
                                                </div>
                                            </div>
                                    </motion.li>
                                    <motion.li
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.7, delay: 0.3 }}
                                    >
                                            <div className='conquista'>
                                                <img src={Conquista1} alt="Primeira Conquista" className='img-conquista'/>
                                                <div>
                                                    <h1>+1 Gamer na area</h1>
                                                    <p>Difícil</p>
                                                </div>
                                                <div>
                                                <img src={Estrelas} alt="Primeira Conquista" className='img-conquista'/>
                                                </div>
                                            </div>
                                    </motion.li>
                                    <motion.li
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.9, delay: 0.3 }}
                                    >
                                            <div className='conquista'>
                                                <img src={Conquista1} alt="Primeira Conquista" className='img-conquista'/>
                                                <div>
                                                    <h1>+1 Gamer na area</h1>
                                                    <p>Difícil</p>
                                                </div>
                                                <div>
                                                <img src={Estrelas} alt="Primeira Conquista" className='img-conquista'/>
                                                </div>
                                            </div>
                                    </motion.li>
                                </ul>
                        </div>;
            
            default:
                return <div>Selecione uma opção do menu</div>;
        }
    };

    return (
        <div>
            <ul className="jogos">
                {menuItems.map((item) => (
                    <li
                        key={item}
                        className={activeItem === item ? 'ativo' : ''}
                        onClick={() => setActiveItem(item)} 
                    >
                        <p>{item}</p>
                    </li>
                ))}
            </ul>
            <div className="Conteudo">
                {renderContent()}
            </div>
        </div>
    );
};

export default Menu;
