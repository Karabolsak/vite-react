import { useState } from "react";
import { useAuth } from "../authContext.tsx";

const Login = () => {
    const { user, login, logout } = useAuth();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = async () => {
        await login(email, password);
    };

    return (
        <div>
            {user ? (
                <div className="logado">
                    <h2>Bem-vindo, {user.email}!</h2>
                    <button onClick={logout}>Sair</button>
                </div>
            ) : (
                <div>
                    <h2>Login</h2>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Entrar</button>
                </div>
            )}
        </div>
    );
};

export default Login;
