import React from 'react';
import { Card  } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BlogPost = ({data}) => {

    const {cover, day, description, title, month, id } = data
    return (
        <div className="blogpost_card">
            <Card >
            <Link  to = {data.categories ? `/guides/${id}` :`/blog/${id}`} >
                <div className='outer_div'>
                <div className="post_image" style={{backgroundImage: `url(http://178.128.21.17${cover})`}}>
                    <div className="onhover_background">
                    <div className="on_post_image">
                        <div>
                            {day}
                        </div>
                        <p>
                            {month}
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Link>
            </Card>   
            </div>
    )
}
export default BlogPost;