import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import home from "../../icones/home_1.svg";
import homeAtivo from "../../icones/home_2.svg";



type PageName = "loja" | "home";

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
