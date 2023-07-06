import axios from "axios"
import { useEffect, useState } from "react"

/* CRUD operations in database
    create read update delete


    HTTP request methods..
    
    GET - read
    POST - create
    PUT/PATCH - update
    DELETE - delete..

*/


function Products() {
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
    },[count])


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
    return <>

        <button onClick={() => {
            setCount(count + 1)
        }}>increment </button>
        <button onClick={fetchProducts}>fetch Products...</button>
        <h1>
            Count:{count}
        </h1>
        <h1>products List</h1>
        <h1>user: {JSON.stringify(user)}</h1>
        <ul>
            {
                products.map(product => {
                    return <li key={product.id}>{product.title}</li>
                })
            }

        </ul>

    </>
}

export default Products