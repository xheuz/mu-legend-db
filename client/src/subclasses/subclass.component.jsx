import React, { Component } from 'react';
import { Row, Col, Clearfix } from 'react-bootstrap';
import './subclass.css';

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
            <Col md={6} key={indx}>
                <div className="subclass">
                    <Row>
                        <Col xs={12} md={3}>
                            <img src={subclass.imgUrl} alt={subclass.name} />
                        </Col>
                        <Col xs={12} md={9}>
                            <div className="subclass-name">{subclass.name}</div>
                            <p className="subclass-equipment">{subclass.main_equipment} / {subclass.main_stats}</p>
                            <div className="bar">
                                <div className="mdb-bar"><span className="attack" style={{width: subclass.attack + '0%'}}></span></div>
                                <div className="mdb-bar"><span className="hp" style={{width: subclass.hp + '0%'}}></span></div>
                                <div className="mdb-bar"><span  className="coop" style={{width: subclass.coop + '0%'}}></span></div>
                            </div>
                        </Col>
                        <Clearfix/>
                    </Row>
                </div>
                <div className="subclass footer">
                    <p>{subclass.description}</p>
                </div>
            </Col>
        ))

        this.setState({subclasses: subclasses});
    }

    render(){
        return(
            <Row>{this.state.subclasses}</Row>
        )
    }
}

export default Subclass;