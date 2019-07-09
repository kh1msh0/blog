import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FirstSectionCard from "./FirstSectionCard";

import { useStore } from "outstated";
import { GetTopBlogs } from "../store";

const FirstSection = () => {
  const { topBlogs, isLoading } = useStore(GetTopBlogs);
  if (isLoading) {
    return ''
  } else {
    return (
      <Container className="blog_part_1">
        <Row className="blog_part_1_row">
          <Col sm={12} md={12} lg={8} className="blog_part_1_left">
            <FirstSectionCard key={topBlogs[0].id} item={topBlogs[0]} />
          </Col>
          <Col xs={12} md={12} lg={4} className="blog_part_1_right">
            <Row>
              {topBlogs.slice(1).map(item => (
                <FirstSectionCard
                  key={item.id}
                  item={item}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
};
export default FirstSection;
