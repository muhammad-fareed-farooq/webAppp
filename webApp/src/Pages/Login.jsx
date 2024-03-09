
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input } from '@mui/material'
import Input_Field from '../Component/Input'
import { login_Account } from '../Config/Router_App/Firebase/Firebase_Mathod'
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../Config/FirebaseConfig';

const Login = () => {
    const [data, setData] = useState({})

    const navigate = useNavigate()
    const change_handle = (e) => {

        const { value, id } = e.target

        setData({ ...data, [id]: value })

    }


    const submit_handle = (e) => {
        e.preventDefault()

        login_Account(email,password)
       
    }

    // console.log(data)
    return (
        <div className='bg-bg_color h-[100dvh] grid place-items-center px-3  border border-black'>

            <form onSubmit={submit_handle} className='bg-white rounded-md max-w-md w-full py-6 px-3 grid grid-cols-2  gap-5'>

                <div className='text-primary_color col-span-2 text-center text-3xl font-bold'>
                    <h1>
                        LOGIN
                    </h1>
                </div>
                <div className='col-span-2'>
                    <Input_Field id='email' type='email' required={true} onChange={change_handle} placeholder='Email Address' />
                </div>
                <div className='col-span-2'>
                    <Input_Field id='password' required={true} onChange={change_handle} type='password' placeholder='Password' />
                </div>


                <div className='col-span-2'>
                    <Button variant='contained' type='submit' >
                        Login
                    </Button>
                </div>



                <div className='col-span-2 space-x-1 text-center'>

                    <span>Don't have account </span>
                    <Link to='/signup' className='underline text-primary_color'>
                        Signup now
                    </Link>


                </div>




            </form>

        </div>
    )
}

export default Login