import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import GmailSubscribe from './GmailSubscribe';
import JoinComunity from './JoinComunity';
import { Row } from 'react-bootstrap';

import { useStore } from "outstated";
import { FetchStrings } from "../store";







const Subscribe = () => {
  const { fetchedStrings } = useStore(FetchStrings);
  const [scrolled, setScrolled] = useState(false);


  useEffect(()=>{
    window.addEventListener('scroll', () => {
      var testDiv = document.getElementById("testi");
      if (testDiv){
        var isTop = window.scrollY < testDiv.offsetTop - 27;
      }else{
        isTop = true
      }
      console.log(document.body.scrollHeight)
      if (isTop !== true){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    })

  }, [])
  
  const style= {
    position: 'fixed',
    top: '60px',
    flexDirection: 'column'
  }
 
  
  let content = (
    <div className='subscribe'  >
      <Row className='scroll' style={ scrolled ? style : {} }>
      <GmailSubscribe className='test' data={fetchedStrings.data.subscribeBanner} />
      <JoinComunity data={fetchedStrings.data.partnerBanner}  />
      </Row>
    </div>
  )
  return content;

} 
export default Subscribe;