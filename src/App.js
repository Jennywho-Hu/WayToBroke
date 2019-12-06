import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Character from "./Character";
import Routine from "./Routine";

function App() {
  return (
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
  );
}

export default App;
