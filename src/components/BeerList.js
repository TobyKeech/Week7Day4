import React from "react";
import Beer from "./Beer";
const BeerList = ({beers}) => {

        const beerItem = beers.map((beer, index) => {
            return <Beer beer={beer} key={index} />
        })
    
    return ( 
        <>
        <ul>
           {beerItem}
        </ul>
        </>
     );
}
 
export default BeerList;