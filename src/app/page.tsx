"use client" 
import { useState } from 'react'
import Login from './Login/page';
import SignUP from './Signup/page';

export default function Home() {
  function onclick() {
    setisloggedin(true);
  }
  const [isloggedin, setisloggedin] = useState(false);
  return (
    
    <main className="">
      <button onClick={onclick}>
        turn the page to {isloggedin ? 'login' : 'signup'}
      </button>
      {isloggedin ? <Login/> : <SignUP/>}
    </main>
  )
}
