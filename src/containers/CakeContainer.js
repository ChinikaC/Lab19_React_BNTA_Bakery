import { useState } from "react";
import Counter from "../components/Counter";

const CakeContainer = () => {

    const [victoriaSpongeCount, setVictoriaSpongeCount] = useState("Eggs, butter, sugar, self-raising flour, baking powder, milk");
    const [teaLoafCount, setTeaLoafCount] = useState("Eggs, oil, dried fruit, sugar, self-raising flour, strong tea");
    const [carrotCakeCount, setCarrotCakeCount] = useState("Carrots, walnuts, oil, cream cheese, flour, sugar");
    // const [allCakesCount, setAllCakesCount] = useState (0); - attempt at extension to add the 'Sell Cake' button

return(
    <>
    <h2>Cakes for Sale:</h2>
    <Counter title={"Victoria Sponge Cake"} count={victoriaSpongeCount} price={5} rating={5}/>
    {/* onButtonClick={setAllCakesCount}/> - attempt at extension to add the 'Sell Cake' button */}
    <Counter title={"Tea Loaf Cake"} count={teaLoafCount} price={2} rating={3} />
    {/* onButtonClick={setTeaLoafCount} cakesSold2={0}/> */}
    <Counter title={"Carrot Cake"} count={carrotCakeCount} price={8} rating={5}/>
    {/* onButtonClick={cakesSold3} cakesSold3={0}/> */}
    <hr/>
    <p>Average Rating of All Cakes: 4.3</p>
    </>
)


}

export default CakeContainer;