import React, { Fragment } from 'react';

const InnerPostbody = ({ data }) => {
    const { cover, title } = data
    return (
        <Fragment>
            
            <div className="inner_post_section1" style={{ backgroundImage: `url(http://178.128.21.17${cover})` }}>
                <div className="inner_post_section1_on_img">

                </div>
            </div>
        </Fragment>
    );
}

export default InnerPostbody;
