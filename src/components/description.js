import React, {Component} from 'react';
import './description.css';

class Description extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="main-desc2">
                <p>
                    <span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                </p>
            </div>
        )
    }
}

export default Description;