import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>
} />
      <Route path="/checkout" element={<h1>this is checkout</h1>} />
      <Route path="/login" element={<h1>this is login</h1>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
