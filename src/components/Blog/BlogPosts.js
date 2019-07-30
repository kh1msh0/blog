import React from "react";
import BlogPost from "./BlogPost";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Subscribe } from "../Subscribe";
import spiner from "../../images/spinner.svg";

import { useStore } from "outstated";
import { FetchStrings, GetBlogList } from "../store";

const BlogPosts = () => {
  const { fetchedStrings } = useStore(FetchStrings);
  const { blogList, isLoading, fetchMoreItems, loadingItems } = useStore(
    GetBlogList
  );

  const { otherPosts, showMore } = fetchedStrings.data;
  if (isLoading) {
    return "";
  } else {
    return (
      <Container className="blog_posts_1">
        <Row className="blog_part_1_row">
          <Col xs={12} md={12} lg={8} className="blog_posts_left">
            <div className="posts_head">{otherPosts}</div>
            <Row>
              {blogList.map(item => (
                <BlogPost  key={item.id} data={item} />
              ))}
            </Row>
            {blogList.length >= 6 ? (
              <div
                style={
                  blogList[blogList.length - 1].isLast
                    ? { display: "none" }
                    : {}
                }
                className="show_more_button"
              >
                <div className="showmore" onClick={fetchMoreItems}>
                  {/* <Spinner style={loadingItems ? {}: {visibility: 'hidden'}} animation="border" variant="warning" /> */}
                  <div style={{ marginLeft: "-6px" }}>
                    <img
                      src={spiner}
                      alt="spiner"
                      className="new_loader"
                      style={loadingItems ? {} : { visibility: "hidden" }}
                    />
                  </div>
                  <p>{showMore}</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </Col>
          <Col xs={12} md={12} lg={4} className="blog_posts_right" id="testi">
            <div className="posts_head">
              {fetchedStrings.data.subscribeBanner.title}
            </div>
            <Subscribe blogInnerpostsScroll={true} />
          </Col>
        </Row>
      </Container>
    );
  }
};

export default BlogPosts;
