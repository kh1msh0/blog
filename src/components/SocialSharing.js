import React, { Fragment, useState, useRef } from 'react';
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




const SocialSharing = () => {
    const [copySuccess, setCopySuccess] = useState('copy text');

    const pRef = useRef(null);

    function copyToClipboard(e) {
        pRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
      };
  
    return (
        <Fragment>
            <div className="socials_main" >
                <div className="socials" >
                <div className="social_count">
                    <FacebookShareCount url={window.location.href}>
                        {shareCount => (
                            <span className="myShareCountWrapper">{shareCount}</span>
                        )}
                    </FacebookShareCount>
                    <div>გაზიარება</div>
                </div>
                <div className="line"/>
                <FacebookShareButton className='socials_margin' url={window.location.href}>
                    <FacebookIcon size={52} round={false} />
                </FacebookShareButton>
                <LinkedinShareButton className='socials_margin' url={window.location.href}>
                    <LinkedinIcon size={52} round={false} />
                </LinkedinShareButton>
                <TwitterShareButton className='socials_margin' url={window.location.href}>
                    <TwitterIcon size={52} round={false} />
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
