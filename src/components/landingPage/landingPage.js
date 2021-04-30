import React from 'react';

import Button from "../buttons/buttons"


import './landingPage.css'

const Landing = () => {
    return (
        <section className="div-landing" id="Home">
                <div className="text-landing">
                    <h1>Hi, my name is <span className="my-name">Tomáš Hlásenský</span></h1>
                    <h2>I'm cyber security student</h2>
  
                </div>
                <div className="arrow">
                    <a href="#AboutMe"><Button/></a>
                </div>
                <div className="triangel"></div>
        </section>
    );
}

export default Landing;