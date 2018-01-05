import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'components/Logo';
import NavBar from 'components/NavBar';
import './styles.css';

export default function Header({appName}) {
    return (
        <header className="Header">
            <Logo alt="logo"/>
            <h1 className="Header__title">
                {appName}
            </h1>
            <NavBar />
        </header>
    );

};

Header.propTypes = {
    appName: PropTypes.string.isRequired
};