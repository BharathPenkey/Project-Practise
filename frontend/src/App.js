
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import CarBooking from './Pages/CarBooking';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path="/CarBooking" element={<CarBooking/>}></Route>
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );

}

export default App;
