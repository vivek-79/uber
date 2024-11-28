import React from 'react'

function WaitforDriver() {
  return (
    <div>
    <h5 onClick={() => setVehicleFound(false)} className='p-1 text-center top-0'><i className="ri-arrow-down-wide-line"></i></h5>
    <div className='flex gap-2 justify-between items-center flex-col'>
        <div className='w-full mt-3'>
          <div className='flex items-center justify-between'>
          <img className='h-14 ' src="https://img.freepik.com/free-vector/white-hatchback-car-isolated-white-vector_53876-64418.jpg?semt=ais_hybrid" alt="car" />
         <div className='text-right'>
         <h2 className='text-lg font-medium'>Vivek</h2>
          <h4 className='text-xl font-semibold -mt-1'>BR 06 1234</h4>
          <p className='text-sm text-gray-600 -mt-1'>Maruti Suzuki Alto</p>
         </div>
          </div>
            <div className='flex items-center gap-5 p-2 border-b-2'>
                <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                    <h3 className='text-sm font-medium'>562/11-A</h3>
                    <p className='-mt-1 text-base text-gray-600'>Khabra Mandir , Bihar</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-2 border-b-2'>
                <i className="text-lg ri-map-pin-user-fill"></i>
                <div>
                    <h3 className='text-sm font-medium'>562/11-A</h3>
                    <p className='-mt-1 text-base text-gray-600'>Khabra Mandir , Bihar</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-2 '>
                <i className="text-lg ri-money-rupee-circle-line"></i>
                <div>
                    <h3 className='text-sm font-medium'>193</h3>
                    <p className='-mt-1 text-base text-gray-600'>Cash</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default WaitforDriver