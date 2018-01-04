import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import './class.css';

const url = 'http://ec2-52-27-199-57.us-west-2.compute.amazonaws.com:7475';

const staticData = {
    1: {
        "image": "https://i.ytimg.com/vi/5Yyl07UmdDE/maxresdefault.jpg",
        "lore": "A class balanced offense and defense, based on its high health and defense. Specializes in powerful area attacks, and has the tactical role of protexting and boosting allies."
    },
    2: {
        "image": "https://i.ytimg.com/vi/fR-46pk_Gtc/maxresdefault.jpg",
        "lore": "Desvastates enemies on the frontline with a combination of quick charge skills and various crowd control skills. High mobility allows the Blader to function as a melee attacker and a frontline tank."
    },
    3: {
        "image": "https://i.ytimg.com/vi/8JHw9YYpCn4/maxresdefault.jpg",
        "lore": "Has relatively low health and defense, but can deliver the most powerful area attacks. You can build your War Mage in many ways such as a mage-type using a staff or an assassin-type wielding a sword."
    },
    4: {
        "image": "https://i.ytimg.com/vi/FJOmYNMhSj0/maxresdefault.jpg",
        "lore": "Powerful ranged damage dealer with high mobility. Capable of employing a wide range of strategies, utilizing not only bows but also traps, smoke shells, and the power of nature."
    },
    5: {
        "image": "http://image.webzen.kr/mu_legend/event/20170810_emphasizer/images/img_slider3.jpg",
        "lore": "Based on her ability to awaken a lost power to control objects and minds, a Spellbinder can freely manipulate weapons to make ranged attacks, inmobilize or mind-control a small group of targets."
    }
}

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
        fetch(url + '/classes')
        .then( (results) => results.json())
        .then(results => {
            this.setState({characters: results.data});
        });
    }

    render() {
        return (
            <Grid>
                <CharacterClassList characters={this.state.characters}  />
            </Grid>
        );
    }
}

const CharacterClass = (props) => {
    return (
        <Col xs={12} md={4} key={props.id}>
            <a className="class-skills" href={'/classes/' + props.id }>
                <div className="character" style={{backgroundImage: 'url('+ staticData[props.id]["image"] +')'}}>
                    <div className="character-description">
                        <div className="character-description-title">
                            {props.name}
                        </div>
                        <div className="character-description-body">
                            {staticData[props.id]["lore"]}
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
            {props.characters.map((character, i) => <CharacterClass key={i} {...character} />)}
        </Row>
    )
}

export default Character;