import React from 'react';
import { Link } from 'react-router-dom';

import { useStore } from "outstated";
import { FetchStrings, ChangeColor } from "../store";

const BlogGuide = () => {

    const { fetchedStrings } = useStore(FetchStrings);
    const { active, changBblog, changeGuide } = useStore(ChangeColor);


    let styles = {
        activelink: {
            color: "#EFAE5E" ,
            borderBottom: "2px solid #EFAE5E",
        }, 
        disabledlink: {
            color: "#6A6A6A" ,
            borderBottom: "2px solid rgba(106, 106, 106, 0)",
        }
      }

      const {blog, guide} = fetchedStrings.data
    return (
        <ul className="blog_guide" >
            <Link to="/">
                <li onClick={changBblog} style={active === "/" ? styles.activelink : styles.disabledlink } >
                    <div>
                        {blog}
                    </div>
                </li>
            </Link>
            <Link to="/guide/all">
                <li onClick={changeGuide} style={active === "/guide/all" ? styles.activelink : styles.disabledlink } >
                    <div>
                        {guide}
                    </div>
                </li>
            </Link>
        </ul>
    )
}
export default BlogGuide;