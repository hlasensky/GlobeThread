import React from 'react';

import ColumnProject from "../columnProject/columnProject"

import './projects.css'


const projects = ({projects}) => {
    const cards = projects.map((project_nm, i) => {
        return (<ColumnProject 
            key={i}
            name={projects[i].name} 
            description={projects[i].description}
            language={projects[i].language} 
            url={projects[i].html_url} 
        />);
    })
    return (
        <div>
            <section id="Projects">
                <div className="all-project-div">
                    <h2 className="project-h1">Projects</h2>
                    <div className="cards">
                        {cards}
                    </div>
                </div>                
            </section>

        </div>
    );   
        

}

export default projects;