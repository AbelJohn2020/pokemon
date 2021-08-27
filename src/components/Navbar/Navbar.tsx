import React from 'react';
import Logo from '../images/logo.svg.png';
import { Img, Nav } from './NavbarStyles';

const Navbar = () => {
    return (
        <Nav>
            <Img src={Logo} alt="Pokemon logo"/>
        </Nav>
    )
}

export default Navbar;
