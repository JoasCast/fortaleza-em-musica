import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Index';
import Sugerir from './pages/Sugerir/Index';
import Musicas from './pages/Musicas/Index';
import SobreNos from './pages/SobreNos/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/musicas' element={<Musicas/>} />
        <Route path='/sugerir' element={<Sugerir/>} />
        <Route path='/sobreNos' element={<SobreNos/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
