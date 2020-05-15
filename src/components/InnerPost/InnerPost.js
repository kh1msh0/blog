import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Subscribe } from '../Subscribe';
import { InnerPostbody, InnerPostHead } from '../InnerPost';
import { BlogPost } from '../Blog';
import SocialSharing from '../SocialSharing';
import axios from 'axios';
import Loading from '../Loading';
import Helmet from 'react-helmet';

const InnerPost = ({ match }) => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState({});

  async function fetchItem() {
    try {
      const response = await axios.get(`/api/blogs/${match.params.card}`);
      setItem(response.data);
      // console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchItem();
  }, [match.params.card]);

  const { related } = item;

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Fragment>
        <Helmet>
          <title>{item.title}</title>
          <meta
            property="og:url"
            content={`https://blog.area.ge/blog/${item.id}`}
          />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={item.title} />
          <meta
            property="og:image"
            content={`https://blog.area.ge/${item.cover}`}
          />
        </Helmet>
        <Container>
          <Row>
            <Col xs={12} md={12} />
          </Row>
        </Container>
        <Container className="blog_posts_1">
          <h1 className="inner_post_section1_div">{item.title}</h1>
          <Row className="blog_part_1_row">
            <Col xs={12} md={12} lg={8} className="blog_posts_left">
              <InnerPostbody data={item} />
              <SocialSharing />
              <InnerPostHead content={item.content} />
              <SocialSharing />
            </Col>
            <Col
              xs={12}
              md={12}
              lg={4}
              className="blog_posts_right inner_guide_post_subscribe "
              id="testi"
            >
              <Subscribe innerpostsScroll={true} />
            </Col>
          </Row>
        </Container>
        <Container className="related">
          <div className="related_title">
            <div>თემატური სტატიები</div>
            <div className="line" />
          </div>
          <Row>
            <Col className="inner_related" xs={12} md={6} lg={4}>
              <BlogPost data={related[0]} />
            </Col>
            <Col className="inner_related" xs={12} md={6} lg={4}>
              <BlogPost data={related[1]} />
            </Col>
            <Col className="inner_related" xs={12} md={6} lg={4}>
              <BlogPost data={related[2]} />
            </Col>
            <Col className="inner_related hidden_related" xs={12} md={6} lg={4}>
              <BlogPost data={related[3]} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
};

export default InnerPost;
