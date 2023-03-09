const Counter = ({title, count, price, rating, onButtonClick}) => {


    // const handleCakeSaleClick = () => {
    //     onButtonClick (allCakesCount + 1);
    // } - attempt at extension to add the 'Sell Cake' button


    return(
        <>
        <hr/>
         <h3>{title}</h3>
         <p>Ingredients: {count}</p>
         <p>Price: {price}</p>
         <p>Rating: {rating}</p>
         {/* <button onClick={handleCakeSaleClick}>Sell Cake</button> */}
        </>
    );
}

export default Counter;