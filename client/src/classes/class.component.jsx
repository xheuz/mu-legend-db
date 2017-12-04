import React, { Component } from 'react';
import { Row, Col, Grid, Thumbnail, Button } from 'react-bootstrap';
import './class.css';

const images = {
    1: "https://i.ytimg.com/vi/5Yyl07UmdDE/maxresdefault.jpg",
    2: "https://i.ytimg.com/vi/fR-46pk_Gtc/maxresdefault.jpg",
    3: "https://i.ytimg.com/vi/8JHw9YYpCn4/maxresdefault.jpg",
    4: "https://i.ytimg.com/vi/FJOmYNMhSj0/maxresdefault.jpg",
    5: "http://image.webzen.kr/mu_legend/event/20170810_emphasizer/images/img_slider3.jpg"
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
        var url = 'http://ec2-52-27-199-57.us-west-2.compute.amazonaws.com:7475';
        fetch(url + '/classes')
        .then( (results) => results.json())
        .then(data => {
            let characters = data.map( (character) => {
               return (
                    <Col xs={6} md={4}>
                        <a className="class-skills" href= {url + '/classes/' + character.id + '/skills'}>
                            <Thumbnail src={images[character.id]} alt="242x200">
                                <h3>
                                    {character.name }
                                </h3>
                                <p>
                                    Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
                                </p>
                            </Thumbnail>
                        </a>
                    </Col>
                )
            });
            console.log(characters);
            this.setState({characters: characters});
            console.log("state", this.state.characters);
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