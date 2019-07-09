import React from 'react';
import logo from "../images/images/logowhite.svg"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className="footer_main">
                <div className='container'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='rights'>
                        © 2019 All rights reserved
                    </div>
                    <div className="line" ></div>
                    <div className='socials'>
                        <FaFacebookF className="header_icons" />
                        <FaInstagram className="header_icons" />
                        <FaLinkedinIn className="header_icons" />
                    </div>
                </div>
            </div>
        </div>
    ) 
}
export default Footer;