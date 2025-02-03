
import './style.css';

import Amoungus from './jogos/amoungus.png';
import Assassins from './jogos/assassinsCreed.png';
import Forza from './jogos/forza.png';
import Lol from './jogos/lol.png';
import Minecraft from './jogos/minecraft.png';
import Valorant from './jogos/valorant.png';
import { motion } from 'framer-motion';

const jogos = [Amoungus, Assassins, Forza, Lol, Minecraft, Valorant];
const destaques = [Forza, Assassins, Valorant];

export default function Jogos () {
    return (
        <>
        <div className='principal'>
            <div className="jogos-curtidos">
                <ul>
                <div className="jogos-curtidos">
                <ul>
                    {jogos.slice(0, 5).map((jogo, index) => (
                        <li key={index}>
                            <img src={jogo} alt="Jogo Popular" />
                        </li>
                    ))}
                </ul>
            </div>
                   
                </ul>
            </div>
        </div>
        <div className='principal-jogos'>
            <h2>Destaques</h2>
        </div>
        <div className='jogos-destaque'>
                {destaques.map((jogo, index) => (
                    <motion.img 
                        key={index} 
                        src={jogo} 
                        alt="Destaque" 
                        className='jogo-imagem' 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                    />
                ))}
            </div>
        <div className='principal-jogos'>
            <h2>Jogos</h2>
        </div>
        <div className='jogos-normal'>
            <img src={Forza} alt="" className='jogo-imagem-normal' />
            <img src={Assassins} alt="" className='jogo-imagem-normal' />
            <img src={Amoungus} alt="" className='jogo-imagem-normal' />
            <img src={Forza} alt="" className='jogo-imagem-normal' />
            <img src={Minecraft} alt="" className='jogo-imagem-normal' />
            <img src={Valorant} alt="" className='jogo-imagem-normal' />
        </div>
        <div className='jogos-normal'>
            <img src={Forza} alt="" className='jogo-imagem-normal' />
            <img src={Lol} alt="" className='jogo-imagem-normal' />
            <img src={Valorant} alt="" className='jogo-imagem-normal' />
            <img src={Forza} alt="" className='jogo-imagem-normal' />
            <img src={Minecraft} alt="" className='jogo-imagem-normal' />
            <img src={Valorant} alt="" className='jogo-imagem-normal' />
        </div>
        <div className='jogos-normal'>
            <img src={Forza} alt="" className='jogo-imagem-normal' />
            <img src={Minecraft} alt="" className='jogo-imagem-normal' />
            <img src={Valorant} alt="" className='jogo-imagem-normal' />
            <img src={Forza} alt="" className='jogo-imagem-normal' />
            <img src={Minecraft} alt="" className='jogo-imagem-normal' />
            <img src={Valorant} alt="" className='jogo-imagem-normal' />
        </div>
        <div className='jogos-normal'>
            <img src={Forza} alt="" className='jogo-imagem-normal' />
            <img src={Minecraft} alt="" className='jogo-imagem-normal' />
            <img src={Valorant} alt="" className='jogo-imagem-normal' />
            <img src={Forza} alt="" className='jogo-imagem-normal' />
            <img src={Minecraft} alt="" className='jogo-imagem-normal' />
            <img src={Valorant} alt="" className='jogo-imagem-normal' />
        </div>        
        </>
    )
}