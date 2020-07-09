import React from 'react';
import Fade from 'react-reveal/Fade';
import icon_img from "../../../images/service/service3.png"

const Project = props => {
    const {project} = props
    const {id, description , name, site, tech , img} = project
    
    return (
        <div className="project__container section__padding">
            <Fade left delay={400}>
            {/* <img className='' src={img} alt={name} /> */}
            <section className="project__text">
                <h4>{name}</h4>
                <div className="under__line"></div>
                <p>{description}</p>
                <div className="tech__container">
               
                </div>  

                {/* <a href="#" target="_blank" >  <button className="btn">  <div className='btn__icon'></div> לפרטים נוספים</button></a> */}
                <a style={{textDecoration: "none"}} href="#contact" >  <button className="btn">  לפרטים נוספים</button></a>

           
            </section>
            </Fade>
            <Fade right delay={400}>
            <section className="project__img__container">
                 <img className='project__img' src={img} alt={name} />
            </section>
            </Fade>
            
        </div>
    );
};



export default Project;