import React, { Fragment, useState, useRef, useEffect, useScript } from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton
} from 'react-share';
import {
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon
} from 'react-share';
import {
    FacebookShareCount,
} from 'react-share';
import { IoMdLink } from "react-icons/io";
import save from "../images/images/save.svg";
 



const SocialSharing = (props) => {
    const [copySuccess, setCopySuccess] = useState('copy text');

    const pRef = useRef(null);
    const fbref = useRef(null)

    function copyToClipboard(e) {
        pRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    };

    function loadfb() {
        window.FB.XFBML.parse(fbref.current);
    }
    useEffect(() => {
        if (window.FB) {
            loadfb()
        } else {
            setTimeout(() => {
                try {
                    loadfb();
                } catch (e) {
                    console.log(e)
                }
            }, 4000)
        }

    }, [])
    return (
        <Fragment>
            <div className="socials_main"  >
                <div className="socials" >
                    <div className="social_count">
                        <FacebookShareCount url={window.location.href}>
                            {shareCount => (
                                <span className="myShareCountWrapper">{shareCount}</span>
                            )}
                        </FacebookShareCount>
                        <div>გაზიარება</div>
                    </div>
                    <div className="line" />
                    <FacebookShareButton className='socials_margin' url={window.location.href}>
                        <FacebookIcon size={'100%'} round={false} />
                    </FacebookShareButton>
                    <div ref={fbref} className='socials_margin' >
                        <img style={{height: '100%', width:'100%'}} src={save} alt=""/>
                    <div className="fb-save " data-uri={window.location.href} data-size="large"></div>
                    </div>
                    <LinkedinShareButton className='socials_margin' url={window.location.href}>
                        <LinkedinIcon size={'100%'} round={false} />
                    </LinkedinShareButton>
                    <TwitterShareButton className='socials_margin' url={window.location.href}>
                        <TwitterIcon size={'100%'} round={false} />
                    </TwitterShareButton>

                </div>
                <div className="link" onClick={copyToClipboard}>
                    <span className="tooltiptext" >{copySuccess}</span>
                    <IoMdLink className="icon" />
                    <textarea
                        ref={pRef}
                        defaultValue={window.location.href}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default SocialSharing
