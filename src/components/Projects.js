import React from 'react'
import './Projects.css';

export default function Projects() {
    return (
        <div className="projects-wrapper" id="projects">
            <div className="title">PROJECTS</div>
            <div className="projects">
                <div className="projects-card">
                    <p className="card-title">Lead Tracker API</p>
                    <p className="tech-used">Node JS, Express Js, MongoDB</p>
                    <p className="role">Role: Creator/Main Contributor</p>
                    <p className="card-content">Api service made with node js and express Js for an inventory system, 
                        it includes login session and CRUD functionality connected directly to the database</p>
                    <a href="https://github.com/amancoronel/lead-tracker-api" target="_blank" rel="noreferrer"><button>Visit Repository</button></a>
                </div>
                <div className="projects-card">
                    <p className="card-title">Lead Tracker Front End</p>
                    <p className="tech-used">React JS, Redux, Material UI</p>
                    <p className="role">Role: Contributor</p>
                    <p className="card-content">Api service made with node js and express Js for an inventory system, 
                        it includes login session and CRUD functionality connected directly to the database</p>
                    <a href="https://github.com/howellkit3/lead-tracker-client" target="_blank" rel="noreferrer"><button>Visit Repository</button></a>
                </div>
                <div className="projects-card">
                    <p className="card-title">Portfolio/CMS API</p>
                    <p className="tech-used">Node JS, Express Js, Typescript, MongoDB</p>
                    <p className="role">Role: Creator/Main Contributor</p>
                    <p className="card-content">Api service made with node js and express js written in Typescript 
                        for a CMS which is this Portfolio controlled with a admin dashboard.</p>
                    <a href="https://github.com/amancoronel/lead-tracker-api" target="_blank" rel="noreferrer"><button>Visit Repository</button></a>
                </div>
                <div className="projects-card">
                    <p className="card-title">Portfolio</p>
                    <p className="tech-used">React JS, CSS</p>
                    <p className="role">Role: Creator/Main Contributor</p>
                    <p className="card-content">Static web design that shows information about the author, 
                        Curriculum vitae where employers can download from, 
                        And sending email of concerns and send to CMS API</p>
                    <a href="https://prince-coronel-portfolio.herokuapp.com/" target="_blank" rel="noreferrer"><button>Visit Site</button></a>
                </div>
                <div className="projects-card">
                    <p className="card-title">Portfolio/CMS Dashboard</p>
                    <p className="tech-used">ReactJS, Redux, Material UI</p>
                    <p className="role">Role: Creator/Main Contributor</p>
                    <p className="card-content">A control center for Portfolio CMS.</p>
                    <button>Building in progress...</button>
                </div>
            </div>
        </div>
    )
}
