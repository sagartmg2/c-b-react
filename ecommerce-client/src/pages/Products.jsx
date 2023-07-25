import axios from 'axios'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import SingleProduct from '../components/SingleProduct'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

export default function Products() {
    const [products, setProducts] = useState([])

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
            <section className='h-48 bg-primary-light flex items-center' >
                <div className="container">
                    <p className='text-4xl font-bold'>Product Title</p>
                    <p className='text-xl mt-3 '> Home / Proudcts </p>
                </div>
            </section>
            <section className=" mt-16  ">
                <div className="container grid grid-cols-1 gap-4 lg:grid-cols-4">

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
