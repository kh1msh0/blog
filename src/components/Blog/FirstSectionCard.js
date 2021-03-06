import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FirstSectionCard = ({ item }) => {
  const { cover, description, title, id } = item;
  return (
    <Link to={`/blog/${id}`}>
      <div className="outer_div_first_section">
            <div className="gradient">
              <div></div>
              {/* <Button variant="light">ჩვენ გირჩევთ</Button> */}
              <div>
                <h2>{title}</h2>
                <h5>{description}</h5>
              </div>
            </div>
        <div
          className="image_div"
          style={{ backgroundImage: `url(${cover})` }}
          >
          {/* <div style={{transform: 'scale(.9)'}} > */}
        </div>
          </div>
      {/* </div> */}
    </Link>
  );
};
export default FirstSectionCard;
