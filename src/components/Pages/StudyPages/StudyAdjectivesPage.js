import character from '../../../images/Adjectives/character.jpg'
import emotions from '../../../images/Adjectives/emotions.jpg'
import appearance from '../../../images/Adjectives/appearance.jpg'
import colors from '../../../images/Adjectives/colors.jpg'


import {Link} from 'react-router-dom'

const adjectiveList = [
    {
        id: 1,
        name: 'character',
        path: 'character',
        url: character,
    },
    {
        id: 2,
        name: 'emotions',
        path: 'emotions',
        url: emotions,
    },
    {
        id: 3,
        name: 'appearance',
        path: 'appearance',
        url: appearance,
    },
    {
        id: 3,
        name: 'colors',
        path: 'colors',
        url: colors,
    },
]

const adjectives = adjectiveList.map(adjective => (
    <div key={adjective.id} className="wordsSection">
        <Link to={`/study/${adjective.path}`} className="pictureContainer">
            <img className="imgForSection"src={adjective.url} alt={adjective.name} />
            <div className="word">
                <p>{adjective.name}</p>
            </div>
        </Link>
    </div>
));

const StudyAdjectivesPage = () => {
    return ( 
        <div className="page">
            <h1>
                Adjectives
            </h1>
            <div className="wordsContainer">
                {adjectives}
            </div>
    </div>
     );
}
export default StudyAdjectivesPage; 