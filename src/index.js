import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewsFeedApp from './NewsFeedApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NewsFeedApp />, document.getElementById('react-container'));
registerServiceWorker();
