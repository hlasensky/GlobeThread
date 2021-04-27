import './App.css';

import Navbar from "./components/navbar/navbar";
import Landing from "./components/landingPage/landingPage";
import Blank from "./components/blank/blank";
import AboutMe from "./components/aboutMe/aboutMe";
import Projects from "./components/projects/projects";
import ErrorBoundry from "./components/ErrorBoundry"
import Footer from "./components/footer/footer";


import Particles from 'react-particles-js';


import React, { Component } from 'react';


const particlesOptions1 = {
        "fps_limit": 29,
        "particles": {
            "collisions": {
                "enable": false
            },
            "number": {
                "value": 320,
                "density": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 33,
                "opacity": 0.9
            },
            "move": {
                "speed": 0.3
            },
            "opacity": {
                "anim": {
                    "enable": true,
                    "opacity_min": 0.05,
                    "speed": 1,
                    "sync": false
                },
                "value": 0.4
            }
        },
        "polygon": {
            "enable": true,
            "scale": 1.8,
            "type": "inline",
            "move": {
                "radius": 5
            },
            "url": "/tree3.svg",
            "inline": {
                "arrangement": "equidistant"
            },
            "draw": {
                "enable": true,
                "stroke": {
                    "color": "rgba(255, 255, 255, .2)"
                }
            }
        },
        "retina_detect": false,
        "interactivity": {
            detectsOn: "window",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    }
            },
            "modes": {
                "bubble": {
                    "size": 6,
                    "distance": 50
                }
            }
        }
}




class App extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            projects:  []
        }
    };


    
    componentDidMount() {
        fetch("https://api.github.com/users/hlasensky/repos")
        .then(response => response.json())
        .then(data => {this.setState({ projects: data})});
    };



    render() {
        const pr = this.state.projects;
        return !this.state.projects.length ?
            <div className="loading" ><h1>Loading...</h1></div> :
            (
                <div className="App" >
                    <Navbar />
                    <Landing/>
                    <Blank />
                    <AboutMe/>
                    <Blank />
                    <ErrorBoundry>
                        <Projects projects={pr}/>
                    </ErrorBoundry>
                    <Blank />
                    <div id="particles-js">
                        <iframe width="100%" height="100%" src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" frameborder="0"></iframe>
                    </div>
                    
                    <Footer/>

                </div>
            );
        }
} 


export default App;
