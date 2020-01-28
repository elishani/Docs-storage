import React, {Component} from 'react'
import { Jumbotron, Button } from 'react-bootstrap';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { activeUser, handleLogout } = this.props;

        return (
            <div>

                <Jumbotron>
                    <h1>Documents storage</h1>
                    <p>
                       One place for all your documents
                    </p>
                    <p>
                        <Button variant="success" href="#/login">Login</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

