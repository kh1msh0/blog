import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const BlogPost = ({ data }) => {
  const { cover, day, description, title, month, id, typeDesc  } = data;
  return (
    <div className="blogpost_card">
      <Card>
        <Helmet>
                <title>{title}</title>
                <meta property="og:url" content={`https://blog.area.ge/blog/${id}`} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={title} />
                <meta property="og:image" content={`https://blog.area.ge/${cover}`} />
          </Helmet>
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
              style={{ backgroundImage: `url(${cover})` }}
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
