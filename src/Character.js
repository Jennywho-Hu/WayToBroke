import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators";

class Character extends Component {
  render() {
    return (
      <Card bg="dark" text="white">
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
          <Card.Title>{this.props.character.name}</Card.Title>
          <Card.Text style={{ display: "inline" }} text="primary">
            Money:
          </Card.Text>
          <Card.Text style={{ display: "inline" }}>
            ${this.props.money}
          </Card.Text>
          <Card.Text>Bag:</Card.Text>
          {this.props.package.length ? (
            this.props.package.map((item, index) => {
              return <Card.Text key={index}>{item.eventName}</Card.Text>;
            })
          ) : (
            <Card.Text>You're a poo kid. Born with nothing</Card.Text>
          )}
        </Card.Body>
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
    package: Array.from(state.get("package"))
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initCharacter() {
      dispatch(actionCreators.getCharactor());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
