import { useState, useEffect } from 'react';
import axios from 'axios';

const GetBlogList = () => {
  const [blogList, setTopBlogs] = useState([]);
  const [blogLanguage, setBlogLanguage] = useState("ka");
  const [isLoading, setIsLoading] = useState(true);

  


  async function fetchItems() {
    try {
      const response = await axios.get(`api/blogs/?lang=${blogLanguage}&lastId=`);

      setTopBlogs(response.data)     
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchMoreItems() {
    const islast = blogList[blogList.length-1].id

    try {
      const response = await axios.get(`api/blogs/?lang=${blogLanguage}&lastId=${islast}`);

      setTopBlogs([...blogList,...response.data])     
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  // const fetchMoreItems = () =>{
  //   const islast = blogList[blogList.length-1].id
  //   setUrl(`http://178.128.21.17/api/blogs/?lang=${blogLanguage}&lastId=${islast}`)
  // }

  useEffect(() => {
    fetchItems()
  }, [blogLanguage])

  return { blogList, isLoading, fetchMoreItems, setBlogLanguage };
};

export default GetBlogList;