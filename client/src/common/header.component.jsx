import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './header.css';

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = { isOpenInstances: false,
            isOpenItems: false
        }
    }

    handleOpen = (e) => {
        this.setState({ [e] : true })
    }

    handleClose = (e) => {
        this.setState({ [e] : false })
    }

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
                        <NavDropdown eventKey={3} title="Instances" id="basic-nav-dropdown2"
                        onMouseEnter = { () => this.handleOpen("isOpenInstances") }
                        onMouseLeave = { () => this.handleClose("isOpenInstances") }
                        open = { this.state.isOpenInstances }
                        onToggle 
                        noCaret>
                            <MenuItem eventKey={3.1} href="/instances/endless-tower">Endless Tower</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title="Items" id="basic-nav-dropdown3"
                        onMouseEnter = { () => this.handleOpen("isOpenItems") }
                        onMouseLeave = { () => this.handleClose("isOpenItems") }
                        open = { this.state.isOpenItems }
                        onToggle
                        noCaret>
                            <MenuItem eventKey={4.1}>Equipment</MenuItem>
                            <MenuItem eventKey={4.2} href="/artifacts">Artifacts</MenuItem>
                            <MenuItem eventKey={4.3}>Other</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown eventKey={1} title="Login" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>Profile</MenuItem>
                            <MenuItem eventKey={1.2}>Account</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.3}>Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }    
}

export default Navigation;