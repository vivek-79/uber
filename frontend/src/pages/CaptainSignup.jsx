

import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CaptainSignup() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [fullName,setFullname] = useState('')
    const [userName,setUserName] = useState('')
    const [phone,setPhone] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate()

    const submitHanler=(e)=>{
        e.preventDefault()

        if(phone.length<10 || phone.length>12){
          setError('Enter a valid number')
          setPhone('')
          return null
        }
        const data = {
            fullName,
            userName,
            email,
            password,
            phone
        }

        setEmail('')
        setPassword('')
        setFullname('')
        setUserName('')
        setPhone('')

        axios.post('/v1/users/register',data)
        .then((res)=>{
          if(! res.data.ok){
            setError(res.data.message)
          }
          if(res.data.ok){
            setError(res.data.message)
            navigate('/captain-login')
          }

        })
        .catch((err)=>{
          setError(err.message)
        })
    }
  return (
    <div className='py-2 px-4'>
         <img className='w-16 mb-10' src="https://imgs.search.brave.com/cykZ27VRScThHwy8RGxrj9c1g3kAPOiXNfIPS4mdXeU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1FbWJs/ZW0tNzAweDM5NC5w/bmc" alt="logo" />
        <form onSubmit={submitHanler}>
            <h3 className='text-xl mb-2 font-semibold'>What&apos;s your name</h3>
            <input required type="text" 
            value={fullName}
            onChange={(e)=>setFullname(e.target.value)}
            placeholder='john'
            className='bg-white  rounded-md px-4 py-1 border w-full text-xl placeholder:text-base mb-6 focus:outline-black'
            />
            <h3 className='text-xl mb-2 font-semibold'>Enter your username</h3>
            <input required type="text" 
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            placeholder='john_51'
            className='bg-white  rounded-md px-4 py-1 border w-full text-xl placeholder:text-base mb-6 focus:outline-black'
            />
            <h3 className='text-xl mb-2 font-semibold'>What&apos;s your email</h3>
            <input required type="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='email@example.com'
            className='bg-white  rounded-md px-4 py-1 border w-full text-xl placeholder:text-base mb-6 focus:outline-black'
            />
            <h3 className='text-xl mb-2 font-semibold'>Enter phone </h3>
            <input required type="phone"
             placeholder=''
             value={phone}
            onChange={(e)=>setPhone(e.target.value)}
              className='bg-white rounded-md px-4 py-1 border w-full text-xl placeholder:text-base mb-6 focus:outline-black'
             />
            <h3 className='text-xl mb-2 font-semibold'>Enter password </h3>
            <input required type="password"
             placeholder=''
             value={password}
            onChange={(e)=>setPassword(e.target.value)}
              className='bg-white rounded-md px-4 py-1 border w-full text-xl placeholder:text-base mb-6 focus:outline-black'
             />
             {error && <p className='-mt-4 text-center overflow-clip max-w-full whitespace-nowrap text-red-600 font-semibold'>{error}</p> }
            <button className='bg-black rounded-md px-4 py-1 border w-full text-xl text-white mb-6'>Register</button>
           <p className='text-center -mt-4 font-semibold'>Already have an accoun&apos;t ? <Link to='/captain-login' className='text-blue-600 text-center'>Login</Link></p>
        </form>
        
    </div>
  )
}

export default CaptainSignup