import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg.png';
import { Img, Nav } from './NavbarStyles';

const Navbar = () => {
    return (
        <Nav>
            <Link to="/" className="backMainPage">
                <Img src={Logo} alt="Pokemon logo"/>
            </Link>
        </Nav>
    )
}

export default Navbar;
