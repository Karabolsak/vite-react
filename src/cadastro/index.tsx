import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../clienteSupabase";
import "./style.css";
import Logo from "../../Squad.png";

interface User {
  id: string;
  email?: string;
}

export default function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [jogoSelecionado, setJogoSelecionado] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [, setIsLoading] = useState(true);

  const jogos = ["Minecraft", "Fortnite", "Valorant", "GTA V"];

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data?.user) {
        console.error("❌ Erro ao obter usuário autenticado:", error);
        navigate("/login");
        return;
      }

      console.log("👤 UID do usuário autenticado:", data.user.id);
      setUser(data.user);

      const { data: userInfo, error: fetchError } = await supabase
        .from("complementares")
        .select("*")
        .eq("usuario", data.user.id)

      console.log("🔍 Resultado da busca via Supabase:", userInfo);
      if (fetchError) console.error("⚠️ Erro ao buscar usuário no banco:", fetchError);

      if (!userInfo || userInfo.length === 0) {
        navigate("/cadastro");
        return;
      }

      setIsLoading(false);
    };

    checkUser();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !nomeUsuario || !jogoSelecionado) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    if (!user?.id) {
      alert("Erro ao obter ID do usuário. Tente novamente.");
      setLoading(false);
      return;
    }

    try {
      console.log("🛠 Criando novo registro...");
      const { error } = await supabase
        .from("complementares")
        .insert([
          {
            usuario: user.id,
            nomeCompleto: nome,
            nomeUsuario: nomeUsuario,
            jogoPreferido: jogoSelecionado,
            cadastroCompleto: true,
          },
        ]);

      if (error) {
        throw error;
      }

      alert("✅ Cadastro salvo com sucesso!");
      navigate("/home");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="principal">
      <img src={Logo} className="logo" alt="Logo" />
      <h2>Conclusão de cadastro</h2>
      <div className="conteudo">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome completo"
            className="entradas"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Nome de usuário"
            className="entradas"
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
            required
          />

          <div className="dropdown-container">
            <p>Escolha seu jogo favorito:</p>
            <select
              className="dropdown"
              value={jogoSelecionado}
              onChange={(e) => setJogoSelecionado(e.target.value)}
              required
            >
              <option value="" disabled>
                Selecione um jogo
              </option>
              {jogos.map((jogo, index) => (
                <option key={index} value={jogo}>
                  {jogo}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="botaoEntrar" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
      </div>
    </div>
  );
}