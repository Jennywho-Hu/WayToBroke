import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import store from "./store";
import * as actionCreators from "./store/actionCreators";
import { connect } from "react-redux";

class Routine extends Component {
  constructor(props) {
    super(props);
    this.handleReject = this.handleReject.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <Card bg="light" style={{ height: "100%" }}>
        <Button
          variant="primary"
          size="lg"
          onClick={this.props.handleClick}
          text="white"
        >
          What gonna happen today
        </Button>
        {this.props.flag ? (
          <Card.Body>
            <Card.Title>Get ready for today</Card.Title>
          </Card.Body>
        ) : (
          <Card.Body>
            <Image
              variant="top"
              src={this.props.eventList.eventImg}
              style={{
                width: "auto",
                height: "300px",
                borderRadius: "5px",
                display: "block",
                margin: "0 auto"
              }}
              bg="light"
            />
            <Card.Title>{this.props.eventList.eventName}</Card.Title>
            <Card.Text text="dark">{this.props.eventList.eventDesc}</Card.Text>
            <ButtonToolbar
              style={{
                margin: "0 auto",
                width: "200px",
                marginTop: "30px"
              }}
            >
              <Button
                variant="light"
                style={{ marginRight: "10px" }}
                size="lg"
                onClick={this.handleReject}
              >
                Reject
              </Button>
              <Button variant="success" size="lg" onClick={this.handleAccept}>
                Accept
              </Button>
            </ButtonToolbar>
          </Card.Body>
        )}
      </Card>
    );
  }

  handleReject() {
    console.log("reject");
  }
  handleAccept() {
    console.log("accept");
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
}

const mapStateToProps = state => {
  return {
    flag: state.get("flag"),
    eventList: state.get("eventList")
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      const productId = Math.floor(Math.random() * Math.floor(4));
      dispatch(actionCreators.getEvent(productId));
      dispatch(actionCreators.disableEventclick());
    },
    handleStoreChange() {
      dispatch();
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Routine);
