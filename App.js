import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Contactus from './Pages/Contactus';
import LoginSignup from './Pages/LoginSignup';
import Notfound from './Pages/Notfound'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Contactus" element={<Contactus/>} />
          <Route path="/LoginSignup" element={<LoginSignup/>} />
          <Route component={Notfound} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
