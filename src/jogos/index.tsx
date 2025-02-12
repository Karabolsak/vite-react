
import './style.css';

import Amoungus from './jogos/amoungus.png';
import Assassins from './jogos/assassinsCreed.png';
import Forza from './jogos/forza.png';
import Lol from './jogos/lol.png';
import Minecraft from './jogos/minecraft.png';
import Valorant from './jogos/valorant.png';
import { motion } from 'framer-motion';

import Bottom from '../../src/bottom/index';


const jogos = [Amoungus, Assassins, Forza, Lol, Minecraft, Valorant];
const destaques = [Forza, Assassins, Valorant, Forza, Lol];
const normais = [Forza, Lol, Minecraft, Amoungus, Assassins, Valorant];

    

export default function Jogos () {
    return (
        <>
        <div className='principalJGOGOS'>
            <div>
                <ul className='rolamentoUsuarios'>
                    {jogos.slice(0, 10).map((jogo, index) => (
                        <li key={index}>
                            <img 
                                src={jogo} 
                                alt="Usuarios online"
                                className='imagensUsuarios' />
                        </li>
                    ))}                    
                </ul>
            </div>
            <div className='textosJOGOS'>
                    <h2>Ultimos curtidos</h2>
            </div>
            <div className='ultimosCurtidos'>
                <ul>
                    {jogos.slice(0,5).map((jogo, index) => (
                        <li key={index}>
                            <img 
                                src={jogo} 
                                alt="Jogos populares" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className='textosJOGOS'>
                    <h2>Destaque</h2>
            </div>
            <div className='destaqueJOGOS'>
                {destaques.map((jogo, index) => (
                    <motion.img 
                        key={index}
                        src={jogo}
                        alt='Jogos destaques'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                    />
                ))}
            </div>
            <div className='textosJOGOS'>
                <h2>Jogos</h2>
            </div>
            <div className='normalJOGOS'>
                <ul>
                    {normais.slice(0, 5).map((normais, index) => (
                        <li key={index}>
                            <img src={normais} alt="Jogos normais" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className='normalJOGOS'>
                <ul>
                    {normais.slice(0, 5).map((normais, index) => (
                        <li key={index}>
                            <img src={normais} alt="Jogos normais" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className='normalJOGOS'>
                <ul>
                    {normais.slice(0, 5).map((normais, index) => (
                        <li key={index}>
                            <img src={normais} alt="Jogos normais" />
                        </li>
                    ))}
                </ul>
            </div>
                
            <Bottom />

        </div>

        
        
            
        </>
    )
}