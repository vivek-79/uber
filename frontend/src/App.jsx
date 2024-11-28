import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import { UserDataContext } from '../context/UserContext'
import ProtectedWrapper from './pages/ProtectedWrapper'

function App() {

  return (
    <main>
     <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/signup' element={<UserSignup/>}/>
      <Route path='/captain-login' element={<CaptainLogin/>}/>
      <Route path='/captain-signup' element={<CaptainSignup/>}/>
      <Route path='/home' element={<ProtectedWrapper/>}>
        <Route path='' element={<Home/>}/>
      </Route>
     </Routes>
    </main>
  )
}

export default App
