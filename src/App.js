import './App.css';
import Home from './components/Home'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Routes,Route} from 'react-router-dom';
import Jigsaw from './components/Jigsaw';
import { Cross } from './components/Crossword';

function App() {
  return (
    <div className='App'>
      <Navbar bg="dark" variant="dark">
        <Container className='a'>
          <Navbar.Brand href=""><b>Puzzle</b></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users/Login">Login</Nav.Link>
            <Nav.Link href="/Signup">Signup</Nav.Link>
            <Nav.Link href="/CrossWord">Crossword</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  

        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/users/Login' element={<Login/>}/>
         <Route path='/Signup' element={<Signup/>}/>
         <Route path='/Jigsaw' element={<Jigsaw/>}/>
         <Route path='/CrossWord' element={<Cross/>}/>
        </Routes>
      </div>
  );
}

export default App;
