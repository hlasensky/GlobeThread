import React, { useState } from 'react';
import Hamburger from "../hamburger/hamburger";
import './navbar.css';



const Navbar = () => {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
        console.log("yea")
    };
    return (
        <nav>
            <ul className="navbar-ul">
                <img className="logo" src="./lg.png" alt="error" />
                <div className="navbar">
                    <li onClick={handleToggle}><a className={isActive ? "nv-a act" : "nv-a"} href="#Home" >Home</a></li>
                    <li onClick={handleToggle}><a className={isActive ? "nv-a act" : "nv-a"} href="#AboutMe" >About me</a></li>
                    <li onClick={handleToggle}><a className={isActive ? "nv-a act" : "nv-a"} href="#Projects" >Projects</a></li>      
                    <li onClick={handleToggle}><a className={isActive ? "nv-a act" : "nv-a"} href="#Contacts">Contacts</a></li>          
                </div>
                <div className="hm-nv">
                    <Hamburger/> 
                </div>
                
            </ul>
        </nav>
    );
}

export default Navbar;