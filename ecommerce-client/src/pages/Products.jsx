import axios from 'axios'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import SingleProduct from '../components/SingleProduct'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'

export default function Products() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    let params = useLocation()
    console.log(params)  //{search}


    useEffect(() => {
        axios.get("https://ecommerce-sagartmg2.vercel.app/api/products" + params.search)
            .then(res => {
                console.log();
                setProducts(res.data.data[0].data)
            })
    }, [params.search])

    return (
        <>
            {/* Bread Crumb */}
            <section className='h-48 bg-primary-light flex items-center' >
                <div className="container">
                    <p className='text-4xl font-bold'>Product Title</p>
                    <p className='text-xl mt-3 '> Home / Proudcts </p>
                </div>
            </section>

            <section className=" container mt-16  ">

                <div className='mb-12 flex  items-center justify-between'>
                    <div>
                        <p className='text-primary-dark text-3xl font-bold'>Ecommerce Acceories & Fashion item </p>
                        <p>25 out of 50 </p>
                    </div>
                    <div className='flex gap-4'>
                        <select name="" id="" onChange={(e) =>{
                            navigate("/products?per_page=" + e.target.value)
                            
                        }}>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        <select name="" id="" onChange={(e) => {
                            navigate("/products?sort=" + e.target.value)
                        }}>
                            <option value="datedesc"> latest </option>
                            <option value="pricedesc">price desc</option>
                        </select>
                    </div>
                </div>


                <div className=" grid grid-cols-1 gap-4 lg:grid-cols-4">

                    <div className='border'>
                        filters..
                    </div>
                    <div className='border  lg:col-span-3 grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {
                            products.length == 0
                            &&
                            <>
                                <Skeleton height={150} />
                                <Skeleton height={150} />
                                <Skeleton height={150} />
                                <Skeleton height={150} />
                                <Skeleton height={150} />
                                <Skeleton height={150} />
                                <Skeleton height={150} />
                                <Skeleton height={150} />
                            </>
                        }

                        {
                            products.map(el => {
                                return <SingleProduct product={el} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>

    )
}
