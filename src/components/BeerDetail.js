const BeerDetail = ({beer, addToFaves}) => {
    return (  
        <>
        <div><b>This beer is called {beer.name}</b></div>
        <div>{beer.tagline}</div>
        <div>{beer.description}</div>
        <button onClick={() => addToFaves(beer)}> Add to faves</button>
        </>
    );
}
 
export default BeerDetail;