import React from 'react'
import { Link } from 'react-router-dom'

import { useStore } from "outstated";
import { ShowSearch } from "../store";

const SearchedItem = item => {
    const { showsearch } = useStore(ShowSearch);

    return (
        <Link to={!item.item.type ? `/blog/${item.item.id}`: `/guides/${item.item.id}`}>
            <div className="item" onClick={showsearch}>
                    {item.item.title}
            </div>
        </Link>
    )
}

export default SearchedItem;