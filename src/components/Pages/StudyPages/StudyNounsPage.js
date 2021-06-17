import food from '../../../images/FoodImages/food.jpg'
import animals from '../../../images/AnimalImages/animals.jpg'

const nounList = [
    {
        id: 1,
        name: 'food',
        path: 'food',
        url: food,
    },
    {
        id: 2,
        name: 'animals',
        path: 'animals',
        url: animals,
    },
]

const nouns = nounList.map(noun => (
    <div className="wordsSection">
        <div className="pictureContainer">
            <img src={noun.url} alt={noun.name} />
            <div className="word">
                <p>{noun.name}</p>
            </div>
        </div>
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