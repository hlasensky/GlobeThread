import './App.css';

import Navbar from "./components/navbar/navbar";
import Landing from "./components/landingPage/landingPage";
import Blank from "./components/blank/blank";
import AboutMe from "./components/aboutMe/aboutMe";
import Projects from "./components/projects/projects";
import ErrorBoundry from "./components/ErrorBoundry"
import Footer from "./components/footer/footer";

import React, { Component } from 'react';







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
                        <iframe width="100%" height="100%" src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" frameborder="0" title="background"></iframe>
                    </div>
                    
                    <Footer/>

                </div>
            );
        }
} 


export default App;
