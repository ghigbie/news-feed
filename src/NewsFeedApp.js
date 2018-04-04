import React, { Component } from 'react';
import JSON from './services/data-service/db.json'

import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';


class NewsListApp extends Component {
  state = {
    news: JSON
  }
  
  getKeyword = (event) =>{
    let keyword = event.target.value
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keyword) > -1;
    });
    console.log(filtered);
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
