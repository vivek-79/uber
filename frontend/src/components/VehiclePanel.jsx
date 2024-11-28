

import React from 'react'

function VehiclePanel({setVehiclePanel,setConfirmedVehicle}) {
  return (
    <div>
        <h5 onClick={()=>setVehiclePanel(false)} className='p-1 text-center top-0'><i className="ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-2'>Choose a vehicle</h3>
        <div onClick={()=>setConfirmedVehicle(true)} className='flex border-2 active:border-black  rounded-xl p-3 w-full items-center justify-between mb-2'>
          <img className='h-14 ' src="https://img.freepik.com/free-vector/white-hatchback-car-isolated-white-vector_53876-64418.jpg?semt=ais_hybrid" alt="car" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$192</h2>
        </div>
        <div onClick={()=>setConfirmedVehicle(true)} className='flex border-2 active:border-black  rounded-xl p-3 w-full items-center justify-between mb-2'>
          <img className='h-14 w-16' src="https://imgs.search.brave.com/0nb_ofiFEa_gEO6sTemQo-Mvs_aDHjRzNC_DjRB3CCg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3BuZy1oZC1i/aWtlLW1vdG9yYmlr/ZS1oZC1wbmctcGx1/c3BuZy1jb20tMTYz/Mi1tb3RvcmJpa2Ut/aGQtcG5nLTE2MzIu/cG5n" alt="bike" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$65</h2>
        </div>
        <div onClick={()=>setConfirmedVehicle(true)} className='flex border-2 active:border-black  rounded-xl p-3 w-full items-center justify-between mb-2'>
          <img className='h-14 w-16' src="https://imgs.search.brave.com/RHpGuzSWfShl1C88lkLShQ5rP5dajCxVj81xW6cn3Sk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNS9BdXRv/LVJpY2tzaGF3LVBO/Ry1GaWxlLnBuZw" alt="bike" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$118</h2>
        </div>
    </div>
  )
}

export default VehiclePanel