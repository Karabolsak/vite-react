import './style.css';
import { useNavigate } from 'react-router-dom';
import Back from '../../../icones/navegar.svg';

import Amoungus from '../jogos/amoungus.png'



    
export default function dinamicaJogos () {
    const navigate = useNavigate();
    
    
    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return(
        <div className='conteudoDinamica'>
            <div className='BotaoRETORNO'>
                <img 
                    src={Back} 
                    alt="Voltar"
                    onClick={() => handleNavigation("/jogos")}
                    />
            </div>
            <div className='platDinamicos'>
                <div className='conteudoJOGOSdinamico'>    
                    <div>
                        <img src={Amoungus} alt="Jogo" />
                    </div>
                    <div className='jogosINFORMACOES'>
                        <h1>Amoung Us</h1>
                        <p>Dono</p>
                        <p>Lançamento</p>
                        <p>Plataformas</p>
                    </div>
                </div>
                <div className='descricaoDinamicos'>
                    <h2>Descrição</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio accusamus ullam hic vitae et deleniti minima esse reprehenderit magni error dicta consequatur odit, quidem, aliquam sunt cupiditate dolor atque unde.</h3>
                </div>
            </div>
        </div>
    )
}