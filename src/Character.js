import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

class Character extends Component {
  render() {
    return (
      <Card bg="dark" text="white">
        <Card.Title
          style={{
            marginLeft: "40%",
            marginTop: "10%",
            fontSize: "20px"
          }}
        >
          Day: {this.props.date}
        </Card.Title>
        <Image
          variant="top"
          src={this.props.character.avatarImg}
          roundedCircle
          style={{
            width: "60%",
            backgroundColor: "white",
            marginLeft: "20%",
            marginTop: "20%"
          }}
          bg="light"
        />
        <Card.Body>
          <Card.Title style={{ color: "#28a745", fontSize: "30px" }}>
            {this.props.character.name}
          </Card.Title>
          <Card.Text style={{ display: "inline" }}>Money: $</Card.Text>
          <Card.Text style={{ display: "inline", color: "yellow" }}>
            {this.props.money}
          </Card.Text>
          <Card.Text>Bag:</Card.Text>
          {this.props.package.length ? (
            this.props.package.map((item, index) => {
              return <Card.Text key={index}>{item.eventName}</Card.Text>;
            })
          ) : (
            <Card.Text>You're a poor kid. Born with nothing</Card.Text>
          )}
        </Card.Body>
        <Modal show={this.props.broke}>
          <Alert variant="danger" style={{ marginBottom: "0px" }}>
            <Alert.Heading>Aww yeah, you successfully broke!!!!</Alert.Heading>
            You owe me ${Math.abs(this.props.money)}.
          </Alert>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.restartGameData}>
              Restart Game
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    );
  }
  componentDidMount() {
    this.props.initCharacter();
  }
}

const mapStateToProps = state => {
  return {
    character: state.get("character"),
    money: state.get("money"),
    package: Array.from(state.get("package")),
    date: state.get("date"),
    broke: state.get("broke")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initCharacter() {
      dispatch(actionCreators.getCharactor());
    },
    restartGameData() {
      dispatch(actionCreators.getCharactor());
      dispatch(actionCreators.restartGameData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
