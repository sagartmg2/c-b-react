import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const [error, setError] = useState("");
    const navigate = useNavigate()

    // const notify = () => ;

    const handleSubmit = (e) => {
        e.preventDefault()


        axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
            "name": e.target.name.value,
            "role": "some-other..",
            "email": "demo@demo.com",
            "password": "1212",
        })
            .then((res) => {

                toast.success("Login Succesfu.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                
                navigate("/")

            })
            .catch((err) => {
                // console.log(err)
                // console.log(err.response.data.msg)
                // setError(err.response.data.msg)
                toast.error(err.response.data.msg)
            })

    }

    return (
        <>
            <div className="container">
                <form className='hidden' >
                    <input type="text " className='outline-none border px-4 py-2 rounded focus:shadow-xl focus:border-primary ' />
                    <input type="text" />
                    <button className='bg-secondary text-white p-4'>Signup</button>
                </form>

                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Signup</h2>
                    </div>
                    {
                        error
                        &&
                        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-red-200 p-4'>
                            {error}
                        </div>
                    }
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                <div className="mt-2">
                                    <input id="" name="name" type="test"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                                <p className='text-xs text-red-400'>atleast 8 chararcters rqueired..</p>
                            </div>
                            <div>
                                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Role</label>
                                <div className="mt-2">
                                    <input id="email" name="role" type="text"required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already  a member?
                            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</Link>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}
