import './App.css';
import {Route, Routes} from 'react-router-dom';
import Result from './pages/Result';

import Home from './pages/Home';
import Image from './pages/Image';
import Shopping from './pages/Shopping';
import Video from './pages/Video';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/image' element={<Image/>}/>
      <Route path='/shopping' element={<Video/>}/>
      <Route path='/Video' element={<Shopping/>}/>
    </Routes>
  );
}

export default App;
