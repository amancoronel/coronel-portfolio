import React from 'react';
import leekie from '../images/Leekie.png';
import vertere from '../images/vertere.png';
import './Experiences.css';

export default function Experiences() {
    return (
        <div className="experience-wrapper" id="experiences">
            <div className="title experience-title">EXPERIENCES</div>
            <div className="experience">
                <div className="experience-card"> 
                    <div className="experience-image">
                        <img src={vertere} alt="vertere"/>
                    </div>
                    <div className="experience-desc">
                        <h4><b>Vertere Global Solutions</b></h4> 
                        <p>2020 - Present</p>
                        <p>Programmer Analyst II</p> 
                    </div>
                </div>
                <div className="experience-card">
                    <div className="experience-image">
                        <img src={leekie} alt="leekie"/>
                    </div>
                    <div className="experience-desc">
                        <h4><b>Leekie Enterprises Incorporated</b></h4> 
                        <p>2017-2020</p> 
                        <p>Software Developer</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}
