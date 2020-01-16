import React from 'react';
import { Container } from 'react-bootstrap'
import DocsNavbar from '../components/DocsNavbar'
import { Redirect } from 'react-router-dom';


class DocsPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { activeUser, handleLogout } = this.props
    if (!activeUser) {
      return <Redirect to="/" />
    }
    return (
      <Container>
        <h1> Home Page user</h1>
        <h1>{activeUser.fname}'s Docs</h1>
      </Container>
    );
  }
}

export default DocsPage;