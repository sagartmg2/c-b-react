import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify';

export default function CreateProduct() {
    const [error, setError] = useState({});

    let initalState = {
        name: "",
        price: "",
        categories: [""],
        images: [],
        description: ""
    }
    
    const [data, setData] = useState(initalState);

    function handleSubmit(e) {
        setError({})
        e.preventDefault()

        console.log("here..")

        let formData = new FormData()
        formData.append("name", data.name)
        formData.append("price", data.price)
        formData.append("description", data.description)
        data.categories.forEach(cat => {
            formData.append("categories[]", cat)
        })
        let temp = [...data.images]
        temp.forEach(img => {
            formData.append("images[]", img)
        })

        axios.post("https://ecommerce-sagartmg2.vercel.app/api/products", formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        }).then(res => {

            toast.success("produc created..")
            setData(initalState)

        }).catch(err => {
            console.log(err)

            if (err.response.status === 400) {
                let errors = err.response.data.errors
                let temp = {}

                errors.forEach(validationError => {
                    temp[validationError.param] = validationError.msg
                })
                setError(temp)
                toast.error("Bad Request. Check All form Data")

            } else {
                toast.error("someting went worng..")

            }



        })
    }

    const addCategory = () => {
        let temp = [...data.categories]
        temp.push("")
        setData({ ...data, categories: temp })
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setError({ ...error, [e.target.name]: "" })
    }

    return (
        <div class="container mt-8">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div class="mb-4">
                    <label class="form-label" for="name">
                        Name * 
                    </label>
                    <input
                        onChange={handleChange}
                        name='name'
                        value={data.name}
                        class="form-control"
                        type="text"
                        placeholder=""
                    />
                    <small className='text-red-500' >{error.name} </small>
                </div>
                <div class="mb-4">
                    <label class="form-label" for="name">
                        Price
                    </label>
                    <input
                        onChange={handleChange}
                        value={data.price}
                        name='price'
                        class=" form-control"
                        type="number"
                        placeholder=""
                    />
                    <small className='text-red-500' >{error.price} </small>
                </div>
                <div class="mb-4">
                    <label class="form-label" for="name">
                        description
                    </label>
                    <textarea
                        value={data.description}
                        onChange={handleChange}
                        rows={6}
                        name='description'
                        class=" form-control"
                        placeholder=""
                    />
                </div>
                <div class="mb-4">
                    <label class="form-label" for="name">
                        Category  <button type='button' className='btn' onClick={addCategory}  >add category</button>
                    </label>
                    {
                        data.categories.map((cat, index) => {
                            return <div className='flex mb-2'>
                                <input
                                    onChange={(e) => {
                                        let temp = [...data.categories]
                                        temp[index] = e.target.value
                                        setData({ ...data, categories: temp })
                                    }}
                                    value={cat}
                                    name='category'
                                    class=" form-control "
                                    type="text"
                                    placeholder=""
                                />
                                <button onClick={() => {
                                    let temp = [...data.categories]
                                    temp.splice(index, 1)
                                    setData({ ...data, categories: temp })

                                }}
                                    type='button' className='btn bg-red-300'>delete</button>
                            </div>
                        })
                    }
                </div>
                <div class="mb-4">
                    <label class="form-label" for="name">
                        Images
                    </label>
                    <input
                        class=" form-control"
                        type="file"
                        multiple
                        onChange={(e) => {
                            setData({ ...data, images: e.target.files })
                        }}
                        placeholder=""
                    />
                </div>

                <div class="flex items-center justify-between">
                    <button
                        class="btn"
                        type="submit"
                    >
                        Submit
                    </button>

                </div>
            </form>

        </div>
    )
}
