
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Admin from './Pages/Admin';
import CarBooking from './Pages/CarBooking';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';
import AddCarDetails from './Pages/AddCarDetails';
import { AdminLogin } from './Pages/AdminLogin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/adminLogin' element={<AdminLogin/>}/>
            <Route path="/CarBooking" element={<CarBooking/>}></Route>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/addcar" element={<AddCarDetails/>}/>
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );

}

export default App;
