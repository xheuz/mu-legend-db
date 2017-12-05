import React, { Component } from 'react';
import { Badge, Row, Col } from 'react-bootstrap';
import './class-detail.css';

const url = 'http://ec2-52-27-199-57.us-west-2.compute.amazonaws.com:7475';
const images_url = "http://mulegendb.info/server/images/skills";

const groupByType = function(arr) {
    let groups = {};

    // arr.map( (e) => {
    //     console.log("from function", e)
    // });
    for(var element in arr){
        if (groups.hasOwnProperty(arr[element].type)) {
            groups[arr[element].type].push(arr[element]);
        } else {
            groups[arr[element].type] = [];
        }
    }

    return groups;
}

class ClassDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: []
        }
    }

    componentDidMount() {
        this.SkillList()
    }

    SkillList() {
        fetch(url + '/classes/' + this.props.match.params.classid + '/skills')
        .then( (results) => results.json())
        .then(data => {
            data = groupByType(data);
            let skills = {};

            for(var type in data) {
                skills[type] = data[type].map((skill) => {
                    return(
                        <Col xs={6} md={4} key={skill.id}>
                        <div className="skill">
                            <div className="skill-header">
                                <img className="skill-image float-left" src={images_url + '/' + skill.id + '.png'} alt={"skill-" + skill.name} />
                                <span className="skill-name">{skill.name}</span>
                                <Badge bsClass={"badge skill-kind skill-" + skill.kind.toLowerCase()}>{skill.kind.toLowerCase()}</Badge>
                            </div>
                            <div className="skill-body">
                                <p>{skill.description}</p>
                                <Badge>type: {skill.type}</Badge> &nbsp;
                                {skill.damage !== null ? <Badge>damage: {skill.damage}% </Badge> : ""}
                            </div>
                        </div>
                        </Col>
                    )
                });
            }
            this.setState({skills: skills});
        });
    }

    render(){
        return(
            <div>
                <Row>
                    {this.state.skills['Weapon']}
                </Row>
                <Row>
                    {this.state.skills['Class']}
                </Row>
                <Row>
                    {this.state.skills['Expert']}
                </Row>
            </div>
        )
    }
}

export default ClassDetails