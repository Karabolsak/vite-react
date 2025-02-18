import "./style.css";
import Bottom from "../bottom/index";
import Reload from '../../public/reload.png';
import Usuario from '../../public/user.png'
import Jogos from '../../public/games.png'

import Doguinho from '../Pets/doguinho.tsx';


export default function Conversas() { 
  return (
    <div className="principalConversas">
      <div>
        <h1>Conexões</h1>
      </div>
      <div className="principalPETS">
        <Doguinho />
      </div>
      <div >
          <div className="conteudoConversas">
            <ul>
              <li>
                <p>Suas conexões aparecem aqui</p>
              </li>
              <li>
                <img src={Reload} alt="Recarregar pagina" />
              </li>
            </ul>
          </div>
          <div className="conversas">
            <ul>
              <li className="informacoesConversas">
                <div>
                  <img src={Usuario} alt="foto do usuario" />
                </div>
                <div>
                  <p>Nome de usuario</p>
                  <p>Mensagem</p>
                </div>
              </li>
              <li>
                <div>
                  <img src={Jogos} alt="Jogo conectado" />
                </div>
              </li>
            </ul>
          </div>
          <div className="conversas">
            <ul>
              <li className="informacoesConversas">
                <div>
                  <img src={Usuario} alt="foto do usuario" />
                </div>
                <div>
                  <p>Nome de usuario</p>
                  <p>Mensagem</p>
                </div>
              </li>
              <li>
                <div>
                  <img src={Jogos} alt="Jogo conectado" />
                </div>
              </li>
            </ul>
          </div>
          <div className="conversas">
            <ul>
              <li className="informacoesConversas">
                <div>
                  <img src={Usuario} alt="foto do usuario" />
                </div>
                <div>
                  <p>Nome de usuario</p>
                  <p>Mensagem</p>
                </div>
              </li>
              <li>
                <div>
                  <img src={Jogos} alt="Jogo conectado" />
                </div>
              </li>
            </ul>
          </div>
          
      </div>      

      <Bottom />
    </div>
  );
}
