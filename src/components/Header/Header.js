import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
    state ={
        title: '',
        keywords: ''
    }

    inputChangeHandler = (event) => {
        this.setState({keywords: event.target.value});
    }

    render(){
        return(
            <header className="header">
                <div className="logo">Logo</div>
                <input type="text" 
                       onChange={(e) => this.inputChangeHandle(e)}/>
            </header>
        );
    }
};

export default Header;