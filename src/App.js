import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
