import React, { Component } from 'react'
import ArtifactList from './artifact-list.component'
import './artifacts.css'

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

export default Artifacts;