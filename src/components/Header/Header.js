import React, {Component} from 'react';
import './Header.css';

const Header = (props) =>{
    // state ={
    //     title: '',
    //     keywords: ''
    // }

    // inputChangeHandler = (event) => {
    //     this.setState({keywords: event.target.value});
    // }

    // render(){
    return(
        <header className="header">
            <div className="logo">Logo</div>
            <input type="text" 
                   className="input"
                   onChange={props.keyword}/>
        </header>
    );
};

export default Header;