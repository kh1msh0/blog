import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import { Container, Row, Col } from "react-bootstrap";
import { Subscribe } from "../Subscribe";
import spiner from "../../images/spinner.svg";

import { useStore } from "outstated";
import { FetchStrings, GetBlogList } from "../store";

const BlogPosts = () => {
  const { fetchedStrings } = useStore(FetchStrings);
  const { blogList, isLoading, fetchMoreItems, loadingItems } = useStore(
    GetBlogList
  );

  const [scrolled, setScrolled] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [testDivWidth, setTestDivWidth] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var testDiv = document.getElementById("testi");
      if (testDiv) {
        setTestDivWidth(testDiv.offsetWidth);
        var isTop = window.scrollY < testDiv.offsetTop - 70;
      } else {
        isTop = true;
      }

      if (isTop !== true) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (document.body.scrollHeight - window.scrollY < 860) {
        setIsEnd(true);
      } else {
        setIsEnd(false);
      }
    });

    return () => {};
  }, []);

  const style = {
    position: "fixed",
    top: "70px",
    flexDirection: "column",
    width: `${testDivWidth - 30}px`
  };

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
                <BlogPost key={item.id} data={item} />
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
            <div
              className={isEnd ? "subscribe" : ""}
              style={scrolled && !isEnd ? style : null}
            >
              <div
                className="posts_head"
                style={{ width: `${testDivWidth - 30}px` }}
              >
                {fetchedStrings.data.subscribeBanner.title}
              </div>
              <Subscribe />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default BlogPosts;
