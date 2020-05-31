import React from 'react';
import {service_data} from "../../data/service_data"
import Service from './Parts/Service';
import Title from '../Title';

const Services = props => {
    return (
        <section className="services__section">

            <div className="grid"> 
            <Title title="מה אנחנו מציעים לכם?" />
            </div>

            
            <div className="grid services__container">
            

                {service_data.map(service=> {
                    return (
                        <Service key={service.id} service={service} />
                    )
                })}
            </div>
        </section>
    );
};


export default Services;