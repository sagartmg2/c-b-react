import axios from 'axios'
import {useState} from 'react'

export default function CreateProduct() {
    const [data, setData] = useState({
        name: "",
        price: "",
        categories: ["",""],
        images: [],
    });

    function handleSubmit(e) {
        e.preventDefault()

        console.log("here..")
        axios.post("https://ecommerce-sagartmg2.vercel.app/api/products", {
            name: e.target.name.value
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        }).then(res => {

        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div class="container mt-8">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div class="mb-4">
                    <label class="form-label" for="name">
                        Name
                    </label>
                    <input
                        onChange={(e) => {
                            setData(e.target.value)
                        }}
                        name='name'
                        value={data.value}
                        class="form-control"
                        type="text"
                        placeholder=""
                    />
                </div>
                <div class="mb-4">
                    <label class="form-label" for="name">
                        Price
                    </label>
                    <input
                        name='price'
                        class=" form-control"
                        type="number"
                        placeholder=""
                    />
                </div>
                <div class="mb-4">
                    <label class="form-label" for="name">
                        description
                    </label>
                    <textarea
                        rows={6}
                        name='price'
                        class=" form-control"
                        placeholder=""
                    />
                </div>
                <div class="mb-4">
                    <label class="form-label" for="name">
                        Category  <button className='btn'>add category</button>
                    </label>
                    <input
                        name='category'
                        class=" form-control"
                        type="text"
                        placeholder=""
                    />
                </div>
                <div class="mb-4">
                    <label class="form-label" for="name">
                        Images
                    </label>
                    <input
                        class=" form-control"
                        type="file"
                        multiple
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
