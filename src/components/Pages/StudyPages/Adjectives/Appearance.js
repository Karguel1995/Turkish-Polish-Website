import '../../../Scss/Adjectives.scss'

const adjectiveList = [
    {
        id: 1,
        polish: 'wysoki',
        english: 'tall',
        turkish: 'uzun boylu',
    },
]

const adjectives = adjectiveList.map(verb => (
    <div className="adjectiveContainer">
        <p className="adjectiveElement">{verb.polish}</p>
        <p className="adjectiveElement">{verb.english}</p>
        <p className="adjectiveElement">{verb.turkish}</p>
    </div>
));

const Appearance = () => {

    
    return ( 
        <div className="page">
            <h1>Appearance</h1>
            <div className="containerForAdjectives">
            <div className="adjectiveMainContainer">
                <p className="adjectiveElement">Polish</p>
                <p className="adjectiveElement">English</p>
                <p className="adjectiveElement">Turkish</p>
            </div>
                {adjectives}
            </div>
        </div>
     );
}
 
export default Appearance;