import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Singin from './pages/Singin';
import Singout from './pages/Singout';
import Singup from './pages/Singup';
import Profile from './pages/Profile';


export default function App() {
  return <BrowserRouter>
  <Routes>
  <Route path="/" element ={<Home />}/>
  <Route path="/about" element ={<About />}/>
  <Route path="/sing-in" element ={<Singin />}/>
  <Route path="/sing-out" element ={<Singout />}/>
  <Route path="/sing-up" element ={<Singup />}/>
  <Route path="/profile" element ={<Profile />}/>

  </Routes>
  </BrowserRouter>
}
