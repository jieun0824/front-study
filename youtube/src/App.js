import './App.css';
import youtubeData from './data/youtubeData.json';

function App() {
  console.log('youtubeData:', youtubeData['data']);
  return (
    <div>리액트로 데이터 불러오기</div>
  );
}

export default App;