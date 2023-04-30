import React, { useState } from 'react';
import  Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../App.css'
import {IoMdLogIn} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate=useNavigate()
  const [user,setUser]=useState({
    email:'',
    password:''
  })
    const submit=async(userobject)=>{
     userobject.preventDefault() 
     console.log(user)

     var userobj=
     {
       username:user.email,
       password:user.password
     }
       await axios.post('http://localhost:3000/users/login',userobj)
       .then((response)=>{
         if(response.data.message===`${user.email} doesn't exists`){
           console.log("No user exists");
         }
         else{
          if(response.data.message==="Invalid username/password")
           console.log("Invalid username/password");
           else
           {
            navigate('/Minesweep');
           console.log("login success");
           }
         }
       })
      .catch(err=>alert(`${err.message}`));

     
    }

  return (
    <div className='login w-50 mx-auto ' >
      <form onSubmit={submit}>
        <h1>Login</h1>
        <input type='email' name="email" id="email" placeholder='Enter email' onChange={(e)=>setUser({email:e.target.value.toLowerCase()})} /> 
        <input type='password' placeholder='Enter password' onChange={(e)=>setUser({...user,[user.password]:e.target.value})}/>
        <Button variant='primary' type='submit'>Login <IoMdLogIn/></Button>
      </form>
    </div>
  )
}

export default Login;
