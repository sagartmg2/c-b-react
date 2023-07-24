
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/Signup";
import { useState } from "react";
import axios from "axios";

// MindRisers!@

function App() {
  const [user, setUser] = useState("");

  axios.get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user",{
    headers:{
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGJkMGI2ZTZjZDQwYTJmOTc5YTUzYzMiLCJuYW1lIjoic3RyaW5nIiwicm9sZSI6ImJ1eWVyIiwiaWF0IjoxNjkwMTk5Mjg3fQ.fgvjvGclcqSovNcpnvzOZRA-DaLlFv_q6mDphCXns44"
    }
  }).then()


  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carts" element={<h1> Carts ..</h1>} />
        <Route path="/login" element={<Login setUser = {setUser} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />

    </>
  )
}

export default App
