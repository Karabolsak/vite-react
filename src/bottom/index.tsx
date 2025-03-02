import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import loja from "../../icones/loja_1.svg";
import pet from "../../icones/pet_1.svg";
import home from "../../icones/home_1.svg";
import lojaAtiva from "../../icones/loja_2.svg";
import homeAtivo from "../../icones/home_2.svg";
import petAtivo from "../../icones/pet_2.svg";



type PageName = "loja" | "pet" | "home";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState<PageName>("home"); 

    useEffect(() => {
        const path = location.pathname.replace("/", "") as PageName;
        if (path) setActive(path);
    }, [location.pathname]);

    const handleNavigation = (path: string, name: PageName) => {
        if (active !== name) {
            setActive(name);
            navigate(path);
        }
    };

    return (
        <nav className="navagecaoBOT">
            <ul className="controleBOT">
                
                <li className="BOTlista">
                    <img
                        src={active === "loja" ? lojaAtiva : loja}
                        alt="Estatísticas"
                        className={`navegadores ${active === "loja" ? "active" : ""}`}
                        onClick={() => handleNavigation("/loja", "loja")}
                    />
                </li>
                
                <li className="BOTlista">
                    <img
                        src={active === "pet" ? petAtivo : pet}
                        alt="Missões"
                        className={`navegadores ${active === "pet" ? "active" : ""}`}
                        onClick={() => handleNavigation("/pet", "pet")}
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
