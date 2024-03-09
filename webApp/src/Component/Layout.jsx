import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
// import {Navbar} from './Navbar'

const Layout = () => {
  return (
    <div>
      <Outlet/>
      <Navbar/>
    </div>
  )
}

export default Layout
