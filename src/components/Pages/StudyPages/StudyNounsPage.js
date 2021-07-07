import fruitsAndVegetables from '../../../images/FruitsAndVegetables/fruitsAndVegetables.jpg'
import animals from '../../../images/AnimalImages/animals.jpg'
import drinks from '../../../images/DrinkImages/drinks.jpg'
import basicFood from '../../../images/BasicFoodImages/basicFood.jpg'
import spicesHerbs from '../../../images/BasicFoodImages/spices.jpg'
import { Link, Switch, Route } from "react-router-dom";

import Animals from './Nouns/Animals'
import FruitsAndVegetables from './Nouns/FruitsAndVegetables'
import Drinks from './Nouns/Drinks'
import BasicFood from './Nouns/BasicFood'
import SpicesHerbs from './Nouns/SpicesHerbs'

const nounList = [
    {
        id: 1,
        name: 'Fruits and Vegetables',
        path: 'fruitsAndVegetables',
        url: fruitsAndVegetables,
    },
    {
        id: 2,
        name: 'Basic food',
        path: 'basicFood',
        url: basicFood,
    },
    {
        id: 3,
        name: 'Spices & Herbs',
        path: 'spicesHerbs',
        url: spicesHerbs,
    },
    {
        id: 4,
        name: 'drinks',
        path: 'drinks',
        url: drinks,
    },

    {
        id: 7,
        name: 'animals',
        path: 'animals',
        url: animals,
    },
]

const NounsHeader = function () {
    return (
    <>
        <h1>
            Nouns
        </h1>
        <div className="wordsContainer">
            {nouns}
        </div>
    </>
    )
}

const nouns = nounList.map(noun => (
    <div key={noun.id} className="wordsSection">
        <Link to={`/study/nouns/${noun.path}`} className="pictureContainer">
            <img className="imgForSection"src={noun.url} alt={noun.name} />
            <div className="word">
                <p>{noun.name}</p>
            </div>
        </Link>
    </div>
));

const StudyNounsPage = () => {
    return ( 
        <div className="page">
            <Switch>
                <Route path="/study/nouns" exact>
                    <NounsHeader />
                </Route>
                <Route path="/study/nouns/animals">
                    <Animals/>
                </Route>
                <Route path="/study/nouns/fruitsAndVegetables">
                    <FruitsAndVegetables/>
                </Route>
                <Route path="/study/nouns/drinks">
                    <Drinks/>
                </Route>
                <Route path="/study/nouns/basicFood">
                    <BasicFood/>
                </Route>
                <Route path="/study/nouns/spicesHerbs">
                    <SpicesHerbs/>
                </Route>
                
            </Switch>
    </div>
     );
}
 
export default StudyNounsPage;