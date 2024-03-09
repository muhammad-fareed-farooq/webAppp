import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from '../../Pages/Home'
import Layout from '../../Component/Layout'
import Public_Route from './Public_Route'
import Login from '../../Pages/Login'
import Signup from '../../Pages/Signup'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route element={<Public_Route/>}>
                <Route path='login' element={<Login/>}/>
                <Route path='signup' element={<Signup/>}/>
            </Route>
        </Route>
    )
)
const Router_App = () => {


    return (
        <RouterProvider router={router} />
    )
}

export default Router_App
