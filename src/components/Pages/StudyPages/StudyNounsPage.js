import fruitsAndVegetables from '../../../images/FruitsAndVegetables/fruitsAndVegetables.jpg'
import animals from '../../../images/AnimalImages/animals.jpg'
import drinks from '../../../images/DrinkImages/drinks.jpg'
import basicFood from '../../../images/BasicFoodImages/basicFood.jpg'
import {Link} from 'react-router-dom'

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

const nouns = nounList.map(noun => (
    <div key={noun.id} className="wordsSection">
        <Link to={`/study/${noun.path}`} className="pictureContainer">
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
            <h1>
                Nouns
            </h1>
            <div className="wordsContainer">
                {nouns}
            </div>
    </div>
     );
}
 
export default StudyNounsPage;