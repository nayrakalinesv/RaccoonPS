import React, { Component } from "react";
import './colorfulCards.css';
import icon from '../img/Grupo de máscara 1.png';

class ColorfulCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Lorem ipsum",
      colorsCards: [
        "#0072c6",
        "#2c5898",
        "#207245",
        "#cb4a32",
        "#733781",
        "#00aff0",
        "#094ab2",
        "#0073c6",
        "#0093be",
        "#5558af",
      ],
      descriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
      ],
      icon: icon
    };
  }

  createCards() {
    const cardItens = this.state.colorsCards.map((color) => {
      return (
        <li className="card-container" key={color} style={{ backgroundColor: color }}>
          <div className="left">
            <img className="icon" src={this.state.icon}></img>
          </div>
          <div className="right">
            <h1 className="title">{this.state.name}</h1>
            <p className="descriptions">{this.state.descriptions[0]}</p>
          </div>
        </li> 
      );
    });
    return cardItens;
  }

  render() {
    return (
      <div className="container">
        <h1 className="main-title">Lorem Ipsum</h1>
        <p className="main-desc">{this.state.descriptions[1]}</p>
        <div className="sections">  
          {this.createCards()}
        </div>
      </div>
      
    )
  }
}

export default ColorfulCards;
