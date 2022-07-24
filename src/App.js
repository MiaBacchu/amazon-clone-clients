import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Checkout from './components/checkout/Checkout';
import Header from './Header';
import Context from './context/Context';
import { useState } from 'react';

function App() {
  const [length,setLength]=useState(0);
  return (
      <Context value={{length,setLength}}>
        <div className="App">
      <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/login" element={<h1>this is login</h1>} />
    </Routes>
  </BrowserRouter>
    </div>
      </Context>
  );
}

export default App;
