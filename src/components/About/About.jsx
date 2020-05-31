import { Link } from "gatsby"
import React from "react"
import Title from "../Title"
import Collage from "../Collage"
import back_icon from "../../images/about-icon.png"

const About = (props) => (
  <section>
    <div className="grid about__container">
      
       <aside>
             <Title title="מי אנחנו?" />

            <div className="about__text">
                <p>שירות לבעלי הכלבים</p> 
                <p>רועי בר דיין בן 32 נשוי לשיר ואבא לריין ולני.</p> 

                <p>
רועי הוא בוגר קורס מאלפי כלבי עבודה של בית הספר woof dogs israel
<p> נבחר לסטודנט מצטיין והיום מעביר שם קורסים להכשרת מאלפים.</p>
רועי עוסק באילוף כלבים והכשרת כלבי ביטחון כבר למעלה מ 3 שנים עם מאות לקוחות מרוצים ,ואף הכשיר ומכר כלבים לחברות אבטחה למטרת הרחת חומרי נפץ ,אמל"ח וסמים .
בנוסף מתנדב רועי ביחידת איתור נעדרים עם כלבו האישי פאקו.
כמו כן מומחה בבחירת גורים וכלבים בוגרים על פי דרישת הלקוח ,מה שדורש הבנה מושלמת של גזעי הכלבים וייעודם למטרות השונות .
לרועי ישנה מומחיות בבניית תקשורת נכונה בין כלב לבעלים מה שיגרום לחיים בריאים ,נוחים וכייף יותר עם כלביהם .</p> 
 
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
