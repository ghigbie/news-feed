import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './NewsFeedApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NewsFeedApp />, document.getElementById('react-container'));
registerServiceWorker();
