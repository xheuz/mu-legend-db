import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import './class.css';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        };
    }

    componentWillMount() {
        this.CharacterList();
    }

    CharacterList() {
        fetch(this.props.api + '/classes')
        .then( (results) => results.json())
        .then(results => {
            this.setState({characters: results.data});
        });
    }

    render() {
        return (
            <Grid>
                <CharacterClassList characters={this.state.characters} staticData={this.props.staticData} />
            </Grid>
        );
    }
}

const CharacterClass = (props) => {
    return (
        <Col xs={12} md={4} key={props.id}>
            <a className="class-skills" href={'/classes/' + props.id }>
                <div className="character" style={{backgroundImage: 'url('+ props.staticData[props.id]["image"] +')'}}>
                    <div className="character-description">
                        <div className="character-description-title">
                            {props.name}
                        </div>
                        <div className="character-description-body">
                            {props.staticData[props.id]["lore"]}
                        </div>
                        <div className="character-more">
                            <i className="icon-question"></i>
                        </div>
                    </div>
                </div>
            </a>
        </Col>
    );
}

const CharacterClassList = (props) => {
    return (
        <Row>
            {props.characters.map((character, i) => <CharacterClass key={i} {...character} staticData={props.staticData}/>)}
        </Row>
    )
}

export default Character;