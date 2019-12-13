import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import * as actionCreators from "./store/actionCreators";
import { connect } from "react-redux";

class Things extends Component {
  constructor(props) {
    super(props);
    this.handleReject = this.handleReject.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
  }

  render() {
    return (
      <Card bg="light" style={{ height: "100%" }}>
        {this.props.flag ? (
          <Button
            style={{ height: "100%" }}
            variant="info"
            size="lg"
            onClick={this.props.handleClick}
            text="white"
          >
            Click to See What gonna happen today
          </Button>
        ) : (
          <Card.Body>
            <Card.Title text="warning">Do you wanna accept this?</Card.Title>

            <Image
              variant="top"
              src={this.props.stuffList.stuffImg}
              style={{
                width: "auto",
                height: "250px",
                borderRadius: "5px",
                display: "block",
                margin: "0 auto"
              }}
              bg="light"
            />
            <Card.Title>{this.props.stuffList.eventName}</Card.Title>
            <Card.Text text="warning">{this.props.stuffList.money}</Card.Text>
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
    flag: state.get("flag"),
    stuffList: state.get("stuffList"),
    show: state.get("show")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      const stuffId = Math.floor(Math.random() * Math.floor(4));
      dispatch(actionCreators.getStuff(stuffId));
      dispatch(actionCreators.disableEventclick());
    },
    handleAccept(newStuff) {
      dispatch(actionCreators.checkMoney());
      dispatch(actionCreators.addNewStuff(newStuff));
      dispatch(actionCreators.calcualteMoney(newStuff));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Things);
