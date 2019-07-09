import React, { Fragment } from 'react';
import GuideFirstSection from './GuideFirstSection';
import GuideFilter from './GuideFilter';


const Guide = ({match}) => {
    return ( 
        <Fragment>
            <GuideFirstSection/>
            <GuideFilter match={match} />
        </Fragment>
    )
}
export default Guide; 