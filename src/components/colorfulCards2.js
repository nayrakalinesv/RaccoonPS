import React, { Component } from "react";
import Notebook from "../img/notebook-and-mouse-cursor.png";
import Shield from "../img/shield.png";
import Support from "../img/support (1).png";
import './colorfulCards2.css';

class ColorfulCards2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Lorem ipsum",
      colorsCards: [
        {
          color: "#7fba00",
          icon: Support,
          hover: false
        },
        {
          color: "#00a4ef",
          icon: Shield,
          hover: false
        },
        {
          color: "#ffb900",
          icon: Notebook,
          hover: false
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    };
  }

  createCards() {
    const cardItens = this.state.colorsCards.map((card) => {
      return (
        <li className="cards" key={card.color}>
          
          <div className="circle-icon" style={{ background: card.color }}>
              <img className="icon2" src={card.icon} />
          </div>
          <div className="left">
            <h1 className="title" style={{ color: card.color }}>
              {this.state.name+" dolor"}
            </h1>
            <div className="line"></div>
            <p className="main-desc3">{this.state.description}</p>
            <button id={card.color} 
              className="button" 
              onMouseOver={this.toggleHover.bind(this)}
              onMouseOut={this.toggleHover.bind(this)}
              style={
                card.hover?
                  {background:card.color} :
                {color:card.color}}>

              {this.state.name}
            </button>
          </div>
          <div className="circle-icon-H" style={{ background: card.color }}>
            <img className="icon2" src={card.icon} />
          </div>
        </li>
      );
    });
    return cardItens;
  }

  toggleHover(e){
    let color = e.target.getAttribute("id");
    let index = this.state.colorsCards.findIndex((element, index, array) => {
      return element.color === color;

    });
    let newState = this.state.colorsCards;
    newState[index].hover = !newState[index].hover;
    this.setState({
      colorsCards: newState
    });
  }

  render() {
    return (
      <div className="container2">
        <h1 className="main-title">{this.state.name}</h1>
        
        <div className="sections2">{this.createCards()}</div>
      </div>
    )
  }
}

export default ColorfulCards2;
