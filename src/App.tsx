import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jogos from './jogos/index.tsx';
import Mission from './mission/index.tsx';
import Navegacao from './navegacao/index.tsx';
import Estatistica from './estatistica/index.tsx';
import Conectado from './conectados/index.tsx';
import Home from './home/index.tsx';
import Social from './navegacao/index.tsx';
import NavegacaoSuperior from './superior/superior.tsx';
import Notificacao from './notificacoes/index.tsx';

const App = () => {
  return (

    <Router>
      <NavegacaoSuperior />
      
      
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />   
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/estatistica" element={<Estatistica />} />
          <Route path="/conectado" element={<Conectado />} />
          <Route path="/home" element={<Home />} />
          <Route path="/social" element={<Social />} />
          <Route path='/notificacao' element={<Notificacao />} />
        </Routes>
      </div>
      <Navegacao /> 
      
    </Router>
  );
};

export default App;