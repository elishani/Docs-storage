import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col, Image } from 'react-bootstrap';

export default class NewPdfModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            filePdf: {
                file: undefined,
                URL: undefined
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.createPdf = this.createPdf.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    handleFileChange(event) {
        let newFilePdf;
        if (event.target.files[0]) {
            newFilePdf = {
                file: event.target.files[0],
                URL: URL.createObjectURL(event.target.files[0])
            }
        } else {
            newFilePdf = {
                file: undefined,
                URL: undefined
            }
        }


        this.setState({filePdf: newFilePdf});        
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    createPdf() {
        const { name, filePdf } = this.state;
        const newPdf = { name, pdf: filePdf.URL};
        this.props.handleNewPdf(newPdf);
        this.props.handleClose();
        this.setState({
            name: "",
            pdf: ""
        })
    }

    render() {
        const { show, handleClose } = this.props;
        const { name,  filePdf } = this.state;

        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Pdf</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" value={name}
                                type="text" placeholder="Enter PDF Name" onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Pdf URL</Form.Label>
                            <Row>
                                <Col>
                            <Form.Control type="file" onChange={this.handleFileChange} />
                                </Col>
                                <Col>
                                    <Image src={filePdf.URL} fluid/>
                                </Col>

                            </Row>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                </Button>
                    <Button variant="success" onClick={this.createPdf}>
                        Create
                </Button>
                </Modal.Footer>
            </Modal>);
    }
}
