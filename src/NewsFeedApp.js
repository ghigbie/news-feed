import React, { Component } from 'react';
import JSON from './services/data-service/db.json'

import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';


class NewsListApp extends Component {
  state = {
    news: JSON
  }
  
  getKeyword = (event) =>{
    console.log('This is the get keyword function' , event.target.value);
  }
  
  
  render() {
    return (
      <div>
        <Header keyword={this.getKeyword}/>
        <NewsList news={this.state.news}/>
      </div>
    );
  }
}

export default NewsListApp;
