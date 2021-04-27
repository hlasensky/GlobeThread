import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


import "./hamburger.css";

function Hamburger() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div>
            <div className="hamburger">
                <FaIcons.FaBars value={{ color: "#000"}} className="hm-icon" onClick={showSidebar}/>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <AiIcons.AiOutlineClose className="hm-icon2"/>
                    </li>
                    <li className="hm-li"><a className="hm-a" href="#Home" ><AiIcons.AiFillHome className="icn"/>  Home</a></li>
                    <li className="hm-li"><a className="hm-a" href="#AboutMe" ><AiIcons.AiFillHome className="icn"/>  About me</a></li>
                    <li className="hm-li"><a className="hm-a" href="#Projects" ><AiIcons.AiFillHome className="icn"/>  Projects</a></li>      
                    <li className="hm-li"><a className="hm-a" href="#Contacts"><AiIcons.AiFillHome className="icn"/>  Contacts</a></li> 
                </ul>
            </nav>
        </div>
    )
}

export default Hamburger
