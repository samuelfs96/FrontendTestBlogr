import React from 'react';
import { useState } from 'react';

const Hamburger = props => {

    const [active, setActive] = useState(false);

    const handleActive = () => {
        setActive(!active)
        if(!active){
            props.setStatusNavbarResponsive(true)
        }else{
            props.setStatusNavbarResponsive(false)
        }
    }

    console.log(active)

    return (
        <button className="burger" onClick={handleActive}>
            {active ? <img src="img/icon-close.svg" alt="img"/> : <img src="img/icon-hamburger.svg" alt="img"/>}
        </button>
    )
}

export default Hamburger;
