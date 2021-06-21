import '../../../Scss/Adjectives.scss'

const adjectiveList = [
    {
        id: 1,
        polish: 'dobry',
        english: 'good',
        turkish: 'iyi',
    },
    {
        id: 2,
        polish: 'zły',
        english: 'bad',
        turkish: 'kötü',
    },
    {
        id: 3,
        polish: 'uprzejmy',
        english: 'polite',
        turkish: 'kibar',
    },
    {
        id: 4,
        polish: 'niegrzeczny',
        english: 'rude',
        turkish: 'kaba',
    },
    {
        id: 5,
        polish: 'zabawny',
        english: 'funny',
        turkish: 'komik',
    },
    {
        id: 6,
        polish: 'nudny',
        english: 'boring',
        turkish: 'sıkıcı',
    },
    {
        id: 7,
        polish: 'spokojny',
        english: 'calm',
        turkish: 'sakin',
    },
    {
        id: 8,
        polish: 'agresywny',
        english: 'aggressive',
        turkish: 'agresif',
    },
    {
        id: 9,
        polish: 'pomocny',
        english: 'helpful',
        turkish: 'faydalı',
    },
    {
        id: 10,
        polish: 'wredny',
        english: 'mean',
        turkish: 'anlamına gelmek',
    },
    {
        id: 11,
        polish: 'szalony',
        english: 'crazy',
        turkish: 'çılgın',
    },
    {
        id: 12,
        polish: 'leniwy',
        english: 'lazy',
        turkish: 'tembel',
    },
    {
        id: 13,
        polish: 'odważny',
        english: 'brave',
        turkish: 'cesur',
    },
    {
        id: 14,
        polish: 'pogodny',
        english: 'cheerful',
        turkish: 'neşeli',
    },
    {
        id: 15,
        polish: 'mądry',
        english: 'smart',
        turkish: 'akıllı',
    },
    {
        id: 16,
        polish: 'okrutny',
        english: 'cruel',
        turkish: 'zalim',
    },
    {
        id: 17,
        polish: 'nerwowy',
        english: 'nervous',
        turkish: 'sinirli',
    },
    {
        id: 18,
        polish: 'szczery',
        english: 'honest',
        turkish: 'dürüst',
    },
    {
        id: 19,
        polish: 'pewny siebie',
        english: 'confident',
        turkish: 'kendine güvenen',
    },
    {
        id: 20,
        polish: 'szczery',
        english: 'honest',
        turkish: 'dürüst',
    },
]

const adjectives = adjectiveList.map(verb => (
    <div className="adjectiveContainer">
        <p className="adjectiveElement">{verb.polish}</p>
        <p className="adjectiveElement">{verb.english}</p>
        <p className="adjectiveElement">{verb.turkish}</p>
    </div>
));

const Character = () => {

    
    return ( 
        <div className="page">
            <h1>Character</h1>
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
 
export default Character;