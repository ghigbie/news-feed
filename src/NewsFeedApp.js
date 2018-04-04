import React, { Component } from 'react';
import JSON from './services/data-service/db.json'

import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';


class NewsListApp extends Component {
  state = {
    news: JSON
  }
  
  
  
  render() {
    return (
      <div>
        <Header />
        <NewsList news={this.state.news}/>
      </div>
    );
  }
}

export default NewsListApp;
