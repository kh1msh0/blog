import React, { Fragment } from 'react';
import logo from '../../images/images/logo.svg'
import { FaSistrix } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { OverlaySearch } from '../search'

import { useStore } from "outstated";
import { ChangeColor, FetchStrings, GetBlogList, GetTopBlogs, ShowSearch } from "../store";



const Navigation = (props) => {
    const { setStringLanguage, stringLanguage } = useStore(FetchStrings);
    const { setBlogLanguage } = useStore(GetBlogList);
    const { setTopBlogLanguage } = useStore(GetTopBlogs);
    const { showsearch } = useStore(ShowSearch);



    const ChangeLanguage = () => {
        let language;
        if (stringLanguage === 'ka') {
            language = "en"
        } else if (stringLanguage === "en") {
            language = "ka"
        }

        setStringLanguage(language)
        setBlogLanguage(language)
        setTopBlogLanguage(language)
    }





    const { changBblog } = useStore(ChangeColor);

    return (
        <Fragment>
            <OverlaySearch props={props} />
            <div className="navbar_main">
                <div className='container'>
                    <div className='search' onClick={() => showsearch()} >
                        <FaSistrix className="header_icons" />
                    </div>
                    <div className='logo'>
                        {/* <button onClick={ChangeLanguage}>aaa</button> */}
                        <Link to="/">
                            <img onClick={changBblog} src={logo} alt="" />
                        </Link>
                    </div>
                    <div className='socials'>
                        <FaFacebookF className="header_icons" />
                        <FaInstagram className="header_icons" />
                        <FaLinkedinIn className="header_icons" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Navigation;