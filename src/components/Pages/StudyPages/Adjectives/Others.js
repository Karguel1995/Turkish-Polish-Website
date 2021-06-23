import '../../../Scss/Adjectives.scss'

const adjectiveList = [
    {
        id: 1,
        polish: ' ',
        english: ' fast',
        turkish: 'hızlı ',
    },
    {
        id: 2,
        polish: ' ',
        english: ' slow',
        turkish: ' yavaş'
    },
    {
        id: 3,
        polish: ' ',
        english: ' young',
        turkish: ' genç',
    },
    {
        id: 4,
        polish: ' ',
        english: 'old ',
        turkish: ' yaşlı'
    },
    {
        id: 5,
        polish: ' ',
        english: ' expensive',
        turkish: ' pahalı',
    },
    {
        id: 6,
        polish: ' ',
        english: 'cheap ',
        turkish: ' ucuz'
    },
    {
        id: 7,
        polish: ' ',
        english: 'difficult ',
        turkish: 'zor '
    },
    {
        id: 8,
        polish: ' ',
        english: ' easy',
        turkish: 'kolay ',
    },
    {
        id: 9,
        polish: ' ',
        english: 'dirty ',
        turkish: ' kirli'
    },
    {
        id: 10,
        polish: ' ',
        english: ' clean',
        turkish: ' temiz',
    },
    {
        id: 11,
        polish: ' ',
        english: ' empty',
        turkish: ' boş'
    },
    {
        id: 12,
        polish: ' ',
        english: ' full',
        turkish: 'dolu '
    },

]

const adjectives = adjectiveList.map(verb => (
    <div className="adjectiveContainer">
        <p className="adjectiveElement">{verb.polish}</p>
        <p className="adjectiveElement">{verb.english}</p>
        <p className="adjectiveElement">{verb.turkish}</p>
    </div>
));

const OtherAdjectives = () => {

    
    return ( 
        <div className="page">
            <h1>Other Adjectives</h1>
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
 
export default OtherAdjectives;