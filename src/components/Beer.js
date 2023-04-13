import React from 'react';

const Beer = ({beer, onBeerClicked}) => {

    const handleClick = function() {
        onBeerClicked(beer)
        console.log(beer.name)
    }




    return (
    <>
    <li onClick={handleClick}>{beer["name"]}</li>
    </>

    )

}
 
export default Beer;