import React, { Component } from 'react';
import JSON from './services/data-service/db.json'

import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';


class NewsListApp extends Component {
  state = {
    news: JSON,
    filtered: []
  }
  
  getKeyword = (event) =>{
    let keyword = event.target.value
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keyword) > -1;
    });
    console.log(filtered);
    this.setState({filtered});
  }
  
  
  render() {
    let newsFiltered = this.state.filtered;
    let newsEntire = this.state.news;
    
    return (
      <div>
        <Header keyword={this.getKeyword}/>
        <NewsList news={newsFiltered.length === 0 ? newsEntire : newsFiltered}/>
      </div>
    );
  }
}

export default NewsListApp;
