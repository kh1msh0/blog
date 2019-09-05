import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer_">
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
        <div className="content">
          <div className="container">
            <div className="colums location loc">
              <div className="footer_headers">ადგილმდებარეობა</div>
              <div className="location_colums">
                <div className="colum">
                  <div>
                    <a href="https://area.ge/search?address_cityId=1">თბილისი</a>
                  </div>
                  <div>
                    <a href="https://area.ge/search?address_cityId=93">ქუთაისი</a>
                  </div>
                  <div>
                    <a href="https://area.ge/search?address_cityId=109">გუდაური</a>
                  </div>
                  <div>
                    <a href="https://area.ge/search?address_cityId=100">აბაშა</a>
                  </div>
                  <div>
                    <a href="https://area.ge/search?address_cityId=102">ადიგენი</a>
                  </div>
                  <div>
                    <a href="https://area.ge/search?address_cityId=104">ანაკლია</a>
                  </div>
                </div>
                <div className="colum">
                  <div>
                    <a href="https://area.ge/search?address_cityId=92">ბათუმი</a>
                  </div>
                  <div>
                    <a href="https://area.ge/search?address_cityId=78">ბაკურიანი</a>
                  </div>
                  <div>
                    <a href="https://area.ge/search?address_cityId=106">აბასთუმანი</a>
                  </div>
                  <div>
                    <a href="https://area.ge/search?address_cityId=101">აგარა</a>
                  </div>
                  <div>
                    <a href="https://area.ge/search?address_cityId=103">ამბროლაური</a>
                  </div>
                  <div>
                    <a href="https://area.ge/search?address_cityId=105">ანანური</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="colums location real_estate">
              <div className="footer_headers">უძრავი ქონება</div>
              <div className="location_colums">
                <div className="colum">
                  <div>
                    <a href="https://area.ge/search?type=1">ბინა</a>
                  </div>
                  <div>
                    <a href="https://area.ge/search?type=2">სახლი/აგარაკი</a>
                  </div>
                  <div>
                    <a href="https://area.ge/search?type=4">კომერციული</a>
                  </div>
                  <div>
                    <a href="https://area.ge/search?type=8">მიწა</a>
                  </div>
                  <div>
                    <a href="https://area.ge/search?type=16">ოფისი</a>
                  </div>
                </div>

              
              </div>
            </div>
            <div className="colums location">
              <div className="footer_headers">აღმოაჩინე <span style={{fontFamily:'NotoSans_bold'}}>AREA</span></div>
              <div className="location_colums">
                <div className="colum">
                  <div>
                    <a href="https://area.ge/ka/about">ჩვენს შესახებ</a>
                  </div>
                  <div>
                    <a href="http://blog.area.ge">ბლოგი</a>
                  </div>
                  <div>
                    <a href="https://area.ge/ka/faq">ხშირად დასმული კითხვები</a>
                  </div>
                  <div>
                    <a href="https://static.area.ge/docs/terms-and-conditions-ka.pdf">გამოყენების პირობები</a>
                  </div>
                  <div>
                    <a href="https://static.area.ge/docs/privacy-policy-ka.pdf">კონფიდენციალობის წესები</a>
                  </div>
                </div>

              </div>
            </div>
            <div className="colums location">
              <div className="footer_headers">პრემიუმ სერვისები</div>
              <div className="location_colums">
                <div className="colum">
                  <div>
                    <a href="https://area.ge/ka/premium-services/make-featured">აქციე შეთავაზებად</a>
                  </div>
                  <div>
                    <a href="https://area.ge/ka/premium-services/photographer">ფოტოგრაფი</a>
                  </div>
                  <div>
                    <a href="https://area.ge/ka/premium-services/content-editor">განცხადების რედაქტორი</a>
                  </div>
                  <div>
                    <a href="https://area.ge/ka/premium-services/advertise">რეკლამა სოციალურ მედიაში</a>
                  </div>
                </div>

              
              </div>
            </div>
            <div className="colums location">
              <div className="footer_headers">დაგვიკავშირდით</div>
              <div className="location_colums">
                <div className="contact" style={{justifyContent:'center'}}>
                  <div style={{marginLeft:'1px'}}>
                    <a href="0#"><img style={{ width:'14px'}} src={require('../images/phone.png')}/></a>
                  </div>
                  <div>
                    <a href="0#"><img style={{ width:'16px'}} src={require('../images/email.png')}/></a>
                  </div>
                  <div>
                    <a href="https://www.facebook.com/Areage-190230005186117/"><FaFacebookF /> </a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/area.ge/"><FaInstagram /></a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/company/area-ge/"><FaLinkedinIn /></a>
                  </div>
                </div>

                <div className="contact_text">
                  <div>
                    <a href="#0">032 2 27 13 14</a>
                  </div>
                  <div>
                    <a href="">info@area.ge</a>
                  </div>
                  <div>
                    <a href="">Facebook</a>
                  </div>
                  <div>
                    <a href="">Instagram</a>
                  </div>
                  <div>
                    <a href="">Linkedin</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="rights_container">
          <div className="rights">© 2019 All rights reserved</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
