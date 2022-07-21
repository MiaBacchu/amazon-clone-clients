import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Checkout from './components/checkout/Checkout';
import Header from './Header';

function App() {
  return (
      <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/checkout" element={<>
      <Header/>
      <Checkout/>
      </>} />
      <Route path="/login" element={<h1>this is login</h1>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
