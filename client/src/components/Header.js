import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header() {
    return (
        <header className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img src="./nrlogo.png" alt="Logo" width="60" height="60" className="d-inline-block align-text-center me-3"/>
                        Nick Rosales
                </a>
                <Nav className="d-flex justify-content-end" />
            </div>
        </header>



    );
}

export default Header;