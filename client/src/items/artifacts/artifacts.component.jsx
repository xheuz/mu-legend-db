import React, { Component } from 'react';
import { Row, Col, Grid, Thumbnail } from 'react-bootstrap';
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
            let artifacts = data.data.map( (artifacts) => {
               return (
                   <Col xs={6} md={6} key={artifacts.id}>
                        <a className="class-skills">
                           <Thumbnail className='artifact-thumb'>
                                <span><h3>
                                   {artifacts.name }
                                </h3>
                                   <img className="artifact-img" src={artifacts.imgUrl} alt=""/>
                                </span>
                                <p>
                                   <span className="artifact-attribute">Basic effect <br /></span><span className="basic-effect">{artifacts.basic_effect}</span>
                                </p>
                               <p>
                                   <span className="artifact-attribute">Increase per Level:</span> <span className="level-increase">{artifacts.per_level_increase}%</span>
                               </p>
                               <p>
                                   <span className="artifact-attribute">Level 20 Effect <br /></span> <span className="basic-effect">{artifacts.lvl20_effect}</span>
                               </p>
                            </Thumbnail>
                        </a>
                    </Col>
                )
            });
            this.setState({ artifacts: artifacts});
        });
    }

    render() {
        return (
            <Grid>
                <Row>{this.state.artifacts }</Row>
            </Grid>
        );
    }
}

export default Artifacts;