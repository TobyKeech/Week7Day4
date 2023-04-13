import React, { useState, useEffect } from 'react';
import BeerDetail from '../components/BeerDetail';

import BeerList from "../components/BeerList";

const BeerContainer = () => {
    const [beers, setBeers] = useState([]);
    const [clickedBeer, setClickedBeer] = useState(null);
    const [faveBeers, setFaveBeers] = useState([]);

    useEffect(() => {
        getBeers();
    }, [])

    const getBeers = function() {
        fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(beers => setBeers(beers))
        // can also be done like these as they are objects .then(chartSongs => setChartSongs(chartSongs.feed.entry))
        .then(beers => console.log(beers))
    }

    const onBeerClicked = function (beer) {
        setClickedBeer(beer)

    
    const addToFaves = (beer) => {
        setFaveBeers([...faveBeers, beer])
    }

    }

    return (
        <>
        <div>
            <h2>BeerList</h2>
            <BeerList beers = {beers} onBeerClicked = {onBeerClicked} />
                {clickedBeer ? <BeerDetail beer={clickedBeer}/> : null}
            
        </div>
           
        </>


    );
}

export default BeerContainer;

 {/* if clickedBeer is truthy then render the BeerDetail component  */}
                    {/* else render null */}