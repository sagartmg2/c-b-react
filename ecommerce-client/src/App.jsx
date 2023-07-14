import { AiOutlineMail, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import Todos from "./components/Todos";
import { BsTelephoneInbound } from "react-icons/bs"


function App() {

  return (
    <>
      <header className="bg-[#7E33E0] text-white ">
        <nav className="container py-3 flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <AiOutlineMail className="inline" /> <span>em@em.com</span>
            <BsTelephoneInbound className="inline" /> <span>+977 09802222</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Login</span>
            <AiOutlineUser className="inline" />
            <AiOutlineShoppingCart className="inline" />
          </div>
        </nav>
      </header>
      <header>
        <nav className="container py-5 flex gap-16 items-center  ">
          <p className="text-4xl font-bold">Hekto</p>
          <div className="flex items-center grow justify-between">
            <ul className="flex items-center gap-9 ">
              <li>
                <a href="#" className="text-[#FB2E86]"> Home</a>
              </li>
              <li>
                <a href="#"> Products</a>
              </li>
              <li>
                <a href="#"> Cart</a>
              </li>
            </ul>
            <form className="flex">
              <input className="border-2 border-r-0 " />
              <button className="bg-[#FB2E86]  p-3 text-white">
                <AiOutlineSearch />
              </button>
            </form>
          </div>

        </nav>
      </header>
    </>
  )
}

export default App
