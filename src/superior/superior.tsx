import './style.css';
import Social from './assets/social.png';
import Logo from '../../Squad.png';
import Config from './assets/config_1.png';

import { useNavigate } from 'react-router-dom';

export default function TabBar () {
    const navigate = useNavigate();

    const handleSocialClick = () => {
        navigate('/Notificacao');
    };

    return (
      <>
      <div className='container'>
        <ul>
            <li>
                <img 
                    src={Social} 
                    alt="Social" 
                    className='tab-usuario' 
                    onClick={handleSocialClick}
                />
            </li>
            <li>
                <img 
                src={Logo} 
                alt="Logo" 
                className='tab-logo' />
            </li>
            <li>
                <img 
                src={Config} 
                alt="Configuração" 
                className='tab-img' />
            </li>
        </ul>

      </div>

      </>
    )
    
}