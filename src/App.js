import React, {useState} from 'react';
import Counter from './components/Counter';
import Input from './components/Input';
import ClassCounter from './components/ClassCounter';
import './styles/App.css'
import PostList from './components/PostList';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', content:"Something content"},
    {id: 2, title: 'php', content:"Something content"},
    {id: 3, title: 'python', content:"Something content"}
  ]);

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Ruby', content:"Something content"},
    {id: 2, title: 'C++', content:"Something content"},
    {id: 3, title: 'Swift', content:"Something content"}
  ])


  return (
    <div className="App">
      <Input/>
      <h3>Counter на основе Хукков</h3>
      <Counter/>
      <h3>Counter на основе Класса</h3>
      <ClassCounter/>
      <hr/>
      <PostList posts={posts} title={'Posts List 1'} />

      <PostList posts={posts2} title={'Posts List 2'} />

    </div>
  ); 
}

export default App;
 