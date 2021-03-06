import React, {useState} from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Fade from 'react-reveal/Fade';
import SuccessMessage from '../SuccessMessage/SuccessMessage';
import Slide from 'react-reveal/Slide';

const Contact= props => {

   const [success_message , SetSuccessMessage] = useState(false)

    const contactFormSuccess =(boolean)=>{
          SetSuccessMessage(boolean)
    }

    return (
        <section className="contact__section" id="contact">
            <div className="grid contact__section__inner">
            <Fade delay={300}>
            <h2>צרו איתנו קשר</h2>
            <div className="contact__msg">השאירו פרטים ונחזור אליכם בהקדם!</div>
            </Fade>
             {success_message ?
                <SuccessMessage  contactFormSuccess={contactFormSuccess}/>
             : 
                <Slide bottom delay={200} >
                    <ContactForm contactFormSuccess={contactFormSuccess} />
                </Slide>
             }
            
            </div>
        </section>
    );
};

export default Contact;