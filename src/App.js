import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Index';
import Sugerir from './pages/Sugerir/Index';
import Musicas from './pages/Musicas/Index';
import DetalheMusica from './pages/DetalheMusica';
import SobreNos from './pages/SobreNos/Index';

import Iniciar from './pages/Iniciar';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import PesquisaMusica from './pages/PesquisaMusica';
import HomeLog from './pages/Logado/HomeLog';
import MusicasLog from './pages/Logado/MusicasLog';
import DetalheMusicaLog from './pages/Logado/DetalheMusicaLog';
import SobreNosLog from './pages/Logado/SobreNosLog';
import SugerirLog from './pages/Logado/SugerirLog';
import PesquisaMusicaLog from './pages/Logado/PesquisaMusicaLog';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/iniciar' element={<Iniciar />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/musicas' element={<Musicas />} />
        <Route path='/detalhe' element={<DetalheMusica />} />
        <Route path='/pesquisaMusica' element={<PesquisaMusica />} />
        <Route path='/sugerir' element={<Sugerir />} />
        <Route path='/sobreNos' element={<SobreNos />} />
      </Routes>

      <Routes>
        <Route path='/home' element={<HomeLog/>} />
        <Route path='/musicasLog' element={<MusicasLog/>} />
        <Route path='/detalheLog' element={<DetalheMusicaLog/>} />
        <Route path='sobreNosLog' element={<SobreNosLog/>} />
        <Route path='/sugerirLog' element={<SugerirLog/>} />
        <Route path='/pesquisaLog' element={<PesquisaMusicaLog/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
