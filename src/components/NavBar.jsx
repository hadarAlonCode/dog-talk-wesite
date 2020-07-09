import React, {useEffect, useState} from 'react';
import { Link } from "gatsby"
import { myContext } from '../provider';
import logo from "../images/logo1.png"

const NavBar = props => {
    const {text} = props

    const [first_load, setFirstLoad] = useState(true)
    const [toggle_mobile_nav, setToggleMobileNav] = useState(true)
    const [show_mobile_nav_link, setShowMobileLink] = useState(false)

    

    useEffect(() => {
        let innerWidth =window.innerWidth;
        console.log(innerWidth)
        console.log(window.innerWidth)
        innerWidth <= 800 ? toggleMobileNav(true) : toggleMobileNav(false)
        window.addEventListener("resize", onResize);
        
      } , []);


    useEffect(() => {
      
        let nav = document.getElementById("nav");
        if( nav && first_load ){
    
        let scrollFunc = function() {
            let innerWidth = window.innerWidth

            let scroll = window.scrollY
            let num =400
            if(innerWidth <= 500){
                num=280
            }
          
           
            if (scroll >= num) {
                nav.classList.add("navbar__container__color");
                nav.classList.remove("navbar__container");
            } else {
                nav.classList.add("navbar__container");
                nav.classList.remove("navbar__container__color");
            }
        };

            window.addEventListener('scroll', scrollFunc)   
            setFirstLoad(false)
        }
      }, [] );


      const onResize =()=>{

        let innerWidth = window.innerWidth;
        innerWidth <= 800 ? toggleMobileNav(true) : toggleMobileNav(false)
    }


    const toggleMobileNav=(boolean)=>{
        setToggleMobileNav(boolean)
    }


    const toggleOpenMobileNav =()=>{
        
        setShowMobileLink(!show_mobile_nav_link)
    }

    const closeMobileBar =()=>{
        let innerWidth = window.innerWidth;

       if( innerWidth <= 800){
        setShowMobileLink(!show_mobile_nav_link)
       } 
       
    }

    return (
        <myContext.Consumer>
        {context => ( 
            <React.Fragment>

    <nav className={toggle_mobile_nav ? "navbar__container mobile__nav" : "navbar__container"} id="nav">
            
            {toggle_mobile_nav ? 
            <div>
                <button onClick={()=>toggleOpenMobileNav()} className={show_mobile_nav_link ? "hamburger hamburger--collapse is-active": "hamburger hamburger--collapse"} type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                </button>
           </div>
   
           : null
           }
                    <ul className= {show_mobile_nav_link ? "grid mobile__navbar--on mobile__navbar" : "grid mobile__navbar"} >
                    <li onClick={()=>closeMobileBar()} className="navbar__link"> <Link to="/">{text.HOME}</Link></li>
                            <li onClick={()=>closeMobileBar()} className="navbar__link"> <Link to="#about">{text.ABOUT}</Link></li>
                            <li onClick={()=>closeMobileBar()} className="navbar__link"> <Link to="#services">{text.SERVICES}</Link></li>
                            <li onClick={()=>closeMobileBar()} className="navbar__link"><Link to="#contact">{text.CONTACT}</Link></li>

                    <a onClick={()=>toggleOpenMobileNav()} href={"#"} >
                       <li onClick={()=>closeMobileBar()}><Link to="#"><img className='navbar__logo'src={logo} alt="hadar" /></Link></li>
                    </a>
                         
                           
                        </ul> 
                        </nav>
                </React.Fragment>
            )}
            </myContext.Consumer>
    );
};


export default NavBar;