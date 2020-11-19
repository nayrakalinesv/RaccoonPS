import React, { Component } from "react";
import "./App.css";
import BoringCards from "./components/boringCards";
import ColorfulCards from "./components/colorfulCards";
import ColorfulCards2 from "./components/colorfulCards2";
import ImgText from "./components/imgText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorfulCards></ColorfulCards>
        <ColorfulCards2></ColorfulCards2>
        <BoringCards></BoringCards>
        {/* <ImgText></ImgText> */}
      </div>
    );
  }
}

export default App;
