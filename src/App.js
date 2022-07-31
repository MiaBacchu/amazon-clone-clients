import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Checkout from './components/checkout/Checkout';
import Context from './context/Context';
import { useState } from 'react';
import Header from './components/shared/Header';
import LogReg from './components/log-reg/LogReg';
import Payment from './components/payment/Payment';

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
      <Route path="/login" element={<LogReg></LogReg>} />
      <Route path="/payment/:id" element={<Payment></Payment>} />
    </Routes>
  </BrowserRouter>
    </div>
      </Context>
  );
}

export default App;
