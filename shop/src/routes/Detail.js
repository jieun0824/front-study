import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
function Detail(props){
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

  let [count, setCount] = useState(0);
  let image = `https://codingapple1.github.io/shop/shoes${parseInt(id)+1}.jpg`
  return(

    <div className="container">
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
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
  )
}

export default Detail;