import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Character from "./Character";
import Things from "./Things";
import { Provider } from "react-redux";
import store from "./store";
import Name from "./Name";
import * as actionCreators from "./store/actionCreators";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: false,
      inputValue: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <Provider store={store}>
        {this.state.name ? (
          <Container>
            <Row>
              <Col>
                <Character />
              </Col>
              <Col xs={8}>
                <Things />
              </Col>
            </Row>
          </Container>
        ) : (
          <Name
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          ></Name>
        )}
      </Provider>
    );
  }
  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }
  handleSubmit() {
    store.dispatch(actionCreators.changeName(this.state.inputValue));
    this.setState({ name: true });
  }
}

export default App;
