import React, { useState } from 'react';
import { Link }from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './images/logo.png'


import '../Styles/main.css';



const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo'/>
                </a>
                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#00c6e1' }} />)
                        : (<FaBars size={30} style={{ color: '#00c6e1' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                    <Link to="s-home" spy={true} smooth={true} offset={-100} duration={500}onClick={closeMenu}>Ínicio</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500}onClick={closeMenu}>Quem sou</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="s-projects" spy={true} smooth={true} offset={-100} duration={500}onClick={closeMenu}>Projetos</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="s-skills" spy={true} smooth={true} offset={-150} duration={500}onClick={closeMenu}>Conhecimentos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;