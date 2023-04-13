const BeerDetail = ({beer}) => {
    return (  
        <>
        <div><b>This beer is called {beer.name}</b></div>
        <div>{beer.tagline}</div>
        <div>{beer.description}</div>
        </>
    );
}
 
export default BeerDetail;