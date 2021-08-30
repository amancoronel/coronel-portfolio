import React, {useState} from 'react';
import './Header.css';

export default function Header() {

    const [showMobileNav, updateMobileNav] = useState(false);
    
    return (
        <div className="header">
            <div className="nav-bar-bars" onClick={() => updateMobileNav(true)}>
                <i class="fas fa-bars"></i>
            </div>
            <div className="nav-bar-mobile" style={{display: showMobileNav ? "block" : "none"}}>
                <div className="nav-mobile-close" onClick={() => updateMobileNav(false)}>
                    <i className="close far fa-times-circle"></i>
                </div>
                <ul>
                    <li><a href="#" onClick={() => updateMobileNav(false)}>Home</a></li>
                    <li><a href="#aboutme" onClick={() => updateMobileNav(false)}>About Me</a></li>
                    <li><a href="#skills" onClick={() => updateMobileNav(false)}>Skills</a></li>
                    <li><a href="#experiences" onClick={() => updateMobileNav(false)}>Experiences</a></li>
                    <li><a href="#projects" onClick={() => updateMobileNav(false)}>Projects</a></li>
                    <li><a href="#contactme" onClick={() => updateMobileNav(false)}>Contact</a></li>
                </ul>
            </div>
            <div className="logo">
                <p className="logo-text">PRINCE</p>
            </div>
            <div className="nav-bar nav-bar-desktop">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#aboutme">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experiences">Experiences</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contactme">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
