import React, {Component} from 'react';
import { render } from 'react-dom';
import './form.css';

class Form extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            title: "Lorem ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        };
    }

    render(){
        return(
            <div>
                <p className="pDescription">{this.state.desc}</p>
                <div className="formContainer">
                    <form>
                        <label>{this.state.title}
                        <input type="text"/>
                        </label>
                        <label>
                            {this.state.title}
                            <input type="text"/>
                        </label>
                        <label>
                            {this.state.title}
                            <input type="text"/>
                        </label>
                        <label>
                            {this.state.title}
                            <input type="text"/>
                        </label>
                        <label>
                            {this.state.title}
                            <input type="text"/>
                        </label>
                        <input type="submit" value={this.state.title}/>
                    </form>
                </div>
            </div>
            
            
        )
    }

}

export default Form;