import React from 'react';
import { css } from 'glamor';
import './NewsItem.css';

const NewsItem = ({newsItem}) => {
    let news_item = css({
        padding: '20px',
        boxSizing: 'border-box',
        borderBottom: '1px solid grey',
        ':hover':{
            background: '#c7c8c9'
        }
    });
    
    let item_grey = css({
        background: '#e5e6e8'
    })
    
    return (
        <div {...news_item} {...item_grey}>
            <h3>{newsItem.title}</h3>
            <div>
                {newsItem.feed}
            </div>
        </div>
        );
};

export default NewsItem;