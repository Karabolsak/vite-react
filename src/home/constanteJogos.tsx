import './constante.css';

import { useState } from "react";

const Menu = () => {
    // Estado para armazenar o item ativo
    const [activeItem, setActiveItem] = useState<string>("Meus jogos");

    // Lista dos itens do menu
    const menuItems = ["Histórico", "Meus jogos", "Conquistas", "Pet"];

    return (
        <ul className="jogos">
            {menuItems.map((item) => (
                <li
                    key={item}
                    className={activeItem === item ? "ativo" : ""}
                    onClick={() => setActiveItem(item)} // Define o item ativo ao clicar
                >
                    <p>{item}</p>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
