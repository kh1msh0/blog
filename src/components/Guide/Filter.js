import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import { useStore } from "outstated";
import { FetchStrings } from "../store";

const Filter = ({ match }) => {
    const { fetchedStrings } = useStore(FetchStrings);



    const [active, setActive] = useState('all');

    const chageActive = (activ) => {
        setActive(activ)
    }

    useEffect(() => {
        const whichIsActive = match.params.id.toUpperCase()
        chageActive(whichIsActive)
    })

    let styles = {
        activelink: {
            color: "#EFAE5E",
            borderBottom: "2px solid #EFAE5E",
        },
        disabledlink: {
            color: "#6A6A6A",
            borderBottom: "5px solid rgba(106, 106, 106, 0)",
        }
    }

    const { all, buy, sell, investment} = fetchedStrings.data.guides
    // console.log( fetchedStrings.data)
    return (
        <Fragment>
            <div className="filter_div">
                <div className="filter">ფილტრი:</div>
                <ul>
                    <Link to="/guide/ALL" >
                        <li onClick={() => chageActive("ALL")} style={active === "ALL" ? styles.activelink : styles.disabledlink}>
                            <p>{all}</p>
                        </li>
                    </Link>
                    <Link to="/guide/BUY">
                        <li onClick={() => chageActive("BUY")} style={active === "BUY" ? styles.activelink : styles.disabledlink}>
                            <p>{buy}</p>
                        </li >
                    </Link >
                    <Link to="/guide/SELL">
                        <li onClick={() => chageActive("SELL")} style={active === "SELL" ? styles.activelink : styles.disabledlink}>
                            <p>{sell}</p>
                        </li>
                    </Link>
                    <Link to="/guide/INVESTMENT">
                        <li onClick={() => chageActive("INVESTMENT")} style={active === "INVESTMENT" ? styles.activelink : styles.disabledlink}>
                            <p>{investment}</p>
                        </li>
                    </Link>
                </ul>
            </div>


        </Fragment>
    )
}
export default Filter; 