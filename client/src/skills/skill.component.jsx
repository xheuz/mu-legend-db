import React, { Component } from 'react';
import { Badge, Row, Col } from 'react-bootstrap';
import './skills.css';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: []
        }
    }
    componentDidMount() {
        if (this.props.skills) {
            this.SkillList()
        }
    }

    SkillList() {
        let data = groupByType(this.props.skills);
        let skillItems = {};

        for(var type in data) {
            skillItems[type] = data[type].map((skill, indx) => {
                return(
                    <Col xs={12} md={4} key={skill.id}>
                        <div className="skill">
                            <div className="skill-header gradient-orange" data-toggle="collapse" data-target={"#" + skill.id}>
                                <img className="skill-image float-left" src={skill.imgUrl} alt={"skill-" + skill.name} />
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

        // This will split the results in groups of 3 elements by row
        let key = 0;
        let skills = {};
    
        for(var property in skillItems) {
            let columns = [];
            for(var pos in skillItems[property]) {
                if (pos % 3 === 0) {
                    columns.push(
                        <Row key={key}>{skillItems[property].slice(pos,+pos+3)}</Row>
                    );
                    key++;
                }
            }
            skills[property] = columns;
        };

        this.setState({skills: skills});
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

export default Skills