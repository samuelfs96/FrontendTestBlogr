import React, { useState } from 'react';
import Hamburger from './hamburger';
import NavbarResponsive from './navbarResponsive';

const Header = () => {

    const [statusNavbarResponsive, setStatusNavbarResponsive] = useState(false);

    return (
        <header className="hero">
    
            <NavbarResponsive statusNavbarResponsive={statusNavbarResponsive}/>

            <div className="navbar container flex-center">
                <a href="#" className="main-logo mr-4">
                    <img src="img/logo.svg" alt="img"/>
                </a>
                <Hamburger setStatusNavbarResponsive={setStatusNavbarResponsive}/>
                <nav className="flex-space-between">
                <div className="flex-center left-content">
                    <ul className="flex-center">
                        <li className="mr-2">
                            <div className="dropdown">
                            <a href="#">Product <img src="img/icon-arrow-light.svg" alt="img"/></a>
                            <div className="dropdown-content">
                                <ul>
                                    <li><a href="#"> Overview </a></li>
                                    <li><a href="#"> Pricing </a></li>
                                    <li><a href="#"> Marketplace </a></li>
                                    <li><a href="#"> Features </a></li>
                                    <li><a href="#"> Integrations </a></li>
                                </ul>
                            </div>
                            </div>
                        </li>
                        <li className="mr-2">
                            <div className="dropdown">
                                <a href="#">Company <img src="img/icon-arrow-light.svg" alt="img"/></a>
                                <div className="dropdown-content">
                                    <ul>
                                        <li><a href="#"> About </a></li>
                                        <li><a href="#"> Team </a></li>
                                        <li><a href="#"> Blog </a></li>
                                        <li><a href="#"> Careers </a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="mr-2">
                            <div className="dropdown">
                                <a href="#">Connect <img src="img/icon-arrow-light.svg" alt="img"/></a>
                                <div className="dropdown-content">
                                    <ul>
                                        <li><a href="#"> Contact </a></li>
                                        <li><a href="#"> Newsletter </a></li>
                                        <li><a href="#"> LinkedIn </a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex-center right-content">
                    <a href className="btn" href="#">Login</a>
                    <a href className="btn btn-white" href="#">Sign Up</a>
                </div>
                </nav>
            </div>

            <div className="text-hero">
                <div className="flex-center flex-column">
                    <h2 className="mb-1">A modern publishing platform</h2>
                    <h5 className="mb-2">Grow your audience and build your online brand</h5>
                </div>
                <div className="flex-center">
                    <a href="#" className="btn btn-white mr-2">Start for Free</a>
                    <a href="#" className="btn btn-white-outline">Learn More</a>
                </div>
            </div>

        </header>
    )
}

export default Header;