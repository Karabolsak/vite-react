import './style.css';
import { useState } from 'react';
import { supabase } from '../clienteSupabase.tsx';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Squad.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

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
            console.log('✅ Usuário logado!', data);
            navigate('/cadastro');
        }

        setLoading(false);
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });

        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }

        console.log('✅ Usuário registrado!', data);
        alert('Conta criada! Verifique seu email para confirmar.');

        setLoading(false);
    };

    return (
        <div className="principal">
            <img src={Logo} className='logo' alt="Logo" />
            <h2>{isRegistering ? 'Criar Conta' : 'Seja Bem-Vindo'}</h2>
            <div className='conteudo'>
                <form onSubmit={isRegistering ? handleSignUp : handleLogin}>
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
                        {loading ? 'Carregando...' : isRegistering ? 'Registrar' : 'Entrar'}
                    </button>
                    {error && <p className="error">{error}</p>}
                </form>

                <p onClick={() => setIsRegistering(!isRegistering)} className="toggle-link">
                    {isRegistering ? 'Já tem uma conta? Entrar' : 'Não tem uma conta? Registrar-se'}
                </p>
            </div>
        </div>
    );
};

export default Login;
