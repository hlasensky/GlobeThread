import React from 'react';
import emailjs from 'emailjs-com';


import './footer.css'

const Footer = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm("gmail", "template_wfk0cag", e.target, process.env.REACT_APP_YOUR_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return (
        <section id="Contacts" className="div-contacts">
            <h2 className="contacts-h2">Contacts</h2>
            
            <div className=" brd">
                <div className="contact">
                    <div className="contact-img"> 
                        <div className="wraper"><img className="contact-icon" src="./github.png" alt="error"/><h2 className="inl">hlasensky</h2></div>
                        <div className="wraper"><img className="contact-icon" src="./instagram.png" alt="error"/><h2 className="inl">@_hlasensky_</h2> </div>
                        <div className="wraper"><img className="contact-icon" src="./email.svg" alt="error"/><h2 className="inl">tomas.hlasensky@seznam.cz</h2> </div>
                    </div>
                    <form className="contact-form" name="contact" onSubmit={sendEmail}>
                        <div className="contact-inputs">
                            <input required className="contact-name" name="name" placeholder="Your Name" type="text"/>
                            <input required className="contact-email" name="email" placeholder="Your Email" type="email"/>
                        </div>
                        <textarea required className="contact-message" name="message" placeholder="Message" rows="1"></textarea>
                        <br/>
                        <button className="contact-submit" type="submit">GET IN TOUCH</button>
                    </form>
                </div>
            </div>
            <div className="footer-cop">
                <h2 className="kaspersky">Background by <a href="https://cybermap.kaspersky.com/ ">KASPERSKY</a></h2>
                <h2 className="cop">Made by Tomáš Hlásenský using REACT</h2>
            </div>
            
        </section>
    );
}

export default Footer;