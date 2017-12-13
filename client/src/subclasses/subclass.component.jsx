import React, { Component } from 'react';

class Subclass extends Component {
    constructor(props){
        super(props);
        this.state = {
            subclasses: []
        }
    }

    render(){
        return(
            <div>subclass</div>
        )
    }
}

export default Subclass;