import './style.css'
import { useState } from 'react';


const Menu = () => {
    
    const [activeItem, setActiveItem] = useState<string>('Entrar');


    const menuItems = ['Entrar', 'Primeiro acesso'];

    const renderContent = () => {
        switch (activeItem) {
            case 'Entrar':
                return  <div className='conteudo'>
                    
                </div>;
            case 'Primeiro acesso':
                return <div className='conteudo'>

                </div>;            
            default:
                return <div>Selecione uma opção do menu</div>;
        }
    };

    return (
        <>
        <div>
            <h1>SQUAD</h1>
        </div>
        <div className='principal'>
            <div className="conteudo">
                {renderContent()}
            </div>
            <ul>
                {menuItems.map((item) => (
                    <li
                        key={item}
                        className={activeItem === item ? 'ativo' : ''}
                        onClick={() => setActiveItem(item)} 
                    >
                        <p>{item}</p>
                    </li>
                ))}
            </ul>
        </div>
        
        </>
    );
};

export default Menu;
