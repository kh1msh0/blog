import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF,  faInstagram, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebookF,faInstagram, faLinkedinIn, faSearch ); 

function Aws() {
  return (
    <div className=''>
        <FontAwesomeIcon className="header_icons" icon={['fab', 'facebook-f']} />
        <FontAwesomeIcon className="header_icons" icon={['fab', 'instagram']} />
        <FontAwesomeIcon className="header_icons" icon={['fab', 'linkedin-in']} />
    </div>
  );
}

export default Aws;
