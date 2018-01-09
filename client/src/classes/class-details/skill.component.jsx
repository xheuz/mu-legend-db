import React from 'react';
import { Col, Badge } from 'react-bootstrap';

const Skill = (props) => {
    const setToggle = (id) => {
        let element = document.getElementById(id);
        if (element.getAttribute('class') === 'skill-body'){
            element.className += " hidden";
        } else {
            element.className = 'skill-body';
        }
    }
    return (
        <Col xs={12} md={4} key={props.id}>
            <div className="skill">
                <div className="skill-header gradient-orange" onClick={() => setToggle(props.id)}>
                    <img className="skill-image float-left" src={props.imgUrl} alt={"skill-" + props.name} />
                    <span className="skill-name">{props.name}</span>
                    <Badge bsClass={"badge skill-kind skill-" + props.kind.toLowerCase()}>{props.kind.toLowerCase()}</Badge>
                </div>
                <div id={props.id} className="skill-body hidden">
                    <p>{props.description}</p>
                    {props.damage !== null ? <Badge>damage: {props.damage}% </Badge> : ""}
                </div>
            </div>
        </Col>
    )
}

export default Skill