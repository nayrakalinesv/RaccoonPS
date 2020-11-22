import React, {Component} from 'react';
import img from '../img/ballpen-blur-close-up-461077.png';
import logo from '../img/Grupo 105.png';
import './imgHeader.css';

class ImgHeader extends Component{
    constructor(props){
        super(props);

        this.state = {
            img: img,
            logo: logo,
            title: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
    }

    render(){
        return(
            <div className="imgContainer2">
                <div className="gradient">
                 <img className="imgHeader" src={this.state.img}></img>
                </div>
                
                <figcaption>
                    <h2>{this.state.title}</h2>
                    <p>{this.state.text}</p>
                    <button>{this.state.title}</button>
                    <div className="angleLogo">
                        <button className="btn"><i className="fas fa-angle-down"></i></button>
                        <img className="logoHeader" src={this.state.logo}></img>
                    </div>
                    
       
                </figcaption>
                
            </div>
        )
    }
}

export default ImgHeader;