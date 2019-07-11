import { useState, useEffect } from 'react';
import axios from 'axios';

const GetTopBlogs = () => {
  const [topBlogs, setTopBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topBlogLanguage, setTopBlogLanguage] = useState("ka");


  
  async function fetchItems(url) {
    try {
      
      const response = await axios.get(url);

      setTopBlogs(response.data)     
      // console.log( response.data ) 
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  } 
  
  useEffect(() => {
    fetchItems(`/api/blogs/top`)
  }, [topBlogLanguage])
 

  return { topBlogs, isLoading };
};

export default GetTopBlogs;