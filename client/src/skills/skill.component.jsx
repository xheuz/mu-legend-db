import React, { Component } from 'react';
import { Badge, Row, Col } from 'react-bootstrap';
import './skills.css';

const url = 'http://ec2-52-27-199-57.us-west-2.compute.amazonaws.com:7475';
const images_url = "http://mulegendb.info/server/images/skills";

const groupByType = function(arr) {
    let groups = {};

    for(var element in arr){
        if (groups.hasOwnProperty(arr[element].type)) {
            groups[arr[element].type].push(arr[element]);
        } else {
            groups[arr[element].type] = [];
            groups[arr[element].type].push(arr[element]);
        }
    }

    return groups;
}

class Skills extends Component {
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
        fetch(url + this.props.classId + '/skills')
        .then( (results) => results.json())
        .then(data => {
            data = groupByType(data);
            let skills = {};

            for(var type in data) {
                skills[type] = data[type].map((skill, indx) => {
                    return(
                        <Col xs={12} md={4} key={skill.id}>
                            <div className="skill">
                                <div className="skill-header gradient-orange" data-toggle="collapse" data-target={"#" + skill.id}>
                                    <img className="skill-image float-left" src={images_url + '/' + skill.id + '.png'} alt={"skill-" + skill.name} />
                                    <span className="skill-name">{skill.name}</span>
                                    <Badge bsClass={"badge skill-kind skill-" + skill.kind.toLowerCase()}>{skill.kind.toLowerCase()}</Badge>
                                </div>
                                <div className="skill-body" id={skill.id}>
                                    <p>{skill.description}</p>
                                    {skill.damage !== null ? <Badge>damage: {skill.damage}% </Badge> : ""}
                                </div>
                            </div>
                        </Col>
                    )
                });
            }
            this.setState({skills: skills});
            this.addRows();
        });
    }

    addRows() {
        let key = 0;
        let skills = {};
    
        for(var property in this.state.skills) {
            let columns = [];
            for(var pos in this.state.skills[property]) {
                if (pos % 3 === 0) {
                    columns.push(
                        <Row key={key}>{this.state.skills[property].slice(pos,+pos+3)}</Row>
                    );
                    key++;
                }
            }
            skills[property] = columns;
        };
    
        this.setState({skills : skills});
    }

    render(){
        return(
            <div className="skill-section">
                <h4 className="skill-type">Weapon Skills</h4>
                {this.state.skills['Weapon']}
                <h4 className="skill-type">Class Skills</h4>
                {this.state.skills['Class']}
                <h4 className="skill-type">Expert Skills</h4>
                {this.state.skills['Expert']}
            </div>
        )
    }
}

export default Skills