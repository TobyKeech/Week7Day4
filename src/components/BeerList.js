import React from "react";
import Beer from "./Beer";
const BeerList = ({beers, onBeerClicked}) => {

        const beerItem = beers.map((beer, index) => {
            return <Beer beer={beer} key={index} onBeerClicked={onBeerClicked}/>
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