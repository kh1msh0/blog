import React from 'react';
import Loading from '../Loading';

const InnerGuideSection1 = ({  items, isLoading }) => {
    const { image, title, description } = items;
    if (isLoading) {
        return <Loading/>
    } else {
        return (
            <div className="inner_guide_img" style={{ backgroundImage: `url(http://178.128.21.17${image})`}}>
                <div className="inner_guide_on_img">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        )
    }

}
export default InnerGuideSection1; 