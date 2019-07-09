import { useState, useEffect } from 'react';
import axios from 'axios';


const FetchStrings = () => {

  const [fetchedStrings, setFetchedStrings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [stringLanguage, setStringLanguage] = useState("ka");
  
  
  async function fetchItems(url) {
    try {
      const response = await axios.get(url);
      setFetchedStrings(response)     
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  }



  useEffect(() => {
    fetchItems(`/api/strings?lang=${stringLanguage}`)
  }, [stringLanguage])

  return { fetchedStrings,  isLoading, setStringLanguage, stringLanguage };
};

export default FetchStrings;