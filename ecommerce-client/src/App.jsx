
import {  Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";


function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/carts" element={<h1> Carts ..</h1>} />
        </Routes>
    </>
  )
}

export default App
