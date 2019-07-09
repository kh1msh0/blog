import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';

const InnerPostHead = ({content}) => {
    return (
        <Fragment>
             <div className="content" >{ ReactHtmlParser(content) }</div>
        </Fragment>
    );
}

export default InnerPostHead;
