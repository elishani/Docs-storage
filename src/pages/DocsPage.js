import React from 'react';
import { Container } from 'react-bootstrap'
import DocsNavbar from '../components/DocsNavbar'
import DocsSidebar from '../components/DocsSidebar'
import { Redirect } from 'react-router-dom';
import './DocsPage.css'

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
      <div>
      <DocsNavbar activeUser={activeUser} handleLogout={handleLogout} />
      <Container>
          <div className="docses-header">
              <h1>{activeUser.fname}'s Documents storage</h1>
              
          </div>
         

      </Container>
      <DocsSidebar/>
      

  </div>
    );
  }
}

export default DocsPage;