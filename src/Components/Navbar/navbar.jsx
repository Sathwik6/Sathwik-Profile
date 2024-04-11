import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const fullName = 'Sathwik Thaduru';
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < fullName.length) {
            const timeoutId = setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
            }, 210);
            
            return () => clearTimeout(timeoutId);
        }
    }, [currentIndex, fullName.length]);

    const firstName = fullName.slice(0, fullName.indexOf(' ') + 1);
    const lastName = fullName.slice(fullName.indexOf(' ') + 1);

    const displayedFirstName = fullName.substring(0, Math.min(currentIndex, firstName.length));
    const displayedLastName = currentIndex > firstName.length ? fullName.substring(firstName.length, currentIndex) : '';

    return (
        <nav>
            <h1 className="name">
                <span className="first-name">{displayedFirstName}</span>
                <span className="last-name">{displayedLastName}</span>
            </h1>
            <ul>
                <li className="nav-item"><Link to="/" className="nav-item-tag">Home</Link></li>
                <li className="nav-item"><Link to="/" className="nav-item-tag">About Me</Link></li>
                <li className="nav-item"><Link to="/" className="nav-item-tag">Skills</Link></li>
                <li className="nav-item"><Link to="/" className="nav-item-tag">Projects</Link></li>
                <li className="nav-item"><Link to="/" className="nav-item-tag">Contact</Link></li>

                {/* <li className="nav-item"><a className="nav-item-tag" href=''>Home</a></li>
                <li className="nav-item"><a className="nav-item-tag" href=''>About Me</a></li>
                <li className="nav-item"><a className="nav-item-tag" href=''>Skills</a></li>
                <li className="nav-item"><a className="nav-item-tag" href=''>Projects</a></li>
                <li className="nav-item"><a className="nav-item-tag" href=''>Contact</a></li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
