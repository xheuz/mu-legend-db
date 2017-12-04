import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Mu Legend Database</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/">Home</NavItem>
                    <NavItem eventKey={2} href="/classes">Classes</NavItem>
                    <NavItem eventKey={3} href="/instances">Instances</NavItem>
                    <NavItem eventKey={4} href="/items">Items</NavItem>
                </Nav>
            </Navbar>
        );
    }    
}

export default Navigation;