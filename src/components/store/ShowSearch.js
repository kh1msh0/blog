import { useState, useEffect } from 'react';


const ShowSearch = () => {
  const [search, setSearch] = useState(false)

  const showsearch = () =>{
      setSearch(!search)
  }



  return { showsearch, search };
};

export default ShowSearch;