import './style.css';
import { useNavigate } from 'react-router-dom';
import Back from '../../../icones/navegar.svg';

export default function salvarJogos () {
    
    const navigate = useNavigate();
    const handleNavigation = (path: string) => {
        navigate(path);
    };


    return (
        <div className='conteudoDinamica'>
            <div className='BotaoRETORNO'>
                <img 
                    src={Back} 
                    alt="Voltar"
                    onClick={() => handleNavigation("/jogos")}
                    />
            </div>
        </div>
    )
}