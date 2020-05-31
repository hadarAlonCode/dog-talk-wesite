import { Link } from "gatsby"
import React from "react"
import Title from "../Title"
import Collage from "../Collage"

const About = (props) => (
  <section>
    <div className="grid about__container">
      
       <aside>
             <Title title="מי אנחנו?" />

            <div className="about__text">
                <p>שירות לבעלי הכלבים</p> 
                <p>אילוף כלבים - פקודות בסיס, פתרון בעיות משמעת, תזונה נכונה ופעילות גופנית.</p> 
                <p>הכשרת כלבי ביטחון - שמירה, הגנה ואיתור</p> 
            </div>  
      </aside>

      <aside>
        <Collage />
      </aside>

      
     

    </div>
           
  </section>
)



export default About
