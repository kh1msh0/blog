import React, { Fragment } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const GuideFirstSectionCard = ({data}) => {
    const {id, cover, title, description } = data 
    return (
        <Fragment>
          <Col xs={12} sm={6} md={6} lg={4} className="category" >
              <Link to={`/guides/catId/${id}`}>
                <div className="guide" style={{backgroundImage: `url(${cover})`}}>
                    <div className="guide_text_on_image" >
                        <h2>
                            {title}
                        </h2>
                        <div className="description">
                            {description}
                        </div>
                    </div>
                </div>
              </Link> 
          </Col>         
        </Fragment>
    )
}
export default GuideFirstSectionCard; 