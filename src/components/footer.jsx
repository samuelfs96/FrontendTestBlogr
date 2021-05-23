import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="flex-space-around flex-start main-footer-content">
                    <a href="#" className="main-logo">
                    <img src="img/logo.svg" alt="img"/>
                    </a>
                    <div className="footer-item">
                    <h5>Product</h5>
                    <ul>
                        <li><a href="#"> Overview </a></li>
                        <li><a href="#"> Pricing </a></li>
                        <li><a href="#"> Marketplace </a></li>
                        <li><a href="#"> Features </a></li>
                        <li><a href="#"> Integrations </a></li>
                    </ul>
                    </div>
                    <div className="footer-item">
                    <h5>Company</h5>
                    <ul>
                        <li><a href="#"> About </a></li>
                        <li><a href="#"> Team </a></li>
                        <li><a href="#"> Blog </a></li>
                        <li><a href="#"> Careers </a></li>
                    </ul>
                    </div>
                    <div className="footer-item">
                    <h5>Connect</h5>
                    <ul>
                        <li><a href="#"> Contact </a></li>
                        <li><a href="#"> Newsletter </a></li>
                        <li><a href="#"> LinkedIn </a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
