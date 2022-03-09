import React, {useState} from 'react';

function App() {

  let [likes, setlikes] = useState(2);
  let [value, settext] = useState('Text');

  function changeFn(e){
    settext(e.target.value)
  }

  
  function inc(){
    setlikes(likes += 1);
  }
  function dec(){
    setlikes(likes -= 1);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <h2>{value}</h2>
      <input type='text' value={value} onChange={changeFn}></input>
      <button onClick={dec} >Decrement</button>
      <button onClick={inc} >Increment</button>
    </div>
  ); 
}

export default App;
