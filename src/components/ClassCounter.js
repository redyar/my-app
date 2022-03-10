import React from "react";

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state  = {
            likes: 2
        }
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }

    inc(){
        this.setState({likes: this.state.likes + 1})
    }
    dec(){
        this.setState({likes: this.state.likes - 1})
    }


    render(){
        return(
            <>
            <h1>{this.state.likes}</h1>
            <button onClick={this.dec} >Decrement</button>
            <button onClick={this.inc} >Increment</button>
            </>
        )
    }
}

export default ClassCounter;