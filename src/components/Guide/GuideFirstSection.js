import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { GuideFirstSectionCard } from '../Guide';
import axios from 'axios';




const GuideFirstSection = () => {

  const [items, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  async function fetchItem() {

    try {
      const response = await axios.get(
        `/api/guides/categories`
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
  }, []);

  if(isLoading){
    return ''
  }
  return (
    <Container className="GuideFirstSection" >
      <Row className="">
        {items.map(item => (
          <GuideFirstSectionCard key={item.id} data={item} />
        ))}
      </Row>
    </Container>
  )
}



export default GuideFirstSection;