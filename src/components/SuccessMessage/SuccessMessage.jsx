import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const SuccessMessage = props => {
    const {contactFormSuccess} = props
    return (


        <Fade top delay={200}>
        <div className="success__message">
           <h3>תודה רבה!</h3>
           <div className="message">ההודעה נשלחה בהצלחה, נחזור אליך בהקדם</div>
           <button onClick={()=>contactFormSuccess(false)} className="btn">
           <i className="fas fa-arrow-left"></i>
               חזור חזרה
               </button>
        </div>
        </Fade>
    );
};



export default SuccessMessage;