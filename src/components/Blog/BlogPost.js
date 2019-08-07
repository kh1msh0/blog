import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogPost = ({ data }) => {
  const { cover, day, description, title, month, id, type, typeDesc  } = data;
  return (
    <div className="blogpost_card">
      <Card>
        <Link to={data.categories ? `/guides/${id}` : `/blog/${id}`}>
          <div className="outer_div">
            <div className="onhover_background">
              <div className="on_post_image">
                <div>{day}</div>
                <p>{month}</p>
              </div>
            </div>
            <div
              className="post_image"
              style={{ backgroundImage: `url(http://178.128.21.17${cover})` }}
            />
          </div>
          <Card.Body className="for_relater_responsive">
            <Card.Title>{title}</Card.Title>
            {typeDesc  ? <div style={{fontSize:16, color:'#2B2B2B'}}>გაიდები/{typeDesc }</div>: null}
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};
export default BlogPost;
