import React from 'react';
import Project from './Parts/Project';
import Title from '../Title';
import { service_data } from '../../data/service_data';


const Projects = props => {
    return (
        <section id="services" className="grid section__padding projects__container">
            <div className="about__inner__container">

            <Title title="מה אנחנו מציעים לכם?" />
                {
                    service_data.map((s)=>{
                        return <Project key={s.id} project={s} />
                    })
                }
            </div>
       </section>
    );
};


export default Projects;