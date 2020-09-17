import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <div className="menu-style">
                {/* we can use here Link or NavLink, both have same properties */}
                <NavLink exact activeClassName="active_class" to='./search'>Search</NavLink>
                <NavLink exact activeClassName="active_class" to='/user'>User</NavLink>
                <NavLink exact activeClassName="active_class" to='./contact'>Contact Us</NavLink>
                <NavLink exact activeClassName="active_class" to='/'>About US</NavLink>
                <br />
            </div>
        </>
    );
};

export default Menu;