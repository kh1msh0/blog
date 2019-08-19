import React from 'react';
import Navigation from './navbar/Navigation';
import BlogGuide from './Blog-Guide/BlogGuide'


const Header = (props) => {
    return (
        <div>
            <Navigation props={props} />  
            <div style={{width:'100%', height: '100px'}}></div>           
            {/* <BlogGuide/>   */}
        </div>
    )
}
export default Header;