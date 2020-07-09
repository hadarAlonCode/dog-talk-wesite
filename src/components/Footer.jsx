import React from 'react';
import hadar from "../images/hadar.png"

import Fade from 'react-reveal/Fade';
import {socials} from "../data/socials"


const Footer = props => {
    return (
        <footer id="footerL" className="footer__container">

        <div className="social__icons">
            {socials.map(s=>{
                return (
                    <a href={s.link} target={s.name === 'phone' ? '' : "_blank" }>
                        <div className="social__icon__container">
                        <img className='social__icon' src={s.icon} alt={s.name} />
                        </div>
                    </a>
                )
            })}
            
           
        </div>

        <Fade bottom>
            <div className="hadar__signature__container">

                   <div className="hadar__logo__container">
                   <img className='hadar__logo' src={hadar} alt="logo" />
                 <div>Site by</div>

                   </div>
               

                 <span>|</span>


                 <div>כל הזכויות שמורות ל – Dog Talk © 2020</div>




            </div>
                
        </Fade>

           
        </footer>
    );
};



export default Footer;