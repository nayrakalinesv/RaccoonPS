import React, { Component } from "react";
import './boringCards.css';
class BoringCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  }

  render() {
    return (
      <div className="container">
        <h1 className="main-title">{this.state.name}</h1>
        <div className="cardContainer">
          {[1, 2, 3, 4].map((number) => {
            return (
              <div className="card" key={number}>
                <h2 className="cardTitle">{this.state.name}</h2>
                <p className="desc">{this.state.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BoringCards;