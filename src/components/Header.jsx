import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import dog from "../images/dog-h.png"
import logo from "../images/logo1.png"
import border from "../images/customWhiteBorder.png"

const Header = (props) => (
  <header>

    <div className="grid header__container">
    <div className="header__border"></div>

           <section className="img__section">
               <img className='header__image'src={dog} alt="dog" />
           </section>
           <section className="text__section">
              {/* <h1>Dog Talk</h1> */}
              <img className='logo__image'src={logo} alt="Dog Talk" />

              <h1>אילוף כלבים, מעון יום, פנסיון והכשרת כלבי ביטחון</h1>
              <a style={{textDecoration: "none"}} href="tel:+972543978591" >
                  <button className="btn">התקשרו עכשיו</button>
                  </a>

           </section>
    </div>
    {/* <img className="header__border__buttom"src={border} alt="Dog Talk" /> */}
    <div className="header__border__buttom"></div>
           
  </header>
)



export default Header
