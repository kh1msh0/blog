import React from 'react';
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


const SearchedPost = ({ item }) => {
    // console.log(item)
    const { title, description, id, cover } = item
    return (
        <Link to={!item.type ? `/blog/${id}`: `/guides/${id}`} className="search_inner_post_link">
            <div className="SearchedPost" >
                <Col xs={12} md={4} lg={4}>
                    <div className="image" style={{ backgroundImage: `url(http://178.128.21.17${cover})` }} >
                    </div>
                </Col>
                <div className="text">
                    <h4 className="title">
                        {title}
                    </h4>
                    <p className="description">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default SearchedPost;