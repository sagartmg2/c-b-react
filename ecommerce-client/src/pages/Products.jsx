import axios from 'axios'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import SingleProduct from '../components/SingleProduct'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Pagination from 'rc-pagination';
import NOProduct from "../assets/images/no-product.jpg"

export default function Products() {
    const [pagiationData, setPaginationData] = useState({
        total: 0,
        page: 1,
        per_page: 25

    })
    const [isFetching, setIsFetching] = useState(true)
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const [currentSearchParams, setSearchParams] = useSearchParams()

    let params = useLocation()
    console.log(params)  //{search}


    useEffect(() => {
        axios.get("https://ecommerce-sagartmg2.vercel.app/api/products" + params.search)
            .then(res => {
                setIsFetching(false)

                setProducts(res.data.data[0].data)

                if (res.data.data[0].metadata[0]) {
                    setPaginationData(res.data.data[0].metadata[0])
                }
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
                        <Pagination
                            total={pagiationData.total}
                            pageSize={pagiationData.per_page}
                            prevIcon="< prev "
                            nextIcon=" next > "
                            current={pagiationData.page}
                            onChange={(pageNumber) => {
                                currentSearchParams.set("page", pageNumber)
                                setSearchParams(currentSearchParams)
                            }}
                            showTotal={(total, range) =>
                                `${range[0]} - ${range[1]} of ${total} items`
                            }
                        />
                    </div>
                    <div className='flex gap-4'>
                        <select name="" id="" onChange={(e) => {
                            currentSearchParams.set("per_page", e.target.value)
                            setSearchParams(currentSearchParams)

                        }}>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        <select name="" id="" onChange={(e) => {
                            currentSearchParams.set("sort", e.target.value)
                            setSearchParams(currentSearchParams)
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
                    <div className='  lg:col-span-3 grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {
                            isFetching
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
                            (!isFetching && products.length == 0)
                            &&
                            <img className='mx-auto' src={NOProduct} alt="" />

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
