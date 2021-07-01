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
        turkish: 'aşağılık/adi',
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
        turkish: 'zeki',
    },
    {
        id: 16,
        polish: 'głupi',
        english: 'stupid ',
        turkish: 'aptal '
    },
    {
        id: 17,
        polish: 'okrutny',
        english: 'cruel',
        turkish: 'zalim',
    },
    {
        id: 18,
        polish: 'nerwowy',
        english: 'nervous',
        turkish: 'endişeli',
    },
    {
        id: 19,
        polish: 'szczery',
        english: 'honest',
        turkish: 'dürüst',
    },
    {
        id: 20,
        polish: 'pewny siebie',
        english: 'confident',
        turkish: 'kendine güvenen',
    },
    {
        id: 29,
        polish: 'poważny',
        english: 'serious',
        turkish: 'ciddi',
    },
    {
        id: 30,
        polish: 'niezawodny',
        english: 'reliable',
        turkish: 'güvenilir',
    },
    {
        id: 31,
        polish: 'rozmowny',
        english: 'talkative',
        turkish: 'konuşkan '
    },
    {
        id: 32,
        polish: 'przyjazny',
        english: 'friendly ',
        turkish: 'arkadaş canlısı ',
    },
    {
        id: 33,
        polish: 'skromny',
        english: 'modest ',
        turkish: 'mütevazi '
    },
    {
        id: 34,
        polish: 'wrażliwy',
        english: 'sensitive',
        turkish: 'duygusal',
    },
    {
        id: 35,
        polish: 'wyluzowany',
        english: 'easygoing',
        turkish: 'geçinmesi kolay',
    },
    {
        id: 36,
        polish: 'delikatny',
        english: 'gentle',
        turkish: 'nazik'
    },
    {
        id: 37,
        polish: 'towarzyski',
        english: 'outgoing',
        turkish: 'girişken',
    },
    {
        id: 38,
        polish: 'zdyscyplinowany',
        english: 'disciplined',
        turkish: 'disiplinli'
    },
    {
        id: 39,
        polish: 'nieśmiały',
        english: 'shy',
        turkish: 'utangaç',
    },
    {
        id: 40,
        polish: 'wierny',
        english: 'Faithful ',
        turkish: 'Sadık '
    },
    {
        id: 41,
        polish: 'samolubny',
        english: 'selfish',
        turkish: 'bencil',
    },
    {
        id: 42,
        polish: 'uparty',
        english: 'Stubborn',
        turkish: 'İnatçı'
    },
    {
        id: 43,
        polish: 'zapominalski',
        english: 'forgetful ',
        turkish: 'unutkan ',
    },
    {
        id: 44,
        polish: 'zazdrosny',
        english: 'jealous',
        turkish: 'kıskanç',
    },
    {
        id: 45,
        polish: 'natrętny',
        english: 'obsessive',
        turkish: 'takıntılı ',
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