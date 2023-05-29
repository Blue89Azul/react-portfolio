import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = [ 'btn--primary', 'btn--outline'];
const SIZES    = ['btn--medium', 'btn--large'];

// コンポーネントのメソッドが大文字が基本なんだっけか？
export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkedButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkedButtonSize  = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/' className='btn-mobile'>
            <button
            className={`btn ${checkedButtonStyle} ${checkedButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    );
};

