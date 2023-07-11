import Home from "./pages/Home"
import Users from "./pages/Users"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Layout from "./components/Layout"
import UsersApi from "./pages/UsersApi"
import Products from "./pages/Products"
import Carts from "./pages/Carts"
import { useState } from "react"

function App() {
    const [cartCount, setcartCount] = useState(10);

    return <>
        <Layout cartCount={cartCount}>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users-api" element={<UsersApi />} />
                <Route path="/carts" element={<Carts />} />
                <Route path="/products"  >
                    <Route path="" element={<Products cartCount={cartCount} setcartCount={setcartCount}/>} />
                    <Route path="one" element={<h1>One</h1>} />
                </Route>
            </Routes>
        </Layout>
        <hr />

       
    </>
}
export default App