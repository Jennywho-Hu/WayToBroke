import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

class Name extends Component {
  render() {
    return (
      <Container>
        <Card bg="info" text="white" style={{ minHeight: "400px" }}>
          <Form style={{ width: "60%", marginLeft: "20%", marginTop: "10%" }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                size="lg"
                type="name"
                placeholder="Enter your name"
                onChange={e => this.props.handleChange(e)}
              />
            </Form.Group>
            <Button variant="light" onClick={this.props.handleSubmit}>
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, null)(Name);
