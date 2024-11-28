

import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()

function UserContext({children}) {

    const [user,setUser]=useState({
        email:'',
        userName:'',
        fullName:'',
        avatar:''
    })
  return (
        <UserDataContext.Provider value={{user,setUser}}>
        {children}
        </UserDataContext.Provider>
  )
}

export default UserContext