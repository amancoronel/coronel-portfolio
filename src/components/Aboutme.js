import React from 'react'
import './Aboutme.css'
import resume from '../files/__CORONEL_PRINCE AMANTE.pdf'

export default function Aboutme() {
    return (
        <div className="aboutme-wrapper" id="aboutme">
            <div className="title">ABOUT ME </div>
            <div className="aboutme" >
                <div className="aboutme-text">
                    <div style={{padding: "20px"}}>
                        A Fullstack Web Developer working in IT Industry for 4 years.
                        Knowledgeable in Node Js, Express Js,Loopback 3 and 4, ReactJS, Redux, Redux Saga, 
                        AngularJS, Typescript, CSS, Material UI, Bootstrap, Semantic UI, MongoDB, OracleDB, MySQL.
                    </div>
                    <div>
                        <a href={resume} target="_blank" rel="noreferrer">
                            <button class="btn btn-download"><i className="fas fa-cloud-download-alt"></i> Download CV</button>
                        </a>
                        <a href="#contactme">
                            <button class="btn btn-contact"><i className="fas fa-envelope"></i> Contact Me</button>
                        </a>
                    </div>
                </div>
                <div className="aboutme-image"></div>
            </div>
        </div>
    )
}
