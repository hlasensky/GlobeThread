import React from 'react';

import Button from "../buttons/project-button"

import './columnProject.css'


const prToSVG = (language) => {
    if (language === "Python") {
        return "./python.png"
    } else if (language === "JavaScript") {
        return "./javascript.png"
    } else if (language === "SCSS" || language === "CSS") {
        return "./css.png"
    } else if (language === "HTML") {
        return "./html.png"
    } else if (language === "PHP") {
        return "./php.svg"
    } else if (language === "C++") {
        return "./c.svg"
    }
};

const columnProject = ({name, description, language, url}) => {
    return (
        <div className="project-div">
            <h2 className="title-project">{name}</h2>
            <p className="description">{description}</p>
            <Button url={url}/><img className="language" src={prToSVG(language)} alt={language}/>
        </div>
    );
}

export default columnProject;