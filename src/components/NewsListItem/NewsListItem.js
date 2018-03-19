import React from 'react';

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