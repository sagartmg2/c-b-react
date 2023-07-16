import { AiOutlineMail, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs"
import { Link,useParams } from "react-router-dom"

export default function Header() {

    const {params} = useParams()
    console.log(params)

    return (
        <>
            <header className="bg-primary text-white ">
                <nav className="container py-3 flex flex-col sm:flex-row  justify-between items-center ">
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
            <header className=" ">
                <nav className="container py-5 flex flex-col  gap-4  items-center  md:flex-row lg:gap-8 2xl:gap-16 ">
                    <p className="text-4xl font-bold">Hekto</p>
                    <div className=" flex  flex-col  gap-4 items-center grow justify-between md:flex-row">
                        <ul className="flex items-center gap-9 ">
                            <li>
                                <Link to="/" className="text-secondary"> Home</Link>
                            </li>
                            <li>
                                {/* url == "/proudcts" text-secondary */}
                                <Link to="/products" className="hover:text-secondary  "> Products</Link>
                            </li>
                            <li>
                                <a href="/carts" className="flex items-center hover:text-secondary">  <span>cart</span> <AiOutlineShoppingCart className="inline" /> </a>
                            </li>
                        </ul>
                        <form className="flex">
                            <input className="border-2 border-r-0 " />
                            <button className="bg-secondary  p-3 text-white">
                                {/* <button className="bg-regal-blue  p-3 text-white"> */}
                                <AiOutlineSearch />
                            </button>
                        </form>
                    </div>

                </nav>
            </header>
        </>

    )
}
