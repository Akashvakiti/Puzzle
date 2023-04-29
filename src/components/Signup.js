import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
import {useState} from 'react';
import {IoMdLogIn} from 'react-icons/io'

function Signup() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const submit=async()=>{
      var userobject=
      {
        username:email,
        password:password
      }

        await axios.post('http://localhost:3000/users/createuser',userobject)
        .then((response)=>{
          if(response.data.message==="User created Succesfully"){
            console.log("User created Succesfully");
          }
          else{
            console.log("Username already exists");
          }
        })
       .catch(err=>alert(`${err.message}`));
    }
    
  return (
    <div className='login w-50 mx-auto'>
      <form>
        <h1>Signup</h1>
        <input type='text' placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)} />
        <input type='password' placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>
        <Button variant='primary' type='submit' onClick={submit}>Signup  <IoMdLogIn/></Button>
      </form> 
    </div>
  )
}

export default Signup;
