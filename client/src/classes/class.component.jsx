import React, { Component } from 'react';
import { Row, Col, Grid, Thumbnail } from 'react-bootstrap';
import './class.css';

const url = 'http://ec2-52-27-199-57.us-west-2.compute.amazonaws.com:7475';

const images = {
    1: "https://i.ytimg.com/vi/5Yyl07UmdDE/maxresdefault.jpg",
    2: "https://i.ytimg.com/vi/fR-46pk_Gtc/maxresdefault.jpg",
    3: "https://i.ytimg.com/vi/8JHw9YYpCn4/maxresdefault.jpg",
    4: "https://i.ytimg.com/vi/FJOmYNMhSj0/maxresdefault.jpg",
    5: "http://image.webzen.kr/mu_legend/event/20170810_emphasizer/images/img_slider3.jpg"
}

const lore = {
    1: "A class balanced offense and defense, based on its high health and defense. Specializes in powerful area attacks, and has the tactical role of protexting and boosting allies.",
    2: "Desvastates enemies on the frontline with a combination of quick charge skills and various crowd control skills. High mobility allows the Blader to function as a melee attacker and a frontline tank.",
    3: "Has relatively low health and defense, but can deliver the most powerful area attacks. You can build your War Mage in many ways such as a mage-type using a staff or an assassin-type wielding a sword.",
    4: "Powerful ranged damage dealer with high mobility. Capable of employing a wide range of strategies, utilizing not only bows but also traps, smoke shells, and the power of nature.",
    5: "Based on her ability to awaken a lost power to control objects and minds, a Spellbinder can freely manipulate weapons to make ranged attacks, inmobilize or mind-control a small group of targets."
}

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        };
    }

    componentDidMount() {
        this.CharacterList();
    }

    CharacterList() {
        fetch(url + '/classes')
        .then( (results) => results.json())
        .then(data => {
            let characters = data.map( (character) => {
               return (
                    <Col xs={6} md={4} key={character.id}>
                        <a className="class-skills" href={'/classes/' + character.id }>
                            <Thumbnail src={images[character.id]} alt="242x200">
                                <h3>
                                    {character.name }
                                </h3>
                                <p>
                                    {lore[character.id]}
                                </p>
                            </Thumbnail>
                        </a>
                    </Col>
                )
            });
            // console.log(characters);
            this.setState({characters: characters});
            // console.log("state", this.state.characters);
        });
    }

    render() {
        return (
            <Grid>
                <Row>{ this.state.characters }</Row>
            </Grid>
        );
    }
}

export default Character;