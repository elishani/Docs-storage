import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class DocsNavbar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { activeUser } = this.props;

        const docsLink = activeUser ? <Nav.Link href="#/docs">Docs</Nav.Link> : null;
        const signupLink = !activeUser ? <Nav.Link href="#/signup">Singup</Nav.Link> : null;
        const loginLink = !activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null;
        const logoutLink = activeUser ? <Nav.Link href="#/">Logout</Nav.Link> : null;

        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand><h1>Documents Cluster</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {docsLink}
                </Nav>
                <Nav className="ml-auto">
                    {signupLink}
                    {loginLink}
                    {logoutLink}  
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default DocsNavbar;