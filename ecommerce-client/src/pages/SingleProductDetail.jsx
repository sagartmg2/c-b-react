import axios from 'axios'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function SingleProductDetail() {
    const { id } = useParams()
    // const [isLoading,setIsLoading] = useState(true);
    const [product, setProduct] = useState({});

    /* set up useState */
    /* set up useEffect -> api call */

    useEffect(() => {
        axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/${id}`)
            .then(res => {
                setProduct(res.data.data)
            })
    }, []);


    return (
        <div className='container'>

            <h1>show product details..</h1>
            {
                ! product.name
                &&
                <p>loading....</p>
            }
        
           {
            JSON.stringify(product)
           }

        </div>
    )
}
