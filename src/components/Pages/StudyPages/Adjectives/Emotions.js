import '../../../Scss/Adjectives.scss'

const adjectiveList = [
    {
        id: 1,
        polish: 'smutny',
        english: 'sad',
        turkish: 'üzgün ',
    },
    {
        id: 2,
        polish: 'szczęśliwy',
        english: 'happy',
        turkish: 'mutlu',
    },

]

const adjectives = adjectiveList.map(verb => (
    <div className="adjectiveContainer">
        <p className="adjectiveElement">{verb.polish}</p>
        <p className="adjectiveElement">{verb.english}</p>
        <p className="adjectiveElement">{verb.turkish}</p>
    </div>
));

const Emotions = () => {

    
    return ( 
        <div className="page">
            <h1>Emotions</h1>
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
 
export default Emotions;