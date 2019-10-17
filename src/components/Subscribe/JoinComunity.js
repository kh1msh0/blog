import React from 'react';
import { Button } from 'react-bootstrap';



const JoinComunity = ({ data }) => {
    const { buttonTitle, buttonUrl, icon, subtitle, title } = data
    return (
        <div className="padding_div">
            <div className="joincomunity_div"  >
                <h3>
                    {title}
                </h3>
                <p>
                    {subtitle}
                </p>
                <a href="https://area.ge/" target="_blank" className="area_circle_logo">
                    <img src={`${icon}`} alt="" />
                </a>
                <div className="joincomunity_button">
                    <Button href={buttonUrl} style={{padding: '.8rem 1rem'}} variant="primary" size="lg" block>
                        {buttonTitle}
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default JoinComunity;