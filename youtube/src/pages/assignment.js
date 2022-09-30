import React, {useState} from 'react';
import True from '../components/assign/True';
import False from '../components/assign/False';

function Assignment() {

  const [number, setNumber] = useState(true);

  function onclick1(){
    setNumber(!number);
  };

  return(
    <div>
      <button onClick={onclick1}>색바꾸기!</button>
      {number?<True/>:<False/>}
    </div>
  );


}

export default Assignment;
