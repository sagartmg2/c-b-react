import { AiOutlineShoppingCart } from "react-icons/ai"
import Chair from "../assets/images/chair.png"
import ImageNotFound from "../assets/images/Image_not_available.png"
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function SingleProduct({ type, product, user }) {
    const reduxUser = useSelector((wholeReduxStore) => { return wholeReduxStore.user.value })

    function addToCart() {
        toast.dismiss()
        if (reduxUser) {
            toast("Added to Cart")
        } else {
            toast.error("Login Required", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

    }

    return (
        <Link to={`/products/${product._id}`}>
            <div className="relative rounded bg-white border text-center  shadow-md group hover:bg-primary  hover:text-white hover:border-primary ">
                <img
                    src={product.images[0] || ImageNotFound}
                    alt={`${product.name}`}
                    className={`w-full  bg-white   h-52 object-contain  `}
                />
                <div className={`py-2 px-4  ${type == "latest" ? "flex items-center justify-between" : ""} `}>
                    <p className="my-2 text-lg text-secondary font-semibold group-hover:text-white ">{product.name} </p>
                    <p className="text-primary group-hover:text-white">${product.price}</p>
                </div>
                <span onClick={addToCart} className=" hidden  absolute left-4 top-4 bg-primary-light p-4 border group-hover:inline-block rounded-full text-black">
                    <AiOutlineShoppingCart className=" " />
                </span>
            </div>
        </Link>

    )
}
