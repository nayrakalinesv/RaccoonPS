import React, {Component} from 'react';
import img from '../img/achievement-adult-agreement-1391373.png';

class ImgText extends Component{
    constructor(props){
        super(props);

        this.state = {
            img: img,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        }
    }

    render(){
        return(
            <div>
                <img className="img" src={this.state.img}></img>
                <p className="text">{this.state.text}</p>
            </div>
        )
    }
}

export default ImgText;