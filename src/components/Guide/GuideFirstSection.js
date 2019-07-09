import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { GuideFirstSectionCard } from '../Guide';
import axios from 'axios';




 
import { useStore } from "outstated";
import { FetchStrings } from "../store";


const GuideFirstSection = () => {
  const { stringLanguage } = useStore(FetchStrings);

  const [items, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  async function fetchItem() {

    try {
      const response = await axios.get(
        `api/guides/categories?lang=${stringLanguage}`
      );
      setItems(response.data);
      // console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    fetchItem();
  }, [stringLanguage]);

  if(isLoading){
    return 'Loading ...'
  }
  return (
    <Container className="" >
      <Row className="">
        {items.map(item => (
          <GuideFirstSectionCard key={item.id} data={item} />
        ))}
      </Row>
    </Container>
  )
}



export default GuideFirstSection;