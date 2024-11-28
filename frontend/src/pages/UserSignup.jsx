


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function UserSignup() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [fullName,setFullName] = useState('')
    const [userName,setUserName] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate()

    const submitHanler=(e)=>{
        e.preventDefault()

        const data = {
            fullName,
            userName,
            email,
            password
        }

          axios.post('/v1/users/register',data)
        .then((res)=>{
          console.log(res)

          if(!res.data.ok){
            setError(res.data.message)
          }
          if(res.data.ok){
            navigate('/login')
          }
          setEmail('')
          setPassword('')
          setFullName('')
          setUserName('')
        })
        .catch((err)=>{
          console.log(err.message)
          setError(err.message)
        })
    }
  return (
    <div className='py-2 px-4'>
         <img className='w-16 mb-5' src="https://imgs.search.brave.com/4ATIxs0SwT-DsZ4ajF7jlixEaXFqw5Ys2I5OFQa8JEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="logo" />
        <form onSubmit={submitHanler}>
            <h3 className='text-xl mb-2 font-semibold'>What&apos;s your name</h3>
            <input required type="text" 
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}
            placeholder='john'
            className='bg-white  rounded-md px-4 py-2 border w-full text-xl placeholder:text-base mb-7 focus:outline-black'
            />
            <h3 className='text-xl mb-2 font-semibold'>Enter your username</h3>
            <input required type="text" 
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            placeholder='john_51'
            className='bg-white  rounded-md px-4 py-2 border w-full text-xl placeholder:text-base mb-7 focus:outline-black'
            />
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
            <button className='bg-black rounded-md px-4 py-2 border w-full text-xl text-white mb-7'>Register</button>
           <p className='text-center -mt-4 font-semibold'>Already have an accoun&apos;t ? <Link to='/login' className='text-blue-600 text-center'>Login</Link></p>
        </form>
        <p className='text-sm text-center fixed bottom-4 text-black/70 '>This site is protected by reCAPTCHA and the <span className='underline font-semibold'> Google Provacy Policy </span> and <span className='underline font-semibold'>Terms of Service apply.</span></p>
    </div>
  )
}

export default UserSignup