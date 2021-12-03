import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/products"  element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
