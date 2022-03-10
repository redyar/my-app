import React, {useState} from 'react';

const Counter = () => {

    let [likes, setlikes] = useState(2);

    function inc(){
        setlikes(likes += 1);
      }
      function dec(){
        setlikes(likes -= 1);
      }
    return (
        <>
            <h1>{likes}</h1>
            <button onClick={dec} >Decrement</button>
            <button onClick={inc} >Increment</button>
        
        </>
    )
}

export default Counter;