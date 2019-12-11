import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import * as actionCreators from "./store/actionCreators";
import { connect } from "react-redux";

class Routine extends Component {
  constructor(props) {
    super(props);
    this.handleReject = this.handleReject.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
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
              src={this.props.stuffList.eventImg}
              style={{
                width: "auto",
                height: "300px",
                borderRadius: "5px",
                display: "block",
                margin: "0 auto"
              }}
              bg="light"
            />
            <Card.Title>{this.props.stuffList.eventName}</Card.Title>
            <Card.Text text="dark">{this.props.stuffList.eventDesc}</Card.Text>
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
              <Button
                variant="success"
                size="lg"
                onClick={() => this.props.handleAccept(this.props.stuffList)}
              >
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
  handleAccept(newEvent) {
    this.props.handleAccept(newEvent);
  }
}

const mapStateToProps = state => {
  return {
    flag: state.getIn(["things", "flag"]),
    stuffList: state.getIn(["things", "stuffList"]),
    show: state.getIn(["things", "show"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      const stuffId = Math.floor(Math.random() * Math.floor(4));
      dispatch(actionCreators.getStuff(stuffId));
      dispatch(actionCreators.disableEventclick());
    },
    handleAccept(newEvent) {
      dispatch(actionCreators.addNewEvent(newEvent));
      dispatch(actionCreators.calcualteMoney(newEvent));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Routine);
