import React from 'react';
import './NewsList.css';

import NewsItem from './../NewsItem/NewsItem';

const NewsList = (props) => {
    const items = props.news.map((newsItem) => (<NewsItem key={newsItem.id} newsItem={newsItem} />));
    
    return(
        <div>
           {items}
        </div>
    );
};

export default NewsList;