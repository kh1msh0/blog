import React from 'react';
import GmailSubscribe from './GmailSubscribe';
import JoinComunity from './JoinComunity';
import { Row } from 'react-bootstrap';

import { useStore } from "outstated";
import { FetchStrings } from "../store";







const Subscribe = () => {
  const { fetchedStrings } = useStore(FetchStrings);

  let content = (
    <div className='subscribe' >
      <Row>
      <GmailSubscribe data={fetchedStrings.data.subscribeBanner} />
      <JoinComunity data={fetchedStrings.data.partnerBanner}  />
      </Row>
    </div>
  )
  return content;

} 
export default Subscribe;