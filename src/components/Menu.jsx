import React from 'react';
import { Link } from "gatsby"

const Menu = props => {
    return (
        <div>

            <ul className="menu__container">
                <li> <Link to="/">דף בית</Link></li>
                <li> <Link to="/about">אודות</Link></li>
                <li> <Link to="/services">שרותים</Link></li>
                <li>צור קשר</li>
            </ul>
            
        </div>
    );
};


export default Menu;