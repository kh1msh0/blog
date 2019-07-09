import { useState, useEffect } from 'react';


const ChangeColor = () => {
  const [active, setActive] = useState("/");
  
  let pathname = window.location.pathname


  const chageActive =  (onload_activ) => {
    setActive(onload_activ)

}

const changBblog = () => {
    setActive("/")
}
const changeGuide = () => {
    setActive("/guide/all")
}



useEffect(() => {
   chageActive(pathname)
},[pathname])

 
 

  return { active, changBblog, changeGuide  };
};

export default ChangeColor;