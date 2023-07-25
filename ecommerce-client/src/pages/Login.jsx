import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setReduxUser } from '../redux/slice/userSlice';
import { useDispatch } from 'react-redux';

export default function Login({ setUser }) {
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const notify = () => ;

    const handleSubmit = (e) => {
        e.preventDefault()


        axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/login", {
            "email": e.target.email.value,
            "password": e.target.password.value,
        })
            .then((res) => {  // if status code is 200  // status_code == 200

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

                dispatch(setReduxUser(res.data.user))

                localStorage.setItem("access_token",res.data.access_token)
                // setUser(res.data.user.name)
                navigate("/")

            })
            .catch((err) => {  // status codes other than 200     // status codes !== 200
                // console.log(err)
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
                    <button className='bg-secondary text-white p-4'>login</button>
                </form>

                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
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
                                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input value={"demo@demo.com"} id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-primary hover:text-indigo-500">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input id="password" value={"password"} name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?
                            <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign Up</Link>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}
