import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FirstSectionCard = ({ item }) => {
  const { cover, description, title, id } = item;
  return (
    <Link to={`/blog/${id}`}>
      <div className="outer_div_first_section">
            <div className="gradient">
              <Button variant="light">Featured</Button>
              <div>
                <h2>{title}</h2>
                <h5>{description}</h5>
              </div>
            </div>
        <div
          className="image_div"
          style={{ backgroundImage: `url(http://178.128.21.17${cover})` }}
          >
          {/* <div style={{transform: 'scale(.9)'}} > */}
        </div>
          </div>
      {/* </div> */}
    </Link>
  );
};
export default FirstSectionCard;
