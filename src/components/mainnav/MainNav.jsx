// MainNav.js

import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ScrollReveal from 'scrollreveal';
import { IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import './mainnav.css'
import { menuLinks } from '../../data'

function MainNav() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        ScrollReveal().reveal('.nav__wrapper', {
            duration: 1000,
            reset: true,
            distance: '30px',
            origin: 'top',
            easing: 'ease',
        });
      }, []);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() =>{
        setIsMenuOpen(false);
    }, [location]);
  
    return (
        <div className="nav__section">
            <div className="nav__wrapper">
                <div className="nav">
                    <div className="logo">
                        <Link to="/"><img src='assets/logomain.svg'/></Link>
                    </div>
                    <div className={isMenuOpen ? "menu active" : 'menu'}>
                        <ul>
                            {
                                menuLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>{link.label}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="menu__icon" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <IoClose /> // close icon
                        ) : (
                            <HiMenuAlt3 />
                        )
                        }
                </div>
            </div>
        </div>
    )
}

export default MainNav
