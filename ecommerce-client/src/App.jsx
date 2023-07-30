
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/Signup";
import { useState } from "react";
import axios from "axios";
import { setReduxUser } from "./redux/slice/userSlice";
import { useDispatch } from "react-redux";
import SingleProductDetail from "./pages/SingleProductDetail";
import CreateProduct from "./pages/CreateProduct";
import ProtectedRoute from "./components/ProtectedRoute";
// MindRisers!@

function App() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch()

  let access_token = localStorage.getItem("access_token");

  if (access_token) {
    axios.get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }).then((res) => {
      dispatch(setReduxUser(res.data))
    })
  }


  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/products"  >

          <Route path="" element={<Products />} />
          <Route path=":id" element={<SingleProductDetail />} />

          <Route path="create" element={<ProtectedRoute  role="seller" />} >
            <Route path="" element={<CreateProduct/>} />
          </Route >

        </Route>

        <Route path="/carts" element={<ProtectedRoute role = "buyer" />}>
          <Route path="" element={<h1> Cart </h1>} />
        </Route>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />

    </>
  )
}

export default App
