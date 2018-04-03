import React from 'react';
import { css } from 'glamor';
import './NewsItem.css';

const NewsItem = ({newsItem}) => {
    let news_item = css({
        padding: '20px',
        boxSizing: 'border-box',
        borderBottom: '1px solid grey'
    });
    
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