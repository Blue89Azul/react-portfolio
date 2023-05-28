import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        AZUL <FontAwesomeIcon icon={faEarthAmericas} />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
