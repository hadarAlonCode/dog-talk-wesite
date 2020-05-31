import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import dog from "../images/dog-h.png"
import logo from "../images/logo1.png"

const Header = (props) => (
  <header>

    <div className="grid header__container">
    <div className="header__border"></div>

           <section>
               <img className='header__image'src={dog} alt="dog" />
           </section>
           <section className="text__section">
              {/* <h1>Dog Talk</h1> */}
              <img className='logo__image'src={logo} alt="Dog Talk" />

              <h1>אילוף כלבים , פנסיון ומעון יום</h1>
           </section>
    </div>
           
  </header>
)



export default Header
