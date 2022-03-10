import React from "react";

const ClassItem = (props) => {
console.log(props.post.id)
    return (
        <div className='post'>
            <div className='post__content'>
            <strong>1. </strong>
            <div>
                
            </div>
            </div>
            <div className='post__btns'>
            <button>Delete</button>  
            </div>  
        </div>    
    )
}

export default ClassItem;