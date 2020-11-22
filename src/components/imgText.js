import React, {Component} from 'react';
import img from '../img/achievement-adult-agreement-1391373.png';
import './imgText.css';
class ImgText extends Component{
    constructor(props){
        super(props);

        this.state = {
            img: img,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        }
    }

    render(){
        return(
            <div className="imgContainer">
                <img className="img" src={this.state.img}></img>
                <figcaption>{this.state.text}</figcaption>
            </div>
        )
    }
}

export default ImgText;