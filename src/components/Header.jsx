import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import dog from "../images/dog-h.png"

const Header = (props) => (
  <header>
    <div className="grid header__container">
           <section>
             <div className="color__circale"></div>
               <img className='header__image'src={dog} alt="dog" />
           </section>
           <section className="text__section">
              <h1>Dog Talk</h1>
              <p>אילוף כלבים , פנסיון ומעון יום</p>
           </section>
    </div>
           
  </header>
)



export default Header
