import React from "react";
import logo from "../images/images/logowhite.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const changeLanguage = lang => {
    localStorage.setItem("language", lang);
    window.location.reload(true);
  };
  const selectedLanguage = localStorage.getItem("language");
  return (
    <div>
      <div className="footer_main">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="rights">© 2019 All rights reserved</div>
          {/* <select value={selectedLanguage} onChange={(e) => changeLanguage(e.target.value)}>
                        <option value="ka">ქართული</option>
                        <option value="en">ინგლისური</option>
                    </select> */}
          <div className="line"></div>
          <div className="socials">
            <a href="https://www.facebook.com/Areage-190230005186117/">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/area.ge/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/area-ge/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
