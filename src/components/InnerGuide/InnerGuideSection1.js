import React, { useState, useEffect } from 'react';
import axios from 'axios';





const InnerGuideSection1 = ({  items, isLoading }) => {
   

    const { image, title, description } = items;
    // console.log(items)
    if (isLoading) {
        return 'Loading...'
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