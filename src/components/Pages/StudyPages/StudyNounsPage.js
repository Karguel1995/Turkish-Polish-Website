import fruitsAndVegetables from '../../../images/FoodImages/fruitsAndVegetables.jpg'
import animals from '../../../images/AnimalImages/animals.jpg'
import drinks from '../../../images/DrinkImages/drinks.jpg'
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
        name: 'animals',
        path: 'animals',
        url: animals,
    },
    {
        id: 3,
        name: 'drinks',
        path: 'drinks',
        url: drinks,
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