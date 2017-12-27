import React, { Component } from 'react';
import Skills from '../skills/skill.component';
import SubClasses from '../subclasses/subclass.component';
import { Grid } from 'react-bootstrap';
import './class-detail.css';

const classImages = {
    1: "https://i.ytimg.com/vi/5Yyl07UmdDE/maxresdefault.jpg",
    2: "https://i.ytimg.com/vi/fR-46pk_Gtc/maxresdefault.jpg",
    3: "https://i.ytimg.com/vi/8JHw9YYpCn4/maxresdefault.jpg",
    4: "https://i.ytimg.com/vi/FJOmYNMhSj0/maxresdefault.jpg",
    5: "http://image.webzen.kr/mu_legend/event/20170810_emphasizer/images/img_slider3.jpg"
}

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
        .then(results => {
            this.setState({data: results.data});
        });
    }

    render(){
        if(this.state.data.length) {
            return(
                <div>
                    {/* <div><img className="img-responsive" src={classImages[this.props.match.params.classid]} alt={this.state.data[0].name}/></div> */}
                    <SubClasses subclasses={this.state.data[0].subclasses}/>
                    <Skills skills={this.state.data[0].skills}/>
                </div>
            )
        }

        return null
    }
}

export default ClassDetails