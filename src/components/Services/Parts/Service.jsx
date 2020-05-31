import React from 'react';

const Service = props => {
    console.log(props, "sadkjdnjkasndjk")
    const {service} = props

    return (
        <div className="service__container">
            <img className='service__icon' src={service.img} alt={service.name} />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <button>צור קשר לפרטים</button>
        </div>
    );
};


export default Service;