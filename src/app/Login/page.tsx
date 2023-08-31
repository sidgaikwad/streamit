"use client";

import React from 'react';
import { axios } from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Login = () => {
  
  
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  
  const onLogin = async () => {
  }
  return (
    <div className="flex flex-col justify-center items-center bg-blue-400 text-black min-h-screen py-2">
      <h1 className="text-white text-2xl font-bold relative">
        Sign Up
      </h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input 
      type="text" 
      id='username'
      className="border-2 border-black rounded-md p-2 m-2"
      value={user.username}
      onChange={(e) => setUser({...user, username: e.target.value})}
      placeholder='Username'
      />
      <label htmlFor="email">email</label>
      <input 
      type="text" 
      id='email'
      className="border-2 border-black rounded-md p-2 m-2"
      value={user.email}
      onChange={(e) => setUser({...user, email: e.target.value})}
      placeholder='email'
      />
      <label htmlFor="password">Password</label>
      <input 
      type="text" 
      id='password'
      className="border-2 border-black rounded-md p-2 m-2"
      value={user.password}
      onChange={(e) => setUser({...user, password: e.target.value})}
      placeholder='Password'
      />
      <button onClick={onLogin}
      className='border-2 border-black rounded-md p-2 m-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
      >
        Sign Up
      </button>
      <Link href="/Signup">Create your Account {`>`} </Link>
    </div>
  );
}

export default Login;