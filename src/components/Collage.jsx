import React from 'react';
import dog2 from "../images/collage/1.jpg"
import dog3 from "../images/collage/2.jpg"
import dog1 from "../images/collage/3.jpg"
import dog4 from "../images/collage/4.jpg"
const Collage = props => {
    return (
        <div className="collage__container">

            <img className='collage__img collage__img__1' src={dog1} alt="dog" />
            <img className='collage__img collage__img__2' src={dog2} alt="dog" />
            <img className='collage__img collage__img__3' src={dog3} alt="dog" />
            <img className='collage__img collage__img__4' src={dog4} alt="dog" />

        </div>
    );
};


export default Collage;