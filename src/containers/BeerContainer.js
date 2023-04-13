import React, { useState, useEffect } from 'react';

import BeerList from "../components/BeerList";

const BeerContainer = () => {
    const [beers, setBeers] = useState([]);

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


    return (
        <>
            <h2>BeerList</h2>
            <BeerList beers = {beers} />
        </>


    );
}

export default BeerContainer;