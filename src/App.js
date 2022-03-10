import React, {useState} from 'react';
import Counter from './components/Counter';
import Input from './components/Input';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import ClassItem from './components/ClassItem';


function App() {

  return (
    <div className="App">
      <Input/>
      <h3>Counter на основе Хукков</h3>
      <Counter/>
      <h3>Counter на основе Класса</h3>
      <ClassCounter/>
      <hr/>
      <ClassItem post={{id:1 } }/>
      
      <ClassItem  />
      <ClassItem />
    </div>
  ); 
}

export default App;
 