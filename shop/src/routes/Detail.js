import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav';
import { useSelector, useDispatch } from "react-redux";
import {plus} from '../store'

function Detail(props){

  let dispatch = useDispatch();

  let {id} = useParams(); //현재 url의 파라미터 정보가 이 자리에 남는다.(유저가 :id 자리에 적은거 가져와줌)
  let currentShoes = props.shoes.find((a)=>{
    return a.id===parseInt(id)
  })
  let [view, setView] = useState(true);
  let [message, setmessage] = useState('');
  function saveMessage(e){
    setmessage(e.target.value)
    console.log(message)
  };
  let [text, setText] = useState(0);
  let [opacity, setOpacity] = useState('');

  useEffect(()=>{
    // let a = setTimeout(()=>{
    //   setView(false)
    // }, 2000)
    // return ()=>{
    //   clearTimeout(a)
    // }

    if (isNaN(message) === true){
      alert('숫자를 입력하세요')
    }
  }, [message])

  useEffect(()=>{
    setTimeout(()=>{setOpacity('end')}, 100)
    return(()=>{
      setOpacity('');
    })
  },[])

  let [count, setCount] = useState(0);
  let image = `https://codingapple1.github.io/shop/shoes${parseInt(id)+1}.jpg`
  return(

    <div className={"container start " + opacity}>
     {
      view === true ? <div className='alert alert-warning'>
      2초이내 구매시 할인
      </div> : null
     } 
      {count}
      <button onClick={()=>{setCount(count++)}}>버튼</button>
  <div className="row">
    <div className="col-md-6">
      <img src={image} width="100%" />
    </div>
    <div className="col-md-6">
      <input className="inputBox" onChange={saveMessage}/>
      <h4 className="pt-5">{currentShoes.title}</h4>
      <p>{currentShoes.content}</p>
      <p>{currentShoes.price}</p>
      <button className="btn btn-danger" onClick={()=>{dispatch(plus(currentShoes))}}>주문하기</button> 
    </div>
  </div>
  <div className="tab">
    <Nav variant="tabs" defaultActiveKey="link0"> 
      <Nav.Item onClick={()=>{
      setText(0)
     }}>
        <Nav.Link eventKey="link0">버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={()=>{
      setText(1)
     }}> 
        <Nav.Link eventKey="link1">버튼2</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={()=>{
      setText(2)
     }}>
        <Nav.Link eventKey="link2">
        버튼3
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Tabcontent text = {text} shoes={props.shoes}/>
  </div>
</div> 
  )
}

function Tabcontent({text, shoes}){
  let [fade, setFade] = useState('')
  useEffect(()=>{
    setTimeout(()=>{setFade('end')},100)
    return(
      setFade('')
    )
  },[text])
  return (<div className={`start ${fade}`}>
    {[<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][text]}
  </div>)
}


export default Detail;