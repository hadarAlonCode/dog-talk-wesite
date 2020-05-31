import React from 'react';

const Title = props => {
    return (
        <div className="title__conatiner">  
            <div className="color__circale"></div>
            <h2>{props.title}</h2>
        </div>
    );
};


export default Title;