import Home from "./pages/Home"
import Users from "./pages/Users"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Layout from "./components/Layout"

function App() {
    return <>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products"  >
                    <Route path="" element={<h1>Products list</h1>} />
                    <Route path="one" element={<h1>One</h1>} />
                </Route>
            </Routes>
        </Layout>
        <hr />
    </>
}
export default App