import React, { Fragment } from 'react';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';

const InnerPostHead = ({ content }) => {
  // const transform = (node, index) => {
  //   if (node && node.type === 'tag' && node.name === 'a') {
  //     // node.name = 'a';
  //     // return convertNodeToElement(node, index, transform);
  //     return <a href="google.com">wecdedeerf2er</a>;
  //   }
  //   // return node;
  // };
  return (
    <Fragment>
      <div className="content">
        {ReactHtmlParser(content)}
        {/* {ReactHtmlParser(content, { transform: (node) => transform(node) })} */}
      </div>
    </Fragment>
  );
};

export default InnerPostHead;
