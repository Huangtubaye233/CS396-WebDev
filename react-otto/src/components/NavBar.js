import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/otto2.jpg';
import memes from '../assets/memes.png';
import playground from '../assets/playground.png';
import music from '../assets/music.png';

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [fontFamily, setFontFamily] = useState('sans-serif'); 

    useEffect(() => {
        document.body.style.fontFamily = fontFamily;
    }, [fontFamily]); 

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleFont = () => {
        const nextFont = fontFamily === 'sans-serif' ? 'serif' : 'sans-serif';
        setFontFamily(nextFont);
        const newFont = document.body.style.getPropertyValue('--font-family') === 'serif' ? 'sans-serif' : 'serif';
        document.body.style.setProperty('--font-family', newFont);
    };

    return (
        <header>
            <nav>
                <div>
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                </div>
                <div>
                    <Link to="/memes" className="nav-button">
                        <img src={memes} alt="Memes Page Icon" />
                        <span>Memes</span>
                    </Link>
                    <Link to="/playground" className="nav-button">
                        <img src={playground} alt="Playground Page Icon" />
                        <span>Playground</span>
                    </Link>
                    <Link to="/music" className="nav-button">
                        <img src={music} alt="Music Page Icon" />
                        <span>Music</span>
                    </Link>
                </div>
                <div className="settings-container">
                    <button onClick={toggleDropdown} aria-label="Open settings" aria-haspopup="true" aria-expanded={isDropdownOpen}>⚙️</button>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li onClick={toggleFont}>{fontFamily}</li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
