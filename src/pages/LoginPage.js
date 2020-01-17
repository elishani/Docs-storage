import React from 'react';
import './LoginPage.css';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Parse from 'parse';
import UserModel from '../model/UserModel'

class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            pwd: "",

            showInvalidLoginError: false,  
            redirectToDocsPage: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.login = this.login.bind(this)
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    login() {
        const { handleLogin } = this.props;
        const { email, pwd } = this.state;

        Parse.User.logIn(email, pwd).then(parseUser => {
            const user = new UserModel(parseUser);
            console.log('Logged in user', user);

            handleLogin(user);

            this.setState({
                redirectToDocsPage: true
            });

        }).catch(error => {
            console.error('Error while logging in user', error);
            this.setState({
                showInvalidLoginError: true
            });
        })
    }

    render() {
        const { email, pwd, showInvalidLoginError, redirectToDocsPage } = this.state

        if (redirectToDocsPage){
            return <Redirect to="/docs"/>
        }
        
        const errorAlert = showInvalidLoginError ? <Alert variant="danger">Invalid email or password!</Alert> : null
       
        return (
            <div>
                <div className="p-login">
                    <div className="main">
                        <h1>Welcome to </h1>
                        <h1>Documents Storage</h1>
                        <p>or <Link to="/signup">Create a new account</Link></p>
                        {errorAlert}
                        <Form>
                            <Form.Group controlId="formBsicaEmail">
                                <Form.Label>Email adderess</Form.Label>
                                <Form.Control name="email" value={email}
                                    type="email" placeholder="Enter Email" onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="formBsicaPassword">
                                <Form.Label>Pssword</Form.Label>
                                <Form.Control name="pwd"  value={pwd}
                                    type="Password" placeholder="Password" onChange={this.handleInputChange} />
                            </Form.Group>
                            <Button vriant="success" type="button" block onClick={this.login}>
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