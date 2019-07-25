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
                        {/* <FaFacebookF className="header_icons facebook" />
                        <svg width="0" height="0">
                            <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                                <stop stopColor="#fdf497" offset="0" />
                                <stop stopColor="#fdf497" offset="0.05" />
                                <stop stopColor="#fd5949" offset="0.45" />
                                <stop stopColor="#d6249f" offset="0.6" />
                                <stop stopColor="#285AEB" offset="0.9" />
                            </radialGradient>
                        </svg>
                        <div className="instagram_div">
                            <FaInstagram className="header_icons instagram" />
                        </div>

                        <FaLinkedinIn className="header_icons linkedin" /> */}
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