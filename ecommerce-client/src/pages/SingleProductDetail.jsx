import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleProductDetail() {
    const {id} = useParams()

    /* set up useState */
    /* set up useEffect -> api call */
    axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/${id}`)
    
    return (
        <div className='container'>

            <h1>show product details..</h1>

            {id}

        </div>
    )
}
