import React from 'react'
import { Row } from 'react-bootstrap'
import Subclass from './sublass.component'

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

export default SubclassList