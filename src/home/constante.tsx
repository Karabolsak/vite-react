import './constante.css';
import { useState } from 'react';

const Menu = () => {
    // Estado para armazenar o item ativo
    const [activeItem, setActiveItem] = useState<string>('Meus jogos');

    // Lista dos itens do menu
    const menuItems = ['Meus jogos', 'Histórico', 'Conquistas', 'Pet'];

    // Função para renderizar o conteúdo baseado no item ativo
    const renderContent = () => {
        switch (activeItem) {
            case 'Histórico':
                return <div>Conteúdo do Histórico de partidas</div>;
            case 'Meus jogos':
                return <div>Conteúdo dos Meus jogos</div>;
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
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
};

export default Menu;
