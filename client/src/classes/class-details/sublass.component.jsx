import React from 'react'
import { Col, Row, Clearfix } from 'react-bootstrap'

const Subclass = (props) => {
    return (
        <Col md={6}>
            <div className="subclass gradient-grey">
                <Row>
                    <Col xs={3} md={3}>
                        <img src={props.imgUrl} alt={props.name} />
                    </Col>
                    <Col xs={9} md={9}>
                        <div className="subclass-name">{props.name}</div>
                        <span className="subclass-equipment">Main Weapon: <span className="main-weapon">{props.main_equipment}</span></span> &nbsp; 
                        <span className="subclass-equipment">Main Stat: <span className="main-stat">{props.main_stats}</span></span>
                        <br /><br />
                        <div className="bar">
                            <div className="mdb-bar"><span className="attack" style={{width: props.attack + '0%'}}>Attack: {props.attack}</span></div>
                            <div className="mdb-bar"><span className="hp" style={{width: props.hp + '0%'}}>HP: {props.hp}</span></div>
                            <div className="mdb-bar"><span  className="coop" style={{width: props.coop + '0%'}}>Coop: {props.coop}</span></div>
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

export default Subclass