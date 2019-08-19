import React, { useState, Fragment } from 'react';
import { MdClose } from 'react-icons/md';
import { SearchedItem } from '../search'
import { Container } from 'react-bootstrap';
import axios from 'axios';

import { useStore } from "outstated";
import { ShowSearch } from "../store";

const OverlaySearch = () => {
    const { showsearch, search } = useStore(ShowSearch);
    const [items, setItems] = useState({});
    const [isLoading, setIsLoading] = useState(true);



    const searchItem = (e) => {
        const title = e.target.value
        console.log(title)
        axios.post('/api/search', {
            key: title
        }) 
            .then(function (response) {
                // console.log(response.data);
                setItems(response.data)
                setIsLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const enter = (e) => {
        const value = e.target.value

        if (e.key === 'Enter' && !(/^ *$/.test(value))) {
            window.location = `/search/${value}`;
          }
    }

    return (
        <Fragment>
            <div className="search_div" style={!search ? { display: "none" } : { display: "" }}>
                <div className="exit" ><MdClose onClick={showsearch} /></div>
                <Container className="search_input">
                    <div style={{width:"100%"}}>
                        <input onKeyUp={searchItem} onKeyDown={enter} placeholder="What are you searching?" />
                    </div>
                    <div className="searched_items" >
                        {isLoading ? '' : items.guides.map(item => (
                            <SearchedItem key={item.id} item={item} />
                        ))}
                        {isLoading ? '' : items.blogs.map(item => (
                            <SearchedItem key={item.id} item={item} />
                        ))}
                    </div>
                </Container>

            </div>
        </Fragment>
    )
}

export default OverlaySearch;