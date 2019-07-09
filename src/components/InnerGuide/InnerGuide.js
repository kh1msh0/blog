import React, { Fragment,useState,useEffect } from 'react';
import {GuideFilter} from '../Guide/';
import InnerGuideSection1 from './InnerGuideSection1';
import axios from "axios";

// import { useStore } from "outstated";
// import { FetchStrings } from "../store";

const InnerGuide = ({match}) => {
  
    const catId = match.params.categori 

    // const { stringLanguage } = useStore(FetchStrings);
    const [items, setItems] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    async function fetchItem() {

        try {
            const response = await axios.get(
                `http://178.128.21.17/api/guides/categories/${catId}?lang=ka`
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
   

    return (
        <Fragment>
            <InnerGuideSection1 isLoading={isLoading} items={items} />
            <GuideFilter catId={catId} match={match} categoryname={items.title}/>
        </Fragment>

    )
}
export default InnerGuide; 