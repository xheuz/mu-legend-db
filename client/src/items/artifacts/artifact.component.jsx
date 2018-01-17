import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Artifact = (props) => {
    const style = {
        minHeight: '170px',
        backgroundColor: '#000',
        borderRadius: '5px',
        position: 'relative',
        padding: '5px',
        marginBottom: '10px',
        color: 'white',
        overflow: 'hidden'
    }
    return (
        <Col xs={6} md={6} lg={6} key={props.id}>
            <div className="artifact" style={style}>
                <div><img className="img-responsive" src={props.imgUrl} alt={props.name} /></div>
                <div className="artifact-content">
                    <div className="artifact-title">{props.name}</div>
                    <div className="artifact-info">
                        <Row>
                            <Col lg={8}>
                            <span>{props.basic_effect}</span>
                            </Col>
                            <Col lg={4}>
                            <div><span className="amount-per-level">{props.per_level_increase.toString() + '%'}</span> x level</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div>{props.lvl20_effect}</div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Artifact