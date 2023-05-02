import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Login from './Login.js'
import Signup from './Signup.js'
import {Routes,Route} from 'react-router-dom'
import {FcPuzzle} from 'react-icons/fc';

function Home () {
  return (
    <div className='home'>
      <h3><FcPuzzle/><b>Puzzle game</b></h3>
      <Nav.Link href="/Login">Already have an account?Login</Nav.Link>
      <Nav.Link href="/Signup">Create an account?Register</Nav.Link>
      <h4>Game rules</h4>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default  Home;
