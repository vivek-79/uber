import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LocationSerPanel from '../components/LocationSerPanel'
import 'remixicon/fonts/remixicon.css'

function Home() {

  const pannelRef = useRef(null)
  const [top, setTop] = useState(false)

  useGSAP(function () {

    if (top) {
      gsap.to(pannelRef.current, {
        height: '70%',
        opacity: 1
      })
    }
    else {
      gsap.to(pannelRef.current, {
        height: '0%',
        opacity: 0
      })
    }
  }, [top])

  return (
    <div className='w-full h-screen relative'>
      <img className='w-16 ml-2 absolute' src="https://imgs.search.brave.com/4ATIxs0SwT-DsZ4ajF7jlixEaXFqw5Ys2I5OFQa8JEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="logo" />
      <div>
        <img className='w-full h-screen object-cover absolute top-0 -z-10' src="https://imgs.search.brave.com/t6hu7P1krh_masy6uz5V5XFHcazKNx-qp6kfVJj5LOE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW1v/bnBhbi5jb20vd3At/Y29udGVudC90aGVt/ZXMvc3BfcG9ydGZv/bGlvL2Fzc2V0cy91/YmVyLXN1Ym9wdGlt/YWwuanBn" alt="bg" />
      </div>
      <div className='absolute w-full h-screen flex flex-col justify-end items-start'>

        <div className='bg-white relative h-[30%] w-full py-4 px-3 '>
          {top && <h5 onClick={() => setTop(false)} className='absolute top-1 right-4  px-4  flex items-center justify-center  text-[30px]'><i className="ri-arrow-down-wide-line"></i></h5>}
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form>
            <div className="h-14 w-1 bg-black top-[88px] ml-6 rounded-full absolute"></div>
            <input onClick={() => setTop(true)} className='bg-[#eee] px-10 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location' />
            <input onClick={() => setTop(true)} className='bg-[#eee] px-10 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Enter destination location' />
          </form>
        </div>
        <div ref={pannelRef} className='w-full h-[70%] bg-white px-2'>
          <LocationSerPanel />
        </div>
      </div>

      <div className='fixed w-full z-10 bg-white bottom-0 py-3 px-6 translate-y-full'>
        <h3 className='text-2xl font-semibold mb-2'>Choose a vehicle</h3>
        <div className='flex border-2 active:border-black  rounded-xl p-3 w-full items-center justify-between mb-2'>
          <img className='h-14 ' src="https://img.freepik.com/free-vector/white-hatchback-car-isolated-white-vector_53876-64418.jpg?semt=ais_hybrid" alt="car" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$192</h2>
        </div>
        <div className='flex border-2 active:border-black  rounded-xl p-3 w-full items-center justify-between mb-2'>
          <img className='h-14 w-16' src="https://imgs.search.brave.com/0nb_ofiFEa_gEO6sTemQo-Mvs_aDHjRzNC_DjRB3CCg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3BuZy1oZC1i/aWtlLW1vdG9yYmlr/ZS1oZC1wbmctcGx1/c3BuZy1jb20tMTYz/Mi1tb3RvcmJpa2Ut/aGQtcG5nLTE2MzIu/cG5n" alt="bike" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$65</h2>
        </div>
        <div className='flex border-2 active:border-black  rounded-xl p-3 w-full items-center justify-between mb-2'>
          <img className='h-14 w-16' src="https://imgs.search.brave.com/RHpGuzSWfShl1C88lkLShQ5rP5dajCxVj81xW6cn3Sk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNS9BdXRv/LVJpY2tzaGF3LVBO/Ry1GaWxlLnBuZw" alt="bike" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$118</h2>
        </div>
      </div>
    </div>
  )
}

export default Home