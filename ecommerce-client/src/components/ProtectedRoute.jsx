import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Forbidden from './Forbidden'

export default function ProtectedRoute({role}) {

    let user = useSelector((reduxStore) => reduxStore.user.value)

    if(user){
        if(user.role == role){
            return <Outlet />

        }else{
            return <Forbidden/>
        }
    }
    return <Navigate to="/login"/>
}
