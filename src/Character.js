import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import * as actionCreators from "./store/actionCreators";
import { connect } from "react-redux";

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
            ${this.props.character.money}
          </Card.Text>
          <Card.Text>Bag:</Card.Text>
          {this.props.package.map(item => {
            return <Card.Text key={item.id}>{item.eventName}</Card.Text>;
          })}
        </Card.Body>
      </Card>
    );
  }
  componentDidMount() {
    this.props.initCharacterInfo();
  }
}

const mapStateToProps = state => {
  return {
    character: state.get("character"),
    package: Array.from(state.get("package"))
  };
};
const mapDispatchToProps = dispatch => {
  return {
    initCharacterInfo() {
      dispatch(actionCreators.getCharactor());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Character);
