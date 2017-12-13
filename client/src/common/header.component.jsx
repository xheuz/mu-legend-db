import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './header.css';

class Navigation extends Component {
    render() {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className="navbar-brand" href="/"><div className="logo">DB</div></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">Home</NavItem>
                        <NavItem eventKey={2} href="/classes">Classes</NavItem>
                        <NavItem eventKey={3} href="/instances">Instances</NavItem>
                        <NavItem eventKey={4} href="/items">Items</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown eventKey={3} title="Login" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Profile</MenuItem>
                            <MenuItem eventKey={3.2}>Account</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }    
}

export default Navigation;