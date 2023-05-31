import React from 'react'
import { Button } from './Button.js';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for ?</p>
            <div className="hero-btns">
                <Button 
                className="btns" 
                buttonStyle="btn--outline" 
                buttonSize="btn--large"
                >
                    Get Start !
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
