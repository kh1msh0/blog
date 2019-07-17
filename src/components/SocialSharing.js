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
    const [href, setHref] = useState();

    const pRef = useRef(null);
    const trakiref = useRef(null)

    function copyToClipboard(e) {
        pRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    };

    function loadfb() {
        window.FB.XFBML.parse(trakiref.current);
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
            }, 3000)
        }

        setHref(window.location.href)
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
                        <FacebookIcon size={52} round={false} />
                    </FacebookShareButton>
                    <LinkedinShareButton className='socials_margin' url={window.location.href}>
                        <LinkedinIcon size={52} round={false} />
                    </LinkedinShareButton>
                    <TwitterShareButton className='socials_margin' url={window.location.href}>
                        <TwitterIcon size={52} round={false} />
                    </TwitterShareButton>
                    <div ref={trakiref}>
                        <img style={{height: '52px', width:'52px', position: 'absolute'}} src={save} alt=""/>
                    <div className="fb-save " data-uri={window.location.href} data-size="large"></div>
                    </div>

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
