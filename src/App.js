import React, {useState} from 'react';
import Counter from './components/Counter';
import Input from './components/Input';
import ClassCounter from './components/ClassCounter';

function App() {

  return (
    <div className="App">
      <Input/>
      <h3>Counter на основе Хукков</h3>
      <Counter/>
      <h3>Counter на основе Класса</h3>
      <ClassCounter/>
    </div>
  ); 
}

export default App;
 