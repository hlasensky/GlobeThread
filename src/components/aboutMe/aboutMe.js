import React from 'react';

import './aboutMe.css'

const aboutMe = () => {
    return (
        <div className="about-div">
            <section id="AboutMe">
                <div className="clp-div">
                    <div className="img-div">
                        <img className="me" src="./me.jpg" alt="Me" />
                    </div>
                </div>
                <div className="container">
                    <h2 className="about-h2">About me</h2>
                    <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales tellus tellus in eget enim. Pellentesque arcu at duis hendrerit nunc risus. Urna, id habitasse convallis et et id faucibus blandit pharetra. Aliquam id at convallis odio tortor aliquam at gravida.</p>
                    <div>
                        <hr></hr>
                        <h3 className="about-h3">Skills</h3>
                        <div className="skill-container">
                            <img title="Python" className="pr-lg" src="./python.png" alt="error"/>
                            <img title="JavaScript" className="pr-lg" src="./javascript.png" alt="error"/>
                            <img title="NodeJs" className="pr-lg" src="./node_js.svg" alt="error"/>
                            <img title="React" className="pr-lg " src="./atom.svg" alt="error"/>   
                            <img title="HTML" className="pr-lg" src="./html.png" alt="error"/>
                            <img title="CSS" className="pr-lg" src="./css.png" alt="error"/>
                            
                        </div>
                    </div>
                    <img className="me2" src="./me.jpg" alt="Me" /> 
                </div>
            </section>    
        </div>
        
    );
}

export default aboutMe;