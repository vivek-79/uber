import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LocationSerPanel from '../components/LocationSerPanel'
import 'remixicon/fonts/remixicon.css'
import VehiclePanel from '../components/VehiclePanel'
import SelectedVehicle from '../components/SelectedVehicle'
import LookingforDriver from '../components/LookingforDriver'
import WaitforDriver from '../components/WaitingforDriver'

function Home() {

  const pannelRef = useRef(null)
  const vehiclepannelRef = useRef(null)
  const confirmedVehicleRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const WaitingforDriverRef = useRef(null)
  const [top, setTop] = useState(false)
  const[vehiclePanel,setVehiclePanel]=useState(false)
  const[confirmedVehicle,setConfirmedVehicle]=useState(false)
  const[vehicleFound,setVehicleFound]=useState(false)
  const[WaitingforDriver,setWaitingforDriver]=useState(false)
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

  useGSAP(function(){
    if(confirmedVehicle){
      gsap.to(confirmedVehicleRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmedVehicleRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmedVehicle])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclepannelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclepannelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehicleFound])

  useGSAP(function(){
    if(WaitingforDriver){
      gsap.to(WaitingforDriverRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(WaitingforDriverRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[WaitingforDriver])

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
          <LocationSerPanel  setVehiclePanel={setVehiclePanel} setTop={setTop} />
        </div>
      </div>

      <div ref={vehiclepannelRef} className='fixed w-full z-10 bg-white bottom-0 text-2xl px-6'>
        <VehiclePanel setConfirmedVehicle={setConfirmedVehicle} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div ref={confirmedVehicleRef} className='fixed w-full z-10 bg-white bottom-0 text-2xl pb-6 px-3'>
        <SelectedVehicle  setConfirmedVehicle={setConfirmedVehicle} setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={vehicleFoundRef} className='fixed w-full z-10 bg-white bottom-0 text-2xl pb-6 px-3'>
       <LookingforDriver  setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={WaitingforDriverRef} className='fixed w-full z-10 bg-white bottom-0 text-2xl pb-6 px-3'>
       <WaitforDriver setVehicleFound={setVehicleFound}/>
      </div>
    </div>
  )
}

export default Home