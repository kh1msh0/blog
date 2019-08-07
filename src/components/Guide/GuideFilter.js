import React, { useState, useEffect } from "react";
import { BlogPost } from "../Blog";
import { Subscribe } from "../Subscribe";
import { Filter } from "../Guide";
import Loading from "../Loading";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import spiner from "../../images/spinner.svg";

import axios from "axios";

import { useStore } from "outstated";
import { FetchStrings } from "../store";

const GuideFilter = ({ categoryname, match, catId }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingFilter, setIsLoadingFilter] = useState(true);
  const { fetchedStrings } = useStore(FetchStrings);
  const [loadingItems, setLoadingItems] = useState(false);

  let id = match.params.id;
  async function fetchItem() {
    if (id === "all" || id === "ALL" || !id) {
      id = "";
    } else {
      id = id.toUpperCase();
    }

    if (!catId || catId === undefined) {
      catId = "";
    }

    try {
      setIsLoadingFilter(true);
      const response = await axios.get(
        `/api/guides?type=${id}&lastId=&catId=${catId}`
      );
      setItems(response.data);
      setIsLoading(false);
      setIsLoadingFilter(false);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchMoreItems = () => {
    const islast = items[items.length - 1].id;
    async function fetchMoreItems() {
      if (id === "all" || id === "ALL" || !id) {
        id = "";
      } else {
        id = id.toUpperCase();
      }
      if (!catId || catId === undefined) {
        catId = "";
      }

      try {
        setLoadingItems(true);
        const response = await axios.get(
          `/api/guides?type=${id}&lastId=${islast}&catId=${catId}`
        );
        setItems([...items, ...response.data]);
        setIsLoading(false);
        setLoadingItems(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMoreItems();
  };
  const [scrolled, setScrolled] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [testDivWidth, setTestDivWidth] = useState(null);

  useEffect(() => {
    fetchItem();
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
  }, [id]);
  const style = {
    position: "fixed",
    top: "70px",
    flexDirection: "column",
    width: `${testDivWidth - 30}px`
  };

  const { title } = fetchedStrings.data.guides;
  const { showMore } = fetchedStrings.data;
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Container className="blog_posts_1">
        {match.params.id && <h1 className="guide_filter_header">{title}</h1>}
        <Row className="blog_part_1_row">
          <Col xs={12} md={12} lg={8} className="blog_posts_left">
            {match.params.id && <Filter match={match} />}
            {catId && (
              <div className="posts_head">
                <span style={{ color: "#2b2b2b8c" }}>
                  გაიდები/
                  <span style={{ color: "#000000" }}>{categoryname}</span>{" "}
                </span>
              </div>
            )}
            <Row>
              {!isLoadingFilter ? (
                items.map(item => <BlogPost key={item.id} data={item} />)
              ) : (
                <Loading />
              )}
            </Row>
            {items.length >= 6 ? (
              <div
                style={
                  items[items.length - 1].isLast
                    ? { display: "" }
                    : { display: "none" }
                }
                className="show_more_button"
              >
                <div className="showmore" onClick={fetchMoreItems}>
                  {/* <Spinner style={loadingItems ? {} : { display: 'none' }} animation="border" variant="warning" /> */}
                  <div style={{ marginLeft: "-6px" }}>
                    <img
                      src={spiner}
                      alt="spiner"
                      className="new_loader"
                      style={loadingItems ? {} : { visibility: "hidden" }}
                    />
                  </div>
                  <p
                  // style={loadingItems ? { display: 'none' } : {}}
                  >
                    {showMore}
                  </p>
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

export default GuideFilter;
