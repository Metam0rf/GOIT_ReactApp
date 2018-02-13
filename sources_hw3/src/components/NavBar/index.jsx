import React from 'react';
import NavItem from 'components/NavItem';

export default function Nav() {
    return (
        <nav>
            {/*<ul className="NavBar">*/}
                <NavItem text="about" />
                <NavItem text="browse" />
                <NavItem text="login" />
            {/*</ul>*/}
        </nav>
    )
}