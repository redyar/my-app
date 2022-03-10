import React, {useState} from 'react';
import Counter from './components/Counter';
import Input from './components/Input';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';

function App() {

  return (
    <div className="App">
      <Input/>
      <h3>Counter на основе Хукков</h3>
      <Counter/>
      <h3>Counter на основе Класса</h3>
      <ClassCounter/>
      <hr/>
      <div className='post'>
        <div className='post__content'>
          <strong>1. JS</strong>
          <div>
            For JS is next.js
          </div>
        </div>
        <div className='post__btns'>
          <button>Delete</button>  
        </div>  
      </div>
    </div>
  ); 
}

export default App;
 