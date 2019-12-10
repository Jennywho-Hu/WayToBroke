import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Character from "./Character";
import Routine from "./Routine";
import { Provider } from "react-redux";
import store from "./store";

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
        </Container>
      </Provider>
    );
  }
}

export default App;
