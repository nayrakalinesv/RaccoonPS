import React, { Component } from "react";
import Notebook from "../img/notebook-and-mouse-cursor.png";
import Shield from "../img/shield.png";
import Support from "../img/support (1).png";

class ColorfulCards2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Lorem ipsum",
      colorsCards: [
        {
          color: "#7fba00",
          icon: Notebook,
        },
        {
          color: "#00a4ef",
          icon: Shield,
        },
        {
          color: "#ffb900",
          icon: Support,
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    };
  }

  createCards() {
    const cardItens = this.state.colorsCards.map((card) => {
      return (
        <li key={card.color}>
          <div className="circle-icon" style={{ background: card.color }}>
            <img src={card.icon} />
          </div>
          <h1 className="title" style={{ color: card.color }}>
            {this.state.name}
          </h1>
          <div className="line"></div>
          <p className="description">{this.state.description}</p>
          <button
            className="cards2-button"
            style={{ color: card.color, outlineColor: card.color }}
          >
            {this.state.name}
          </button>
        </li>
      );
    });
    return cardItens;
  }

  render() {
    return <div className="sections">{this.createCards()}</div>;
  }
}

export default ColorfulCards2;
