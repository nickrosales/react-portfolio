import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
            <ul className="nav nav-underline">
                <li className="nav-item">
                    <Link to="react-portfolio/" className="nav-link" aria-current="page">About Me</Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" className="nav-link">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="resume" className="nav-link">Resume</Link>
                </li>
            </ul>
    );
}

export default Nav;