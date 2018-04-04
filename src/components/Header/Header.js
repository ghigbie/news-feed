import React, {Component} from 'react';
import './Header.css';

const Header = (props) =>{
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