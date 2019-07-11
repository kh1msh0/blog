import React from 'react';
import BlogPost from './BlogPost';
import { Container, Row, Col } from 'react-bootstrap';
import {Subscribe} from '../Subscribe';


import { useStore } from "outstated";
import { FetchStrings, GetBlogList } from "../store";


const BlogPosts = () => {
    const { fetchedStrings } = useStore(FetchStrings);
    const { blogList, isLoading, fetchMoreItems } = useStore(GetBlogList);

    

    const {otherPosts, showMore} = fetchedStrings.data
    if(isLoading){ 
        return ''
    }else{
        return (
            <Container className="blog_posts_1" >
                <Row className="blog_part_1_row">
                    <Col xs={12} md={12} lg={8} className="blog_posts_left" >
                        <div className="posts_head">
                            {otherPosts}
                        </div>
                        <Row>
                            {blogList.map(item=>(
                            <BlogPost key={item.id} data={item} />
                            ))}
                        </Row>
                        {blogList.length >=6 ? <div style={blogList[blogList.length-1].isLast?{display: 'none'}: {}} className="show_more_button" >
                            <div onClick={fetchMoreItems}>
                                <p>{showMore}</p>
                            </div>
                        </div> : ''}
                    </Col>
                    <Col xs={12} md={12} lg={4}  className="blog_posts_right">
                        <div className="posts_head">
                            {fetchedStrings.data.subscribeBanner.title}
                        </div>
                        <Subscribe /> 
                    </Col>
                </Row>
            </Container>
        );
    }
} 

export default BlogPosts;
