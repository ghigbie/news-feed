import React from 'react';
import './NewsList.css';

const NewsList = (props) => {
    return(
        <div>
           { props.news.map((newsItem) => {
               return(
                <div key={newsItem.id}>
                    <h3>{newsItem.title}</h3>
                    <div>
                        {newsItem.feed}
                    </div>
                </div>
               );
           })}
        </div>
    );
};

export default NewsList;