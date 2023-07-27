
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav} from 'react-bootstrap'

import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail';

import { useState } from 'react';
import data from '../src/data';


function Card({data, index, image}){
    return(
      <div className="col-md-4">
        <img src={image} width='80%' alt='d'/>
        <h4>{ data[index].title }</h4>
        <p>{ data[index].content}</p>
      </div>
    )
  }


function App() {
  let navigate = useNavigate();
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing" onClick={()=>{ navigate('/detail')}}>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element = {
          <>
            <div className='main-bg'></div>
            <div className="container">
              <div className="row">
                {
                shoes.map(function(a, i){
                  let url = `https://codingapple1.github.io/shop/shoes${i}.jpg`;
                  return(
                    <Card data={shoes} index={i} image={url}/>
                  )
                })
                }
              </div>
            </div>
          </>
        }/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='*' element={<>없는페이지요</>}/>
        <Route path='/about' element={<About/>}>
          <Route path='member' element = {<div>멤버임</div>}/>
        </Route>
      </Routes>


    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}



export default App;
