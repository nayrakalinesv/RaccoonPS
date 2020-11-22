import React, { Component } from "react";
import "./App.css";
import Header from './components/header';
import ImgHeader from "./components/imgHeader";
import Description from "./components/description";
import BoringCards from "./components/boringCards";
import ColorfulCards from "./components/colorfulCards";
import ColorfulCards2 from "./components/colorfulCards2";
import ImgText from "./components/imgText";
import Form from "./components/form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <ImgHeader></ImgHeader>
        <Description></Description>
        <ColorfulCards></ColorfulCards>
        <ColorfulCards2></ColorfulCards2>
        <BoringCards></BoringCards>
        <ImgText></ImgText>
        <Form></Form>
      </div>
    );
  }
}

export default App;
