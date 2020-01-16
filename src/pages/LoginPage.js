import React from 'react';
import './LoginPage.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {

    render() {
        return (
            <div>
                <div className="p-login">
                    <div className="main">
                        <h1>Login to: </h1>
                        <h1> documents storage</h1>
                        <p>or <Link to="/signup">Create a new account</Link></p>
                        <Form>
                            <Form.Group controlId="frombsicaEmail">
                                <Form.Label>Email adderess</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group controlId="frombsicaPassword">
                                <Form.Label>Pssword</Form.Label>
                                <Form.Control type="Password" placeholder="Password" />
                            </Form.Group>
                            <Button vriant="success" type="button" block>
                                Login
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default LoginPage;