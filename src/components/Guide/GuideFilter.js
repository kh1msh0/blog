import React, { useState, useEffect } from "react";
import { BlogPost } from "../Blog";
import { Subscribe } from "../Subscribe";
import { Filter } from "../Guide";
import Loading from '../Loading'
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import { useStore } from "outstated";
import { FetchStrings } from "../store";

const GuideFilter = ({ categoryname, match, catId }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingFilter, setIsLoadingFilter] = useState(true);
  const { fetchedStrings } = useStore(FetchStrings);


  let id = match.params.id;
  async function fetchItem() {
    if (id === "all" || id === "ALL" || !id) {
      id = "";
    } else {
      id = id.toUpperCase();
    }

    if (!catId || catId === undefined ) {
      catId = ''
    }

    try {
      setIsLoadingFilter(true)
      const response = await axios.get(
        `/api/guides?type=${id}&lastId=&catId=${catId}`
      );
      setItems(response.data);
      setIsLoading(false);
      setIsLoadingFilter(false)
    } catch (error) {
      console.error(error);
    }
    
    
    
  }
  
  const fetchMoreItems = () =>{
    const islast = items[items.length-1].id
    async function fetchMoreItems() {
      if (id === "all" || id === "ALL" || !id) {
        id = "";
      } else {
        id = id.toUpperCase();
      }
  
      if (!catId || catId === undefined ){
        catId = ''
      }
  
      try {
        const response = await axios.get(
          `/api/guides?type=${id}&lastId=${islast}&catId=${catId}`
        );
        setItems([...items,...response.data]);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMoreItems() 
  }
  
  

  
  
  useEffect(() => {
    fetchItem();
  }, [id]);
  
  const { title } = fetchedStrings.data.guides;
  const { showMore } = fetchedStrings.data;
  if (isLoading) {
    return <Loading/>
  } else { 
    return (
      <Container className="blog_posts_1">
        {match.params.id && <h1 className="guide_filter_header" >{title}</h1>}
        <Row className="blog_part_1_row">
          <Col xs={12} md={12} lg={8} className="blog_posts_left">
            {match.params.id && <Filter match={match} />}
            {catId && (
              <div className="posts_head">
                <span style={{color:"#2b2b2b8c"}}>გაიდები/<span style={{color:"#000000"}}>{categoryname}</span> </span>
              </div>
            )}
            <Row>
              {!isLoadingFilter ? items.map(item => (
                <BlogPost key={item.id} data={item} />
              )) : <Loading/>}
            </Row>
            {items.length >=6  ? <div style={items[items.length-1].isLast?{display: 'none'}: {}} className="show_more_button" >
              <div onClick={()=>fetchMoreItems()}>
                <p>{showMore}</p>
              </div>
            </div> : ''}
          </Col>
          <Col xs={12} md={12} lg={4} className="blog_posts_right">
            <div className="posts_head">{fetchedStrings.data.subscribeBanner.title}</div>
            <Subscribe />
          </Col>
        </Row>
      </Container>
    );
  }
};

export default GuideFilter;
