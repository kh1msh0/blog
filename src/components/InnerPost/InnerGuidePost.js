import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Subscribe } from "../Subscribe";
import { InnerPostbody, InnerPostHead } from "../InnerPost";
import { BlogPost } from "../Blog";
import SocialSharing from '../SocialSharing';
import axios from "axios";
import Loading from "../Loading";

const InnerGuidePost = ({ match }) => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState({});


  async function fetchItem() {
    try {
      const response = await axios.get(`/api/guides/${match.params.card}`);
      setItem(response.data);
      // console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    fetchItem();
  }, [match.params.card]);

  const { related, title } = item;
  if (isLoading) {
    return <Loading/>;
  } else {
    return (
      <Fragment>
        <Container className="blog_posts_1">
          <div className="inner_post_section1_div">
            {title}
          </div>
          <Row className="blog_part_1_row">
            <Col xs={12} md={12} lg={8} className="blog_posts_left">
              <InnerPostbody data={item} />
              <SocialSharing />
              <InnerPostHead content={item.content} />
              <SocialSharing />
            </Col>
            <Col xs={12} md={12} lg={4} className="blog_posts_right inner_guide_post_subscribe">
              <Subscribe />
            </Col>
          </Row>
        </Container> 
        <Container className="related">
          <div className="related_title">
            <div>Related articles and tips</div>
            <div className="line"></div>
          </div>
          <Row>
            {related.map(item => (
              <Col key={item.id} xs={12} md={4} >
                <BlogPost data={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </Fragment>
    );
  }
};

export default InnerGuidePost;
