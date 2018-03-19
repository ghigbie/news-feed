import React from 'react';
import './NewsItem.css';

const NewsItem = ({newsItem}) => {
    return (
        <div>
            <h3>{newsItem.title}</h3>
            <div>
                {newsItem.feed}
            </div>
        </div>
        );
};

export default NewsItem;