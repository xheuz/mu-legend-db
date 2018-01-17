import React from 'react'
import { Row } from 'react-bootstrap'
import Artifact from './artifact.component'

const ArtifactList = ({artifacts}) => {
    return (
        <Row>
            {artifacts.map((artifact, i) => <Artifact key={i} {...artifact} />)}
        </Row>
    )
}

export default ArtifactList