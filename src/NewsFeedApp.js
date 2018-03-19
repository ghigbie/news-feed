import React, { Component } from 'react';
import JSON from './services/data-service/db.json'

import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NewsList />
      </div>
    );
  }
}

export default NewsListApp;
