import './constante.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

import Forza from '../jogos/jogos/forza.png';
import Lol from '../jogos/jogos/lol.png';
import Minecraft from '../jogos/jogos/minecraft.png'

const Menu = () => {

    const Jogos = [Forza, Lol, Minecraft, Forza, Lol, Minecraft, Forza, Lol, Minecraft, Forza, Lol, Minecraft];
    
    const [activeItem, setActiveItem] = useState<string>('Meus jogos');


    const menuItems = ['Meus jogos', 'Histórico', 'Conquistas', 'Pet'];

    const renderContent = () => {
        switch (activeItem) {
            case 'Meus jogos':
                return <div className='conteudoNav'>
                            {Jogos.map((jogo, index) => (
                                <motion.img 
                                    key={index} 
                                    src={jogo} 
                                    alt="Destaque" 
                                    className='jogos-imagem'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.3 }}
                                />
                            ))}
                            </div>;
            case 'Histórico':
                return <div>Histórico</div>;            
            case 'Conquistas':
                return <div>Conteúdo das Conquistas</div>;
            case 'Pet':
                return <div>Conteúdo do Pet</div>;
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
                        onClick={() => setActiveItem(item)} // Define o item ativo ao clicar
                    >
                        <p>{item}</p>
                    </li>
                ))}
            </ul>

            {/* Aqui renderizamos o conteúdo baseado no item ativo */}
            <div className="Conteudo">
                {renderContent()}
            </div>
        </div>
    );
};

export default Menu;
