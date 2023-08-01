import React from 'react'
import { useSelector } from 'react-redux'

export default function ProtectedComponent({ role, children }) {
    let user = useSelector((reduxStore) => reduxStore.user.value)  //{name,role}

    if (user?.role == role) {
        return children
    }
    return null
}
