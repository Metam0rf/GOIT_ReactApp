import React from 'react';
import "./styles.css";

export default function NavItem({text}) {
    return (
        <li className="NavItem">{text}</li>
    )
}