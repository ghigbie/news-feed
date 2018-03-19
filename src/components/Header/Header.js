import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
    inputChangeHandler(){

    }

    render(){
        return(
            <header className="header">
                <div className="logo">Logo</div>
                <input type="text" 
                    onChange={this.inputChangeHandle}/>
            </header>
        );
    }
};

export default Header;