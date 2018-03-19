import React from 'react';
import './NewsItem.css';

const NewsItem = (props) => {
    return (
        <div>
            <h3>{props.newsItem.title}</h3>
            <div>
                {props.newsItem.feed}
            </div>
        </div>
        );
};

export default NewsItem;