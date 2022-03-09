import React, {useState} from 'react';

function App() {

  let [likes, setlikes] = useState(2)
  
  function inc(){
    setlikes(likes += 1);
  }
  function dec(){
    setlikes(likes -= 1);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={dec} >Decrement</button>
      <button onClick={inc} >Increment</button>
    </div>
  ); 
}

export default App;
