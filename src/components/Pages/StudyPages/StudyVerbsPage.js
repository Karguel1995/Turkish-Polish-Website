import { Link } from "react-router-dom";

const verbList = [
    {
        id: 1,
        polish: 'być',
        english: 'to be',
        url: 'tobe',
        func: 'ToBe',
    },
    {
        id: 2,
        polish: 'mieć',
        english: 'to have',
        url: 'have',
        func: 'ToHave',
    },
    {
        id: 3,
        polish: 'jeść',
        english: 'to eat',
        url: 'eat',
        func: 'ToEat',
    },
    {
        id: 4,
        polish: 'pić',
        english: 'to drink',
        url: 'drink',
        func: 'ToDrink',
    },
    {
        id: 5,
        polish: 'robić',
        english: 'to do',
        url: 'do',
        func: 'ToDo',
    },
    {
        id: 6,
        polish: 'czytać',
        english: 'to read',
        url: 'read',
        func: 'ToRead',
    },
]



const verbs = verbList.map(verb => (
    <div className="verbContainer">
        <Link 
        to={`/study/${verb.url}`} 
        className="verbElement">
            {verb.english} - {verb.polish}
        </Link>
    </div>
));

const StudyVerbsPage = () => {
    return ( 
        <div className="page">
            <h1>
                Verbs
            </h1>
            <div className="containerForVerbs">
                {verbs}  
            </div>
        </div>
     );
}
 
export default StudyVerbsPage; 