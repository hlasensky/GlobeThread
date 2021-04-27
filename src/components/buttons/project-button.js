import React from 'react';

import './buttons.css'

const project_button = ({url}) => {
    return (
        <div className="button-div-projects">
            <button className='btn-projects' >
                <a className='btntext-projects' href={url}  target="_blank" rel="noreferrer">Learn more</a>
                <img className="btnarrow-projects" src="./arrow.png" alt="error"/>
            </button>
        </div>
    );
}

export default project_button;