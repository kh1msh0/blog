import React, { Fragment } from 'react';
import logo from '../../images/images/logo.svg'
import { FaSistrix } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { OverlaySearch } from '../search'

import { useStore } from "outstated";
import { ChangeColor, ShowSearch } from "../store";



const Navigation = (props) => {
    const { showsearch } = useStore(ShowSearch);


    const { changBblog } = useStore(ChangeColor);

    return (
        <Fragment>
            <OverlaySearch props={props} />
            <div className="navbar_main">
                <div className='container'>
                    <div className='socials'>
                        <FaFacebookF className="header_icons facebook" />
                        <FaInstagram className="header_icons instagram" />
                        <FaLinkedinIn className="header_icons linkedin" />
                    </div>
                    <div className='logo'>
                        <Link to="/">
                            <img onClick={changBblog} src={logo} alt="" />
                        </Link>
                    </div>
                    <div className='search' onClick={() => showsearch()} >
                        <FaSistrix className="header_icons" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Navigation;