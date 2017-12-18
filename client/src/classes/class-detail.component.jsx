import React, { Component } from 'react';
import Skills from '../skills/skill.component';
import SubClasses from '../subclasses/subclass.component';
import './class-detail.css';

const url = 'http://ec2-52-27-199-57.us-west-2.compute.amazonaws.com:7475';

class ClassDetails extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        this.ClassDetailsInfo()
    }

    ClassDetailsInfo() {
        fetch(url + this.props.location.pathname)
        .then( (results) => results.json())
        .then(data => {
            this.setState({data});
        });
    }

    render(){
        if(this.state.data.length) {
            return(
                <div>
                    <SubClasses subclasses={this.state.data[0].subclasses}/>
                    <Skills skills={this.state.data[0].skills}/>
                </div>
            )
        }

        return null
    }
}

export default ClassDetails