import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../clienteSupabase';
import "./style.css";
import Logo from "../../Squad.png";

export default function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [nickname, setNickname] = useState("");
  const [jogoSelecionado, setJogoSelecionado] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  const jogos = ["Minecraft", "Fortnite", "Valorant", "GTA V"];

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data?.user) {
        navigate("/login");
        return;
      }

      setUser(data.user);

      const { data: userInfo, error: fetchError } = await supabase
        .from("informacoesComplementares")
        .select("nomeCompleto")
        .eq("uid", data.user.id)
        .single();

      if (!fetchError && userInfo?.nomeCompleto) {
        navigate("/home");
      }
    };

    checkUser();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!user?.id) {
      alert("Erro ao obter ID do usuário. Tente novamente.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("InformacoesComplementares").insert([
      {
        uid: user.id,
        nomeCompleto: nome,
        nickName: nickname, // Corrigido para minúsculas
        jogoPreferido: jogoSelecionado,
      },
    ]);

    if (error) {
      alert("Erro ao cadastrar: " + error.message);
    } else {
      alert("Cadastro realizado com sucesso!");
      navigate("/home");
    }

    setLoading(false);
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
            placeholder="Nickname"
            className="entradas"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
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
