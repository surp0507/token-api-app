import './App.css';
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Location from "./Components/Location";
import Families from "./Components/Families";
import Protected from "./Components/Protected";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/products" element={<Protected cmp={Products} />} />
          <Route path="/location" element={<Protected cmp={Location} />} />
          <Route path="/families" element={<Protected cmp={Families} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
