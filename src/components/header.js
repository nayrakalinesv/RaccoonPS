import React, {Component} from 'react';
import logo from '../img/Grupo 105.png';
import './header.css';

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            logo: logo,
            title: "Lorem ipsum"
        };
    }


    render(){
        return(
            <div className="header">
                <a href="#default" class="logo">
                    <img src={this.state.logo}></img>
                </a>
                <button className="menuIcon"><i class="fa fa-bars"></i></button>
                <div class="header-right">
                    <a href="#default">{this.state.title}</a>
                    <a href="#default">{this.state.title}</a>
                    <a href="#default">{this.state.title}</a>
                    <a class="active" href="#default">{this.state.title}</a>
                </div>
            </div>
            
        )
    }
}

export default Header;