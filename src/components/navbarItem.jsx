import React, { useState } from 'react';

const NavbarItem = (props) => {

    const [activeItem, setActiveItem] = useState(false);
    const activeItemClass = activeItem ? "active" : "";
    const rotateIcon = activeItem ? "rotate180" : "";

    return (
        <div className="navbar-item">
            <div className="flex-center" onClick={() => setActiveItem(!activeItem)}>
                <span className={"mr-5px "+activeItemClass}>{props.data.title}</span>
                <img className={rotateIcon} src="img/icon-arrow-dark.svg" alt="img"/>
            </div>
            <div className={"navbar-item-content flex-center flex-column "+activeItemClass}>
                {props.data.items.map(item => {
                    return(
                        <a href="#">{item}</a>
                    )
                })}
            </div>
        </div>    
    )
}

export default NavbarItem;
