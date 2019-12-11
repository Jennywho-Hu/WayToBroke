import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Character from "./character/Character";
import Routine from "./things/Routine";
import { Provider } from "react-redux";
import store from "./store";
import Modal from "react-bootstrap/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  render() {
    return (
      <Provider store={store}>
        <Container style={{ height: "100%" }}>
          <Row>
            <Col>
              <Character />
            </Col>
            <Col xs={8}>
              <Routine />
            </Col>
          </Row>
          <Modal size="sm" aria-labelledby="example-modal-sizes-title-sm">
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Small Modal
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
          </Modal>
        </Container>
      </Provider>
    );
  }
}

export default App;
