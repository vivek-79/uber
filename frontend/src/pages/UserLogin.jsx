

import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../../context/UserContext.jsx'

function UserLogin() {

  const {user,setUser} = useContext(UserDataContext)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate()

    const submitHanler=(e)=>{
      setError('')
        e.preventDefault()

        const data = {
            email:email,
            password:password
        }
        axios.post('/v1/users/login',data)
        .then((res)=>{
          if(!res.data.ok){
            setError(res.data.message)
          }
          if(res.data.ok){
            setUser(res.data.data)
            navigate('/home')
          }
          setEmail('')
          setPassword('')
        })
        .catch((err)=>{
          setError(err.message)
        })
       
    }
  return (
    <div className='py-2 px-4'>
         <img className='w-16 mb-10' src="https://imgs.search.brave.com/4ATIxs0SwT-DsZ4ajF7jlixEaXFqw5Ys2I5OFQa8JEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="logo" />
        <form onSubmit={submitHanler}>
            <h3 className='text-xl mb-2 font-semibold'>What&apos;s your email</h3>
            <input required type="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='email@example.com'
            className='bg-white  rounded-md px-4 py-2 border w-full text-xl placeholder:text-base mb-7 focus:outline-black'
            />
            <h3 className='text-xl mb-2 font-semibold'>Enter Password </h3>
            <input required type="password"
             placeholder=''
             value={password}
            onChange={(e)=>setPassword(e.target.value)}
              className='bg-white rounded-md px-4 py-2 border w-full text-xl placeholder:text-base mb-7 focus:outline-black'
             />
             {error && <p className='-mt-4 text-center overflow-clip max-w-full whitespace-nowrap text-red-600 font-semibold'>{error}</p> }
            <button className='bg-black rounded-md px-4 py-2 border w-full text-xl text-white mb-7'>Login</button>
           <p className='text-center -mt-4 font-semibold'>New here ? <Link to='/signup' className='text-blue-600 text-center'>Create new account</Link></p>
        </form>
        <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center rounded-md px-4 py-2 border text-xl text-white mb-7 fixed bottom-0 right-4 left-4'>Sign in as captain</Link>
    </div>
  )
}

export default UserLogin