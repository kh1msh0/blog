import React from 'react';
import Navigation from './navbar/Navigation';
import BlogGuide from './Blog-Guide/BlogGuide'


const Header = (props) => {
    return (
        <div>
            <Navigation props={props} />  
            
            <BlogGuide/>  
        </div>
    )
}
export default Header;