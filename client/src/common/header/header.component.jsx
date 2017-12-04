import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#"><img src="http://gamebase.armorthemes.com/images/logo.png" alt="GameBase" border="0" /></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                <NavItem eventKey={1} href="/">Home</NavItem>
                <NavItem eventKey={2} href="#">Atifacts</NavItem>
                <NavDropdown eventKey={3} title="Classes" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1} href="http://ec2-52-27-199-57.us-west-2.compute.amazonaws.com:7475/classes/1/skills">Whisperer</MenuItem>
                    <MenuItem eventKey={3.2} href="http://ec2-52-27-199-57.us-west-2.compute.amazonaws.com:7475/classes/2/skills">Dark Lord</MenuItem>
                    <MenuItem eventKey={3.3} href="http://ec2-52-27-199-57.us-west-2.compute.amazonaws.com:7475/classes/3/skills">Blader</MenuItem>
                    <MenuItem eventKey={3.4} href="http://ec2-52-27-199-57.us-west-2.compute.amazonaws.com:7475/classes/4/skills">War Mage</MenuItem>
                </NavDropdown>
                </Nav>
            </Navbar>
        );
    }    
}

export default Navigation;