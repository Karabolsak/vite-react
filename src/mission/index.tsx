import { useState } from "react";
import "./style.css";
import Logo from "../../Squad.png";

export default function Cadastro() {
  const [jogos] = useState(["Minecraft", "Fortnite", "Valorant", "GTA V"]);
  const [jogoSelecionado, setJogoSelecionado] = useState("");

  return (
    <>
      <div className="principalCadastro">
        <img src={Logo} className="logo" alt="Logo" />
        <h2>Concluir cadastro</h2>
        <div className="conteudo">
          <form>
            <input type="text" placeholder="Seu nome completo" className="entradas" required />
            

            <div className="dropdown-container">
              <p>Escolha seu jogo principal:</p>
              <select 
                className="dropdown" 
                value={jogoSelecionado} 
                onChange={(e) => setJogoSelecionado(e.target.value)}
                required
              >
                <option value="" disabled>Selecione um jogo</option>
                {jogos.map((jogo, index) => (
                  <option key={index} value={jogo}>{jogo}</option>
                ))}
              </select>
            </div>
            <input type="text" placeholder="Nickname" className="entradas" required />
           


              <label className="checkbox-label">
                  <input type="checkbox" name="jogos"  />
                  Ao selecionar essa box você concorda com os Termos de uso
              </label>
              <label className="checkbox-label">
                  <input type="checkbox" name="jogos"  />
                  Ao selecionar essa box você concorda com as regras da comunidade
              </label> 
              <button type="submit" className="botaoEntrar">Salvar</button>
          </form>
        </div>
      </div>
    </>
  );
}
