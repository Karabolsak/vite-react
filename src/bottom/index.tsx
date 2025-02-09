import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import jogos from "../../public/assets/joystick_1.png";
import estatistica from "../../public/assets/statistics_1.png";
import conectado from "../../public/assets/conection_1.png";
import mission from "../../public/assets/mission_1.png";
import home from "../../public/assets/home_1.png";
import jogosAtivo from "../../public/assets/joystick_2.png";
import estatisticaAtivo from "../../public/assets/statistics_2.png";
import conectadoAtivo from "../../public/assets/conection_2.png";
import homeAtivo from "../../public/assets/home_2.png";
import missionAtivo from "../../public/assets/mission_2.png";

type PageName = "jogos" | "estatistica" | "conectado" | "mission" | "home";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState<PageName>("home"); // Define um valor inicial válido

    useEffect(() => {
        // Atualiza o estado com base na URL atual
        const path = location.pathname.replace("/", "") as PageName;
        if (path) setActive(path);
    }, [location.pathname]);

    const handleNavigation = (path: string, name: PageName) => {
        if (active !== name) {
            setActive(name);
            navigate(path); // Agora a navegação acontece corretamente
        }
    };

    return (
        <nav className="navagecaoBOT">
            <ul className="controleBOT">
                <li className="BOTlista">
                    <img
                        src={active === "jogos" ? jogosAtivo : jogos}
                        alt="Jogos"
                        className={`navegadores ${active === "jogos" ? "active" : ""}`}
                        onClick={() => handleNavigation("/jogos", "jogos")}
                    />
                </li>
                <li className="BOTlista">
                    <img
                        src={active === "estatistica" ? estatisticaAtivo : estatistica}
                        alt="Estatísticas"
                        className={`navegadores ${active === "estatistica" ? "active" : ""}`}
                        onClick={() => handleNavigation("/estatistica", "estatistica")}
                    />
                </li>
                <li className="BOTlista">
                    <img
                        src={active === "conectado" ? conectadoAtivo : conectado}
                        alt="Conexões"
                        className={`navegadores ${active === "conectado" ? "active" : ""}`}
                        onClick={() => handleNavigation("/conectado", "conectado")}
                    />
                </li>
                <li className="BOTlista">
                    <img
                        src={active === "mission" ? missionAtivo : mission}
                        alt="Missões"
                        className={`navegadores ${active === "mission" ? "active" : ""}`}
                        onClick={() => handleNavigation("/mission", "mission")}
                    />
                </li>
                <li className="BOTlista">
                    <img
                        src={active === "home" ? homeAtivo : home}
                        alt="Home"
                        className={`navegadores ${active === "home" ? "active" : ""}`}
                        onClick={() => handleNavigation("/home", "home")}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
