import React, {
  Fragment,
} from 'react';
import FirstSection from './FirstSection';
import BlogPosts from './BlogPosts';
import Loading from '../Loading';


import { useStore } from "outstated";
import { GetBlogList } from "../store";
const Blog = () => {
  const { isLoading } = useStore(GetBlogList);

if(isLoading){
  return <Loading/>
}else{
  return (
    <Fragment>
      <FirstSection />
      <BlogPosts  />
    </Fragment>
  )
}
}
export default Blog;