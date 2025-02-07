import './style.css';
import { useState } from 'react';
import { supabase } from '../clienteSupabase.tsx';

const Menu = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [activeItem, setActiveItem] = useState<string>('Entrar');

    const menuItems = ['Entrar', 'Primeiro acesso'];

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
        }

        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        alert("Usuário deslogado!");
    };

    const renderContent = () => {
        switch (activeItem) {
            case 'Entrar':
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
                                required
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit" disabled={loading}>
                                {loading ? 'Carregando...' : 'Entrar'}
                            </button>
                            {error && <p className="error">{error}</p>}
                        </form>
                        <button onClick={handleLogout}>Sair</button>
                    </div></>
                );
            case 'Primeiro acesso':
                return (
                    <div className='conteudo'>
                        <p>Página de primeiro acesso em construção...</p>
                    </div>
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
