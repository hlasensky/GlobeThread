import './App.css';

import Navbar from "./components/navbar/navbar";
import Landing from "./components/landingPage/landingPage";
import Blank from "./components/blank/blank";
import AboutMe from "./components/aboutMe/aboutMe";
import Projects from "./components/projects/projects";
import ErrorBoundry from "./components/ErrorBoundry";
import Globe from "./components/globe/globe";
import Footer from "./components/footer/footer";

import React, { Component } from 'react';
import * as AiIcons from "react-icons/ai";



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
            <div className="loading" ><h1><AiIcons.AiOutlineSlack className="load"/></h1></div> :
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
                    <Globe/>
                    <Footer/>

                </div>
            );
        }
} 


export default App;
