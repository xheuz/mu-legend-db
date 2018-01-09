import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './artifacts.css';

class Artifacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artifacts: []
        };
    }

    componentDidMount() {
        this.ArtifactsList();
    }

    ArtifactsList() {
        fetch(this.props.api + '/artifacts')
        .then( (results) => results.json())
        .then(data => {
            this.setState({ artifacts: data.data});
        });
    }

    render() {
        return (
            <div className="cover">
                <div className="cover-image" style={{backgroundImage: 'url(https://i.ytimg.com/vi/8lGo6vXcMfQ/maxresdefault.jpg)'}} alt="artifacts">
                    <div className="class-name">- Artifacts -</div>
                </div>
                <ArtifactList artifacts={this.state.artifacts}/>
            </div>
        );
    }
}

const Artifact = (props) => {
    const style = {
        height: '120px',
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
                    <p>{props.basic_effect}</p>
                    <p>At level 20: {props.lvl20_effect}</p>
                    <p>{props.per_level_increase.toString() + '%'} per level increased.</p>
                </div>
            </div>
        </Col>
    )
}

const ArtifactList = ({artifacts}) => {
    return (
        <Row>
            {artifacts.map((artifact, i) => <Artifact key={i} {...artifact} />)}
        </Row>
    )
}

export default Artifacts;