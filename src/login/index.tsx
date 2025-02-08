import './style.css';
import { useState } from 'react';
import { supabase } from '../clienteSupabase.tsx';
import { useNavigate } from 'react-router-dom';


const Menu = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [activeItem, setActiveItem] = useState<string>('Log in');
    const navigate = useNavigate();
    const menuItems = ['Log in', 'Registrar-se'];

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            setError(error.message);
        } else {
            console.log('Usuário logado!', data);
            navigate('/home');
        }

        setLoading(false);
    };

    

    const renderContent = () => {
        switch (activeItem) {
            case 'Log in':
                return (
                <>
                    <h2>Seja bem vindo</h2>
                    <div className='conteudo'>
                        
                        <form onSubmit={handleLogin}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='entradas'
                                required
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='entradas'
                                required
                            />
                            <button type="submit" disabled={loading} className='botaoEntrar'>
                                {loading ? 'Carregando...' : 'Entrar'}
                            </button>
                            {error && <p className="error">{error}</p>}
                        </form>
                    </div></>
                );
            case 'Registrar-se':
                return (
                    <>
                    <h2>Seja bem vindo</h2>
                    <div className='conteudo'>
                        
                        <form onSubmit={handleLogin}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='entradas'
                                required
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='entradas'
                                required
                            />
                            <button type="submit" disabled={loading} className='botaoEntrar'>
                                {loading ? 'Carregando...' : 'Entrar'}
                            </button>
                            {error && <p className="error">{error}</p>}
                        </form>
                    </div></>
                );
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
