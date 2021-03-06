import React, { useState, useEffect } from "react";
import Paginationi from './Paginationi';
import { Subscribe } from "../Subscribe";
import { Container, Row, Col } from "react-bootstrap";
import Loading from '../Loading'
import { SearchedPost } from '../search';
import { FaSistrix } from 'react-icons/fa';
import Helmet from 'react-helmet';

import axios from "axios";



const Search = (props) => {
  const [items, setItems] = useState([]);
  const [serchingObject, setSerchingObject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6)



  const searchItem = (e) => {
    if(!(/^ *$/.test(serchingObject))){
      const title = serchingObject
      console.log(window.location.origin)
      axios.post(`/api/search`, {
        key: title
      })
        .then(function (response) {
          console.log([...response.data.blogs, ...response.data.guides]);
          setItems([...response.data.blogs, ...response.data.guides])
          setIsLoading(false)
          setCurrentPage(1)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  const searchItemonLoad = (e) => {
    const title = props.match.params.search
    console.log(title)
    axios.post(`/api/search`, {
      key: title
    })
      .then(function (response) {
        console.log([...response.data.blogs, ...response.data.guides]);
        setItems([...response.data.blogs, ...response.data.guides])
        setIsLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }


// get crrent items

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
let currentPosts;
if(!isLoading){
   currentPosts = items.slice(indexOfFirstPost, indexOfLastPost)
}

const paginate = (pageNumber) => setCurrentPage(pageNumber)


  useEffect(() => {
    searchItemonLoad()
    setSerchingObject(props.match.params.search)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container className="blog_posts_1 search">
      <Helmet>
          <title>Blog.area.ge</title>
          <meta property="og:url" content={`https://blog.area.ge/`} />
          <meta property="og:type" content="blog.area.ge" />
          <meta property="og:title" content="Blog.area.ge" />
          <meta property="og:image" content="https://blog.area.ge/static/media/logo.4e7d8529.svg" />
        </Helmet>
      <div style={{fontSize: '18px', color: '#969696'}}>{isLoading ? 'searching' : items.length} Results for "{serchingObject}" </div>
      <Row className="blog_part_1_row">
        <Col xs={12} md={12} lg={8} className="blog_posts_left">
          <div className="posts_head">
            <span><FaSistrix /></span>
            {serchingObject == null ? "" :
              <input onKeyUp={searchItem} onChange={(e) => setSerchingObject(e.target.value)} placeholder="khachapuri" value={serchingObject} />}
          </div>
          <Row>
            {isLoading ? <Loading/> : currentPosts.map(item => (
              <SearchedPost key={item.id} item={item} />
            ))}
            {!isLoading && currentPosts.length === 0 ? <div style={{display:'flex', justifyContent:"center", width: '100%', height: '50vh', alignItems: "center"}}><div>No Results</div></div> : ''}
          </Row>
          { items.length === 0 ?'':<Paginationi postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate} currentPage={currentPage} />}
        </Col>
        <Col xs={12} md={12} lg={4} className="blog_posts_right">
          <div className="posts_head">Title goes here</div>
          <Subscribe />
        </Col>
      </Row>
    </Container>
  );
}
 

export default Search;
