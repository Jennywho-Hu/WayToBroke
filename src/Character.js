import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jenny",
      money: "100",
      package: ["You are a poor kid. Born with nothing.", "this"],
      avatarImg:
        "https://cdn4.iconfinder.com/data/icons/game-of-thrones-4/64/game_of_thrones_game_thrones_series_character_avatar_dragon-512.png"
    };
  }
  render() {
    return (
      <Card bg="dark" text="white">
        <Image
          variant="top"
          src={this.state.avatarImg}
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
          <Card.Title>{this.state.name}</Card.Title>
          <Card.Text style={{ display: "inline" }} text="primary">
            Money:
          </Card.Text>
          <Card.Text style={{ display: "inline" }}>
            ${this.state.money}
          </Card.Text>
          <Card.Text>Bag:</Card.Text>
          {this.state.package.map((item, index) => {
            return <Card.Text key={index}>{item}</Card.Text>;
          })}
        </Card.Body>
      </Card>
    );
  }
}

export default Character;
