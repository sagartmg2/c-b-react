
import {  Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";


function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/carts" element={<h1> Carts ..</h1>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
    </>
  )
}

export default App
