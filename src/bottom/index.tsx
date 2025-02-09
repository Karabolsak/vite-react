import './style.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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



export default function Bottom () {
    const [active, setActive] = useState<string>("");
    const navigate = useNavigate();

    const handleNavigation = (path: string, name: string) => {
        setActive(name);
        navigate(path);
    };


    return (
        <>
            <nav className='navagecaoBOT'>
                <ul className='controleBOT'>
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
        </>

    )
}