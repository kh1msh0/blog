import React, {
  Fragment,
  useEffect
} from 'react';
import FirstSection from './FirstSection';
import BlogPosts from './BlogPosts';
import Loading from '../Loading';
import Helmet from 'react-helmet';


import { useStore } from "outstated";
import { GetBlogList } from "../store";
const Blog = () => {
  const { isLoading } = useStore(GetBlogList);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
if(isLoading){
  return <Loading/>
}else{
  return (
    <Fragment>
        <Helmet>
          <title>Blog.area.ge</title>
          <meta property="og:url" content={`https://blog.area.ge/`} />
          <meta property="og:type" content="blog.area.ge" />
          <meta property="og:title" content="Blog.area.ge" />
          <meta property="og:image" content="https://blog.area.ge/static/media/logo.4e7d8529.svg" />
        </Helmet>
      <FirstSection />
      <BlogPosts  />
    </Fragment>
  )
}
}
export default Blog;