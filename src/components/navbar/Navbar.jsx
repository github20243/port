// src/components/Navbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../buttonDarkMode/BtnDarkMode';

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to="/" className="logo">
              <strong>Freelancer</strong> portfolio
            </NavLink>

            <BtnDarkMode />

            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink to="/" className="nav-list__link" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink to="/projects" className="nav-list__link">
                  Projects
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink to="/contacts" className="nav-list__link">
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
