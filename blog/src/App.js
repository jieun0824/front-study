import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['여자 코트 추천', '냉우동 맛집', '강남면옥 후기']);
  let [like1, setLike1] = useState(0);
  let [like2, setLike2] = useState(0);
  let [like3, setLike3] = useState(0);

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
      <div className='list'>
        <button onClick={()=>{b(['남자 코트 추천', '냉우동 맛집', '강남면옥 후기'])}}>버튼</button>
        <h4>{글제목[0]}<span onClick={()=>{setLike1(like1+1)}}>👍</span>{like1}</h4>
        <p>2월 17일 발행</p>  
      </div>
      <div className='list'>
        <h4>{글제목[1]}<span onClick={()=>{setLike2(like2+1)}}>👍</span>{like2}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}<span onClick={()=>{setLike3(like3+1)}}>👍</span>{like3}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;
