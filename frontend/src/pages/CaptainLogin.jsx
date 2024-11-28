


import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserDataContext} from '../../context/UserContext'

function CaptainLogin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [user,setUser] = useContext(UserDataContext)

  const submitHanler = (e) => {
    e.preventDefault()

    setEmail('')
    setPassword('')

    const data = {
      email,
      password
    }
    
    axios.post('/v1/users/login',data)
    .then((res)=>{
      if (!res.data.ok) {
        setError(res.data.message)
      }
      if (res.data.ok) {
        setUser(res.data.data)
        navigate('/home')
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
        <h3 className='text-xl mb-2 font-semibold'>What&apos;s your email</h3>
        <input required type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email@example.com'
          className='bg-white  rounded-md px-4 py-2 border w-full text-xl placeholder:text-base mb-7 focus:outline-black'
        />
        <h3 className='text-xl mb-2 font-semibold'>Enter Password </h3>
        <input required type="password"
          placeholder=''
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='bg-white rounded-md px-4 py-2 border w-full text-xl placeholder:text-base mb-7 focus:outline-black'
        />
        {error && <p className='-mt-4 text-center overflow-clip max-w-full whitespace-nowrap text-red-600 font-semibold'>{error}</p> }
        <button className='bg-black rounded-md px-4 py-2 border w-full text-xl text-white mb-7'>Login</button>
        <p className='text-center -mt-4 font-semibold'>Join squad ? <Link to='/captain-signup' className='text-blue-600 text-center'>Register as captain</Link></p>
      </form>
      <Link to='/login' className='bg-[#d67332] flex items-center justify-center rounded-md px-4 py-2 border text-xl text-white mb-7 fixed bottom-0 right-4 left-4'>Sign in as User</Link>
    </div>
  )
}

export default CaptainLogin