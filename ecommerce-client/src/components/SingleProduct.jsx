import { AiOutlineShoppingCart } from "react-icons/ai"
import Chair from "../assets/images/chair.png"


export default function SingleProduct({ type }) {
    return (
        <div className="relative rounded bg-white border text-center  shadow-md group hover:bg-primary  hover:text-white hover:border-primary ">
            <img
                src={Chair}
                alt=""
                className={`w-full  bg-white aspect-square ${type == "latest" ? "aspect-auto h-52 object-contain " : ""} `}
            />
            <div className={`py-2 px-4  ${type == "latest" ? "flex items-center justify-between" : ""} `}>
                <p className="my-2 text-lg text-secondary font-semibold group-hover:text-white ">Ch.. Chair </p>
                <p className="text-primary group-hover:text-white">$100</p>
            </div>
            <span className=" hidden  absolute left-4 top-4 bg-primary-light p-4 border group-hover:inline-block rounded-full text-black">
                <AiOutlineShoppingCart className=" " />
            </span>

        </div>
    )
}