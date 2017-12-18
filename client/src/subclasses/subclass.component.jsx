import React, { Component } from 'react';

class Subclass extends Component {
    constructor(props){
        super(props);
        this.state = {
            subclasses: []
        }
    }

    componentDidMount() {
        if(this.props.subclasses) {
            this.SubClassesList()
        }
    }

    SubClassesList() {
        let subclasses = this.props.subclasses.map((subclass, indx) => (
            <div key={indx}>{subclass.name}</div>
        ))

        this.setState({subclasses: subclasses});
    }

    render(){
        return(
            <div>{this.state.subclasses}</div>
        )
    }
}

export default Subclass;