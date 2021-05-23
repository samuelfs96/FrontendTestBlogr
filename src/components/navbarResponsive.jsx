import React from 'react';
import NavbarItem from './navbarItem';

const NavbarResponsive = (props) => {

    const statusNavbarResponsiveClass = props.statusNavbarResponsive ? "navbar-responsive active" : "navbar-responsive";

    return (
        <div className={statusNavbarResponsiveClass}>
            <div className="content">
                <div className="flex-center flex-column">
                    <NavbarItem key={1} data={{title: "Product",items: ['Overview','Pricing','Marketplace','Features','Integrations']}}/>
                    <NavbarItem key={2} data={{title: "Company",items: ['About','Team','Blog','Careers']}}/>
                    <NavbarItem key={3} data={{title: "Connect",items: ['Contact','Newsletter','LinkedIn']}}/>
                </div>
                <div className="separator"></div>
                <div className="flex-center flex-column">
                    <a href className="btn btn-login mb-1" href="#">Login</a>
                    <a href className="btn btn-gradient" href="#">Sign Up</a>
                </div>
            </div>
        </div>
    )
}

export default NavbarResponsive;
