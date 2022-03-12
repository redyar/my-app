import React, {useState} from "react";
import PostItem from './PostItem';


const PostList = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', content:"Something content"},
        {id: 2, title: 'php', content:"Something content"},
        {id: 3, title: 'python', content:"Something content"}
      ])

    return (
        <div>
            <h2 style={{textAlign: 'center'}} >Список Постов</h2>
            {posts.map(post => 
                < PostItem post={post} key={post.id}/>
                )} 
        </div>
    )
}

export default PostList;