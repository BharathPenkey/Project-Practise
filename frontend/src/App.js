
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import CarBooking from './Pages/CarBooking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" />
            <Route path="/CarBooking" element={<CarBooking/>}></Route>
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );

}

export default App;
