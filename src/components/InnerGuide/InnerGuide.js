import React, { Fragment,useState,useEffect } from 'react';
import {GuideFilter} from '../Guide/';
import InnerGuideSection1 from './InnerGuideSection1';
import axios from "axios";


const InnerGuide = ({match}) => {
    const catId = match.params.categori 
    const [items, setItems] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    async function fetchItem() {

        try {
            const response = await axios.get(
                `/api/guides/categories/${catId}`
            );
            setItems(response.data.category); 
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    } 


    useEffect(() => {
        fetchItem();
    }, []);
   console.log(items)

    return (
        <Fragment>
            <InnerGuideSection1 isLoading={isLoading} items={items} />
            <GuideFilter catId={catId} match={match} categoryname={items.title}/>
        </Fragment>

    )
}
export default InnerGuide; 