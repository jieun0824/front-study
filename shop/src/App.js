
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav} from 'react-bootstrap'

import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail';

import { useEffect, useState } from 'react';
import data from '../src/data';
import axios from 'axios';


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
  let [shoes, setShoes] = useState(data);
  let [show, setShow] = useState(true);
  let [loading, setloading] = useState(false);
  useEffect(()=>{
    console.log(shoes)
  }, [shoes])
  let [count, setCount] = useState(0);
  function plusCount(){
    count++;
    setCount(count);
    console.log(count)
  }
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
                  let url = `https://codingapple1.github.io/shop/shoes${i+1}.jpg`;
                  return(
                    <Card data={shoes} index={i} image={url}/>
                  )
                })
                }
              </div>
              {show===true?<button className='btn1' onClick={()=>{
                plusCount();
                setloading(true);

                  let data = `https://codingapple1.github.io/shop/data${count+1}.json`
                  console.log(data)
                  axios.get(data)
                  .then((result)=>{
                    //배열, 오브젝트는 복사본 만들기
                    console.log(result.data)
                    let copy = [...shoes, ...result.data];
                    setShoes(copy)
                    console.log(copy)
                    setloading(false)
                  })
                  .catch((err)=>{
                    console.log(err)
                    setloading(false)
                  })

                  if(count===2){setShow(false)}
                
              }}>더보기</button>:null}
              {loading === true? <span>로딩중입니다.</span>:null}
            </div>
          </>
        }/>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>
        <Route path='*' element={<>없는페이지요</>}/>
        <Route path='/about' element={<About/>}>
          <Route path='member' element = {<div>멤버임</div>}/>
        </Route>
        <Route path='/event' element = {<Event/>}>
          <Route path='one' element = {<h5>첫 주문시 양배추즙 서비스</h5>}/>
          <Route path='two' element = {<h5>생일기념 쿠폰받기</h5>}/>
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
function Event(){
  return(
    <div>
      <h5>오늘의 이벤트</h5>
      <Outlet></Outlet>
    </div>
  )
}



export default App;
