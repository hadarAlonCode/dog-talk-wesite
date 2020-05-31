import React from 'react';
import {service_data} from "../../data/service_data"
import Service from './Parts/Service';

const Services = props => {
    return (
        <div className="grid services__container">
            {service_data.map(service=> {
                return (
                    <Service key={service.id} service={service} />
                )
            })}
        </div>
    );
};


export default Services;