import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';


function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
