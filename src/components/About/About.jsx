import { Link } from "gatsby"
import React from "react"
import Title from "../Title"
import Collage from "../Collage"
import back_icon from "../../images/about-icon.png"

const About = (props) => (
  <section id="about"  style={{paddingTop: '40px', paddingBottom: '40px'}}>
    <div className="grid about__container">
      
       <aside>
             <Title title="מי אנחנו?" />

            <div className="about__text">
                <p >Dog Talk הוקמה על מנת לספק שירות לבעלי הכלבים.</p> 
                <p>רועי בר דיין בן 32 נשוי לשיר ואבא לריין ולני.</p> 

                <p>
                רועי הוא בוגר קורס מאלפי כלבי עבודה של בית הספר Woof Dogs Israel 
                </p>

                <p> נבחר לסטודנט מצטיין והיום מעביר שם קורסים להכשרת מאלפים.</p>
                <p>
                רועי עוסק באילוף כלבים והכשרת כלבי ביטחון כבר למעלה מ 3 שנים עם מאות לקוחות מרוצים ,ואף הכשיר ומכר כלבים לחברות אבטחה למטרת הרחת חומרי נפץ ,אמל"ח וסמים. </p> 
                 <p> בנוסף מתנדב רועי ביחידת איתור נעדרים עם כלבו האישי פאקו.
                </p>
                <p>כמו כן מומחה בבחירת גורים וכלבים בוגרים על פי דרישת הלקוח ,מה שדורש הבנה מושלמת של גזעי הכלבים וייעודם למטרות השונות.</p>

                <p>לרועי ישנה מומחיות בבניית תקשורת נכונה בין כלב לבעלים מה שיגרום לחיים בריאים ,נוחים וכייף יותר עם כלביהם.</p>
                
            </div>  
      </aside>

      <aside>
        <Collage />
      </aside>

    </div>

    {/* <img className='background__icon'src={back_icon} alt="icon" /> */}
           
  </section>
)



export default About
