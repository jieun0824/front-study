import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['여자 코트 추천', '냉우동 맛집', '강남면옥 후기']);

  let [like1, setLike1] = useState(0);
  let [like2, setLike2] = useState(0);
  let [like3, setLike3] = useState(0);

  let states = [like1, like2, like3]
  let setFuncs = [setLike1, setLike2, setLike3]
  //UI의 현재 상태를 state로 저장(닫힌상태/열린상태 -> 형식은 상관 없다! 모달창상태 표현만 가능하면 된다.)
  let [modal, setModal] = useState(false);
  let [number, setNumber] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>JieunBlog</h4>
      </div>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort()
        b(copy);


      }}>가나다순 정렬</button>
      {/* <div className='list'>
        <button onClick={()=>{b(['남자 코트 추천', '냉우동 맛집', '강남면옥 후기'])}}>버튼</button>
        <h4>{글제목[0]}<span onClick={()=>{setLike1(like1+1)}}>👍</span>{like1}</h4>
        <p>2월 17일 발행</p>  
      </div>
      <div className='list'>
        <h4>{글제목[1]}<span onClick={()=>{setLike2(like2+1)}}>👍</span>{like2}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{
          setModal(!modal)
        }}>{글제목[2]}<span onClick={()=>{setLike3(like3+1)}}>👍</span>{like3}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        

        글제목.map(function(a, i){
          return (
            <div className='list' key={i}>
              <button>버튼</button>
              <h4 onClick={()=>{
                  setModal(!modal);
                  setNumber(i);
                }}>{a}
                <span onClick={()=>{setFuncs[i](states[i]+1)}}>👍</span>
                {states[i]}
              </h4>
              <p>2월 17일 발행</p>  
            </div>
          )

          
        })

        
      }

      {
          (modal===true) ? <Modal divnum={글제목} 글수정={b} 글번호={number}/> : null //null - 텅 빈 값

      }

    </div>
  );
}


function Modal(props){
  return(
    <div className='modal'>
      <h4>{props.divnum[props.글번호]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{props.글수정(['남자 코트 추천', '냉우동 맛집', '강남면옥 후기'])}}>글수정</button>
    </div>
  )
}

export default App;
