import './style.css';

import jogos from './assets/joystick_1.png';
import estatistica from './assets/statistics_1.png';
import conectado from './assets/conection_1.png';
import config from './assets/config_1.png';
import home from './assets/home_1.png';

import jogosAtivo from './assets/joystick_2.png';
import estatisticaAtivo from './assets/statistics_2.png';
import conectadoAtivo from './assets/conection_2.png';
import homeAtivo from './assets/home_2.png';
import configAtivo from './assets/config_2.png';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function navBottom () {
     
     const [active, setActive] = useState<string>('');
     const navigate = useNavigate();

     const handleNavigation = (path: string, name: string) => {
        if (active === name) {
          setActive(''); 
        } else {
          setActive(name); 
        }
        navigate(path);
      };

    return (
        <nav className='bottom-nav'>
            <ul>
               <li>
                    <img 
                         src={active === 'jogos' ? jogosAtivo : jogos} 
                         alt="jogos" 
                         className={`navegadores ${active === 'jogos' ? 'active' : ''}`} 
                         onClick={() => handleNavigation('/jogos', 'jogos')} />                                                 
               </li>
               <li>
                    <img 
                         src={active === 'estatistica' ? estatisticaAtivo : estatistica} 
                         alt="estatisticas" 
                         className={`navegadores ${active === 'estatistica' ? 'active' : ''}`}
                         onClick={() => handleNavigation('/estatistica', 'estatistica')} />
               </li>
               <li>
                    <img 
                         src={active ==='conectado' ? conectadoAtivo : conectado} 
                         alt="conexões" 
                         className={`navegadores ${active === 'conectado' ? 'active' : ''}`}
                         onClick={() => handleNavigation('/conectado', 'conectado')}/>
               </li>
               <li>
                    <img 
                         src={active ==='home' ? homeAtivo : home} 
                         alt="home" 
                         className={`navegadores ${active === 'home' ? 'active' : ''}`} 
                         onClick={() => handleNavigation('/home', 'home')}/>
               </li>
               <li>
                    <img 
                         src={active ==='config' ? configAtivo : config} 
                         alt="configuracoes" 
                         className={`navegadores ${active === 'config' ? 'active' : ''}`}
                         onClick={() => handleNavigation('/config', 'config')} />
               </li>
               
            </ul>
        </nav>
    )
};