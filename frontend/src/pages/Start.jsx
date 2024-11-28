

import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div>
        <div className='bg-cover bg-[url(https://imgs.search.brave.com/0aNrhVMVuigTyJF2XgLASiqcvo0ZpPdB4xf4ILCA7Eg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA4Lzlh/L2RiLzA4OWFkYjEy/ZmIxOTM1ZDRlYzYz/YzM3ODJhOTU4MDYw/LmpwZw)]  h-screen w-full pt-2 bg-red-400 flex flex-col justify-between'>
        <img className='w-16 ml-3 ' src="https://imgs.search.brave.com/4ATIxs0SwT-DsZ4ajF7jlixEaXFqw5Ys2I5OFQa8JEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="logo" />
            <div className='bg-white/30 py-2 pb-4 flex items-center flex-col justify-center px-10 gap-2'>
            <h2 className='text-black font-bold text-3xl'>Get Started</h2>
            <Link to='/login' className='text-white flex items-center justify-center bg-black font-semibold text-l py-2 w-full rounded-md'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start