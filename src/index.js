import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'


ReactDOM.render(
    <div>
      Work!
      <button onClick={() => console.log('HiMyLove')}>Bytton</button>
      <App/>
    </div>,
    document.getElementById('root')
  ) 
