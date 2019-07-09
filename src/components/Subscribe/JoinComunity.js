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
                <div className="area_circle_logo">
                    <img src={`http://178.128.21.17${icon}`} alt="" />
                </div>
                <div className="joincomunity_button">
                    <Button href={buttonUrl} variant="primary" size="lg" block>
                        {buttonTitle}
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default JoinComunity;