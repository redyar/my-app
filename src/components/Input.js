import React, {useState} from "react";

const Input = () => {

    let [value, settext] = useState('Text');

    function changeFn(e){
      settext(e.target.value)
    }

    return (
    <>
        <h2>{value}</h2>
        <input type='text' value={value} onChange={changeFn}></input>
    </>
    )
}

export default Input;