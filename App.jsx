import React, { useState, useEffect } from 'react'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'

export default function App(){
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('vh_user')) || null)

  useEffect(()=>{
    if(user) localStorage.setItem('vh_user', JSON.stringify(user))
    else localStorage.removeItem('vh_user')
  },[user])

  return (
    <div className="app-root">
      {user ? (
        <Dashboard user={user} signOut={()=>setUser(null)} />
      ) : (
        <Signup onSignUp={(u)=>setUser(u)} />
      )}
    </div>
  )
}
