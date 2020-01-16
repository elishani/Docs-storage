import React from 'react';
import './LoginPage.css';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

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
        const { allUsers, handleLogin } = this.props;
        let { email, pwd } = this.state;

        const newActiveUser = allUsers.find(user => user.email.toLowerCase() === email.toLowerCase() && user.pwd === pwd);
        if (newActiveUser) {
            handleLogin(newActiveUser);
            this.setState({
                redirectToDocsPage: true
            });
        } else {
            this.setState({
                showInvalidLoginError: true
            });
        }
    }

    render() {
        const { email, pwd, showInvalidLoginError, redirectToDocsPage } = this.state

        if (redirectToDocsPage){
            return <Redirect to="/docs"/>
        }
        
        const errorAlert = showInvalidLoginError ? <Alert variant="danger">Invalid email or password!</Alert> : null
       
        return (
            <div>
                <h1>LoginPage</h1>
                <div className="p-login">
                    <div className="main">
                        <h1>Welcome to </h1>
                        <h1>Documents Storage</h1>
                        <p>or <Link to="/signup">Create a new account</Link></p>
                        {errorAlert}
                        <Form>
                            <Form.Group controlId="frombsicaEmail">
                                <Form.Label>Email adderess</Form.Label>
                                <Form.Control value={email} name="email" type="email" placeholder="Enter Email" onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="frombsicaPassword">
                                <Form.Label>Pssword</Form.Label>
                                <Form.Control value={pwd} name="pwd" type="Password" placeholder="Password" onChange={this.handleInputChange} />
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