import React from 'react';
import { Link } from "gatsby"
import { myContext } from '../provider';

const Menu = props => {
    const {text} = props
    return (
        <myContext.Consumer>
        {context => ( 
            <React.Fragment>
                <div>
                    <div className="grid">
                       <ul className="menu__container">     
                            <li> <Link to="/">{text.HOME}</Link></li>
                            <li> <Link to="/about">{text.ABOUT}</Link></li>
                            <li> <Link to="/services">{text.SERVICES}</Link></li>
                            <li>{text.CONTACT}</li>
                            <button onClick={() => context.changeLanguage()}>change Language </button>
                        </ul> 
                    </div>  
                </div>
                </React.Fragment>
            )}
            </myContext.Consumer>
    );
};


export default Menu;