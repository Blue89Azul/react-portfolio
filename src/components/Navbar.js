import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button.js';
import './Navbar.css';

import { faEarthAmericas,  faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, SetButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            SetButton(false);
        } else {
            SetButton(true);
        }
    };

    useEffect(()=>{
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        AZUL <FontAwesomeIcon icon={faEarthAmericas} />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/profile' className="nav-links" onClick={closeMobileMenu}>
                                PROFILE
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/works' className="nav-links" onClick={closeMobileMenu}>
                                WORKS
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>TEST</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
