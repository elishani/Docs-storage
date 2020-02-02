import React from 'react';
import { Container, Button } from 'react-bootstrap'
import DocsNavbar from '../components/DocsNavbar'
import DocTreebeard from '../components/DocTreebeard'
import { Redirect } from 'react-router-dom';
import './DocsPage.css'
import NewPdfModal from '../components/NewPdfModal'

export default class DocsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showNewPdfModal: false
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleNewPdf = this.handleNewPdf.bind(this)
  }

  handleClose(){
    this.setState({
      showNewPdfModal: false
    })
  }

    handleNewPdf(newPdf){
      this.props.handleNewPdf(newPdf)
    }


  render() {
    const { showNewPdfModal} = this.state
    const { activeUser, handleLogout } = this.props
    if (!activeUser) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <DocsNavbar activeUser={activeUser} handleLogout={handleLogout} />
        <Container>
          <div className="docs-header">
            <h1>{activeUser.fname}'s Documents storage</h1>
            <Button onClick={() => {this.setState({showNewPdfModal: true})}}>Add PDF</Button> 
          </div>
          <div className="tree">
            <DocTreebeard />
          </div>
        </Container>

        <NewPdfModal show={showNewPdfModal} handleClose={this.handleClose} handleNewPdf={this.handleNewPdf} />
      </div>
    );
  }
}