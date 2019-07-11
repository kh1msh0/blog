import { useState, useEffect } from 'react';
import axios from 'axios';

const GetBlogList = () => {
  const [blogList, setTopBlogs] = useState([]);
  const [blogLanguage, setBlogLanguage] = useState("ka");
  const [isLoading, setIsLoading] = useState(true);

  async function fetchItems() {
    try {
      setIsLoading(true)
      const response = await axios.get(`/api/blogs/?lastId=`);

      setTopBlogs(response.data)     
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchMoreItems() {
    const islast = blogList[blogList.length-1].id
 
    try {
      const response = await axios.get(`/api/blogs/?lastId=${islast}`);

      setTopBlogs([...blogList,...response.data])     
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    fetchItems()
  }, [blogLanguage])

  return { blogList, isLoading, fetchMoreItems, setBlogLanguage };
};

export default GetBlogList;