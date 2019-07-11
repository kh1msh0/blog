import React, { Fragment } from 'react';

const Loading = () => {
    return (
        <Fragment>
            <div style={{width:'100%', height: '100vh', display:'flex', flexDirection: 'column', justifyContent:"center"}}>
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Loading;