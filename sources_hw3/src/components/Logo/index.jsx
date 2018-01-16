import React from 'react';
import logoImg from './assets/logo.svg';
import './styles.css'

export default function Logo({appName}) {
    return (
        <img className="Logo" src={logoImg} alt={appName}/>
    );
}