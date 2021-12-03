import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Location from "./Components/Location";
import Families from "./Components/Families";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/products" element={<Products />} />
          <Route patch="/location" element={<Location />} />
          <Route patch="/families" element={<Families />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
