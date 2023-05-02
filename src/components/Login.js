import React, { useState } from 'react';
import  Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../App.css'
import {IoMdLogIn} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate=useNavigate()
  const [name,setName]=useState(null);
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
    const [num,setNum]=useState(0)
    
    const submit=async(userobject)=>{
     userobject.preventDefault(); 

     var userobj=
     {
       name:name,
       username:email,
       password:password
     }

       await axios.post('http://localhost:3000/users/login',userobj)
       .then((response)=>{
         if(response.data.state===200){
           console.log("No user exists");
           setNum(1)
         }
         else{
          if(response.data.message==="Invalid username/password"){
           console.log("Invalid username/password");
           
          }
           else
           {
            navigate('/Matchingpairs');
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
        <input  type='text' placeholder='*Enter name' onChange={(e)=>setName(e.target.value)}/>
        <input type='email' placeholder='*Enter email' onChange={(e)=>setEmail(e.target.value)} /> 
        {
          num===1&&<h6 style={{color:'red'}}>*User doesn't exists</h6>
        }
        <input type='password' placeholder='*Enter password' onChange={(e)=>setPassword(e.target.value)}/>
        <Button variant='primary' type='submit'>Login <IoMdLogIn/></Button>
      </form>
    </div>
  )
}

export default Login;
