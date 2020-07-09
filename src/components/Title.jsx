import React from 'react';
import Fade from 'react-reveal/Fade';

const Title = props => {
    return (
        <div className="title__conatiner">  
                   <Fade left delay={200}>

            {/* <div className="color__circale"></div> */}
            <h2>{props.title}</h2>
            <div className="title__line"></div>
            </Fade>
        </div>
    );
};


export default Title;