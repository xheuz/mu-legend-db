import React, { Component } from 'react';
import { Col, Row, Badge, Clearfix } from 'react-bootstrap';
import './class-detail.css';

class ClassDetails extends Component {
    state = {
        data: {},
        url: 'http://ec2-52-27-199-57.us-west-2.compute.amazonaws.com:7475',
        classImages: {
            1: "https://i.ytimg.com/vi/5Yyl07UmdDE/maxresdefault.jpg",
            2: "https://i.ytimg.com/vi/fR-46pk_Gtc/maxresdefault.jpg",
            3: "https://i.ytimg.com/vi/8JHw9YYpCn4/maxresdefault.jpg",
            4: "https://i.ytimg.com/vi/FJOmYNMhSj0/maxresdefault.jpg",
            5: "http://image.webzen.kr/mu_legend/event/20170810_emphasizer/images/img_slider3.jpg"
        }
    }

    componentDidMount() {
        this.getClassDetails()
    }

    getClassDetails() {
        fetch(this.state.url + this.props.location.pathname)
        .then( (results) => results.json())
        .then(results => {
            results.data[0].skills = this.groupSkillByType(results.data[0].skills);
            this.setState({data: results.data});
        });
    }

    groupSkillByType = function(arr) {
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

    groupSkillsInColumns = function(obj) {
        let key = 0;
        let columns = [];

        for(var pos in obj) {
            if (pos % 3 === 0) {
                columns.push(
                    <Row key={key}>{obj.slice(pos,+pos+3)}</Row>
                );
                key++;
            }
        };
        return columns;
    }

    render(){
        if(this.state.data.length) {
            return(
                <div className="class">
                    <div className="class-cover" style={{ backgroundImage: "url(" + this.state.classImages[this.props.match.params.classid] + ")" }}>
                        <div className="class-name">- {this.state.data[0].name} -</div>
                    </div>
                    <Clearfix />
                    <SubclassList subclasses={this.state.data[0].subclasses}/>
                    <SkillList skills={this.state.data[0].skills} groupByColumns={this.groupSkillsInColumns} />
                </div>
            )
        }

        return null
    }
}

const Skill = (props) => {
    return (
        <Col xs={12} md={4} key={props.id}>
            <div className="skill">
                <div className="skill-header gradient-orange" data-toggle="collapse" data-target={"#" + props.id}>
                    <img className="skill-image float-left" src={props.imgUrl} alt={"skill-" + props.name} />
                    <span className="skill-name">{props.name}</span>
                    <Badge bsClass={"badge skill-kind skill-" + props.kind.toLowerCase()}>{props.kind.toLowerCase()}</Badge>
                </div>
                <div className="skill-body" id={props.id}>
                    <p>{props.description}</p>
                    {props.damage !== null ? <Badge>damage: {props.damage}% </Badge> : ""}
                </div>
            </div>
        </Col>
    )
}

const SkillList = (props) => {
    return (
        <div className="skill-section">
            <h4 className="skill-type">Weapon Skills</h4>
            {props.groupByColumns(props.skills['Weapon'].map(skill => <Skill key={skill.id} {...skill} />))}
            <h4 className="skill-type">Class Skills</h4>
            {props.groupByColumns(props.skills['Class'].map(skill => <Skill key={skill.id} {...skill} />))}
            <h4 className="skill-type">Expert Skills</h4>
            {props.groupByColumns(props.skills['Expert'].map(skill => <Skill key={skill.id} {...skill} />))}
        </div>
    )
}

const Subclass = (props) => {
    return (
        <Col md={6}>
            <div className="subclass">
                <Row>
                    <Col xs={3} md={3}>
                        <img src={props.imgUrl} alt={props.name} />
                    </Col>
                    <Col xs={9} md={9}>
                        <div className="subclass-name">{props.name}</div>
                        <span className="subclass-equipment">Main Weapon: <span className="main-weapon">{props.main_equipment}</span></span>
                        <span className="subclass-equipment">Main Start: <span className="main-stat">{props.main_stats}</span></span>
                        <br />
                        <div className="bar">
                            <div className="mdb-bar"><span className="attack" style={{width: props.attack + '0%'}}>Attack</span></div>
                            <div className="mdb-bar"><span className="hp" style={{width: props.hp + '0%'}}>HP</span></div>
                            <div className="mdb-bar"><span  className="coop" style={{width: props.coop + '0%'}}>Coop</span></div>
                        </div>
                    </Col>
                    <Clearfix/>
                </Row>
            </div>
            <div className="subclass footer">
                <p>{props.description}</p>
            </div>
        </Col>
    )
}

const SubclassList = (props) => {
    return (
        <div>
            <h4 className="skill-type">Subclasses</h4>
            <Row>
                {props.subclasses.map((subclass) => <Subclass key={subclass.id} {...subclass} />)}
            </Row>
        </div>
    )
}

export default ClassDetails