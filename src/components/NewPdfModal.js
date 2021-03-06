import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col, Image } from 'react-bootstrap';

export default class NewPdfModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            file: undefined
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.createPdf = this.createPdf.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    handleFileChange(event) {
        let newFile;
        if (event.target.files[0]) {
            newFile = {
                file: event.target.files[0],
            }
        } else {
            newFile = {
                name: "",
                file: undefined,
            }
        }


        this.setState({ file: newFile });
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
        const { name, parent, file } = this.state;
        const newPdf = { parent, name, file };
        this.props.handleNewPdf(newPdf);
        this.props.handleClose();
        this.setState({
            name: "",
            file: undefined
        })
    }

    render() {
        const { show, handleClose } = this.props;
        const { name, file } = this.state;
        return (

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New PDF</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Pdf name</Form.Label>
                            <Form.Control name="name" value={name}
                                type="text" placeholder="Enter pdf name" onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Pdf page</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control type="file" onChange={this.handleFileChange} />
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
