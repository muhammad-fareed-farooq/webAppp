import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Private_Route = () => {

    const user_auth_state = useSelector((state) => state.user_auth)

    return user_auth_state.user_auth && user_auth_state.user_data.role === "seller" ?(
        <Outlet/>
    ):(
        <Navigate to="/" />
    )
}

export default Private_Route
