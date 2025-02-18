import "./style.css";
import Bottom from "../bottom/index";



import Doguinho from '../Pets/doguinho.tsx';

export default function Conversas() { // 🔹 Nome corrigido para começar com maiúscula
  return (
    <div className="principalConversas">
      <div className="principalPETS">
        <Doguinho />
      </div>
      

      <Bottom />
    </div>
  );
}
