"use client" 
import { useState } from 'react'
import Login from './login/page';
import SignUP from './Signup/page';

export default function Home() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1)
  }
  function onclick() {
    setisloggedin(true);
  }
  const [isloggedin, setisloggedin] = useState(false);
  return (
    
    <main className="">
      {/* <button onClick={handleClick}>
        clicked {count} times
      </button>
      
      <p>home page</p> */}
      <button onClick={onclick}>
        turn the page to {isloggedin ? 'login' : 'signup'}
      </button>
      {isloggedin ? <Login/> : <SignUP/>}
    </main>
  )
}
