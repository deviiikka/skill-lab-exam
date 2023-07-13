import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import NavBar from "./Navbar";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
