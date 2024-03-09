
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, } from '@mui/material'
import Input_Field from '../Component/Input'
import { useDispatch } from 'react-redux'
import { create_Account, writeUserData } from '../Config/Router_App/Firebase/Firebase_Mathod'
import { set_user_auth } from '../Store/slices/User_auth_Slice'
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../Config/FirebaseConfig';


const Signup = () => {
    const [data, setData] = useState({})
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const change_handle = (e) => {
        const { value, id } = e.target

        setData({ ...data, [id]: value })

    }


    const submit_handle = (e) => {
        e.preventDefault()
        const { email, password } = data

        create_Account(email, password).then((res) => {
            const userid = res.user.uid
            writeUserData(userid, data).then((res) => {

                dispatch(set_user_auth({ data, auth: true }))
            })
        })
            .catch((err) => {
                console.log(err);
            })




    }

    // console.log(data)
    return (
        <div className='bg-bg_color h-[100dvh] grid place-items-center px-3'>

            <form onSubmit={submit_handle} className='bg-white rounded-md max-w-md w-full py-6 px-3 grid grid-cols-2  gap-5'>

                <div className='text-primary_color col-span-2 text-center text-3xl font-bold'>
                    <h1>
                        SIGNUP
                    </h1>
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <Input_Field id='first_name' type='text' required={true} onChange={change_handle} placeholder='First Name' />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <Input_Field id='last_name' type='text' required={true} onChange={change_handle} placeholder='Last Name' />
                </div>

                <div className='col-span-2'>
                    <Input_Field id='username' type='text' required={true} onChange={change_handle} placeholder='Username' />
                </div>
                <div className='col-span-2'>
                    <Input_Field id='phone_number' type='number' required={true} onChange={change_handle} placeholder='Phone Number' />
                </div>
                <div className='col-span-2'>
                    <Input_Field id='email' type='email' required={true} onChange={change_handle} placeholder='Email Address' />
                </div>
                <div className='col-span-2'>
                    <Input_Field id='password' required={true} onChange={change_handle} type='password' placeholder='Password' />
                </div>


                <div className='col-span-2'>
                    <Button variant='contained' type='submit' >
                        Signup
                    </Button>
                </div>



                <div className='col-span-2 space-x-1 text-center'>

                    <span>Already have account </span>
                    <Link to='/login' className='underline text-primary_color'>
                        Login now
                    </Link>


                </div>




            </form>

        </div>
    )
}

export default Signup