

import React, { useEffect, useState ,useContext} from 'react'
import { useNavigate ,Outlet} from 'react-router-dom'
import { UserDataContext } from '../../context/UserContext'
import axios from 'axios'

const ProtectedWrapper =()=> {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    const {user,setUser} = useContext(UserDataContext)

    useEffect(() => {
        const verifyUser = async () => {

            try {
                const res = await axios.get('/v1/users/auth/varify', {
                    withCredentials: true
                })
                if(!res.data.ok){
                    navigate('/login')
                }
                if(res.data.ok){
                    setData(res.data.data)
                }
                
            } catch (error) {
                console.log(error)
               navigate('/login')
            }
            finally {
                setLoading(false)
            }

        }

        verifyUser();
    }, [navigate])

    useEffect(()=>{

        if(data){
            setUser(data)
        }
    },[data])
    if(loading){
        return <div className='flex items-center justify-center'>
            <p className='text-black text-2xl'>Loading ...</p>
        </div>
    }
    return  (
        <>
            <Outlet/>
        </>
    ) 
}

export default ProtectedWrapper