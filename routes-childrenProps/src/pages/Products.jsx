import axios from "axios"
import { useEffect, useState } from "react"
import Product from "../components/Product"

/* CRUD operations in database
    create read update delete


    HTTP request methods..
    
    GET - read
    POST - create
    PUT/PATCH - update
    DELETE - delete..

*/

function Products(props) {
    let [products, setProducts] = useState([])
    let [count, setCount] = useState(0)

    /* components life cycle
        componentDidMount
        componentDidUpdate
    */

    /* useEffect(callback,dependencies-array) */


    useEffect(() => {
        // console.log("use-effect")
        axios.get('https://dummyjson.com/products')
            .then(res => {
                setProducts(res.data.products)
            })
    }, [count])


    function fetchProducts() {
        axios.get('https://dummyjson.com/products')
            .then(res => {
                setProducts(res.data.products)
            })
    }

    // let user = "ram"
    let user = {
        name: "ram"
    }

    console.log("component - re-render")

    function addToCart() {
        console.log("add to header...");
        props.setcartCount(props.cartCount + 1)
    }


    return <>

        <button onClick={() => {
            setCount(count + 1)
        }}>increment </button>
        <button onClick={fetchProducts}>fetch Products...</button>
        {/* <h1>
            Cart Count:{cartCount}
        </h1> */}
        <h1>products List</h1>
        <h1>user: {JSON.stringify(user)}</h1>
        <ul>
            {
                products.map(product => {
                    return <li key={product.id} style={{
                        marginBottom: "1rem"
                    }}>
                        <Product cartCount={props.cartCount} setcartCount={props.setcartCount}  product={product}/>
                    </li>
                })
            }

        </ul>

    </>
}

export default Products