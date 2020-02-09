import React from 'react';
import { Container, Button } from 'react-bootstrap'
import DocsNavbar from '../components/DocsNavbar'
import DocTreebeard from '../components/DocTreebeard'
import { Redirect } from 'react-router-dom';
import './DocsPage.css'
import NewPdfModal from '../components/NewPdfModal'
import MenuModel from '../model/MenuModel'
import Parse from 'parse';

export default class DocsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showNewPdfModal: false
    }
    this.state = {
      pdfFiles: []
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleNewPdf = this.handleNewPdf.bind(this)
    this.handlePdf = this.handlePdf.bind(this)
  }


  async handlePdf(parent) {
    

    this.setState({
      showModal: false,
      pdfFiles: []
    })
    if (!parent){
      return
    }
    const folderTable = Parse.Object.extend('folder');
    const queryFolder = new Parse.Query(folderTable);
    const folder = await queryFolder.get(parent);

    const pdfStore = Parse.Object.extend('pdfStore');
    const query = new Parse.Query(pdfStore);
    query.equalTo("parent", folder);

   
    const pdfFiles = await query.find();
    this.setState({
      pdfFiles: pdfFiles,
      showModal: true
    })
  
  }


  handleClose() {
    this.setState({
      showNewPdfModal: false
    })
  }

  handleNewPdf(newPdf) {
    
    const Pdf = Parse.Object.extend("pdfStore");
    const newParsePdf = new Pdf();
    newParsePdf.set('name', newPdf.name);
    newParsePdf.set('file', new Parse.File(newPdf.file.file.name, newPdf.file.file));
    newParsePdf.set('parent', newPdf.parent);

    newParsePdf.save().then(theCreatedParsePdf => {
              console.log('Pdf created', theCreatedParsePdf);
              this.setState({
                  pdfs: this.state.pdfs.concat(new MenuModel(theCreatedParsePdf))
              })
            })
  }
 
  render() {
    const { showNewPdfModal, pdfFiles } = this.state
    const { activeUser, handleLogout } = this.props
    if (!activeUser) {
      return <Redirect to="/" />
    }
    let showModalWindow = "";

    if (this.state.showModal === true) {
       showModalWindow = <Button onClick={() => { this.setState({ showNewPdfModal: true } ) }} >Add PDF</Button>
    }
    const pdfList = pdfFiles.map(pdfFile =>
      <div>
        <a href={pdfFile.get("file")._url} target="_blank">{pdfFile.get("name")}</a>
      </div>
    )
    
    return (
      <div>
        <DocsNavbar activeUser={activeUser} handleLogout={handleLogout} />
        <Container>
          <div className="docs-header">
            <h1>{activeUser.fname}'s Documents storage</h1>

          </div>
          <div className="tree">
            <DocTreebeard activeUser={activeUser} handlePdf={this.handlePdf} />
          </div>
          <div>
            {showModalWindow}
            {pdfList}
          </div>
        </Container>

        <NewPdfModal show={showNewPdfModal} handlePdf={this.handlePdf} handleClose={this.handleClose} handleNewNode={this.handleNewNode} />

      </div>
    );
  }
}