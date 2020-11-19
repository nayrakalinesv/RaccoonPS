import React, { Component } from "react";

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
      <div>
        <h1 className="description">{this.state.name}</h1>
        {[1, 2, 3, 4].map((number) => {
          return (
            <div key={number}>
              <h2 className="cardTitle">{this.state.name}</h2>
              <p className="card-description">{this.state.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BoringCards;