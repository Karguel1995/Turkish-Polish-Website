import '../../../Scss/Adjectives.scss'

const adjectiveList = [
  {
    id: 1,
    polish: 'czerwony',
    english: 'red',
    turkish: 'kırmızı',
  },
  {
    id: 2,
    polish: 'niebieski',
    english: 'blue',
    turkish: 'mavi'
  },
  {
    id: 3,
    polish: 'zielony ',
    english: 'green',
    turkish: 'yeşil',
  },
  {
    id: 4,
    polish: 'żółty',
    english: 'yellow',
    turkish: 'sarı'
  },
  {
    id: 5,
    polish: 'różowy',
    english: 'pink',
    turkish: 'pembe',
  },
  {
    id: 6,
    polish: 'purpurowy',
    english: 'purple',
    turkish: 'mor'
  },
  {
    id: 7,
    polish: 'czarny',
    english: 'black',
    turkish: 'siyah',
  },
  {
    id: 8,
    polish: 'brązowy',
    english: 'brown',
    turkish: 'kahverengi'
  },
  {
    id: 9,
    polish: 'pomarańczowy',
    english: 'orange',
    turkish: 'turuncu',
  },
  {
    id: 10,
    polish: 'biały',
    english: 'white',
    turkish: 'beyaz'
  },
  {
    id: 11,
    polish: 'szary',
    english: 'gray',
    turkish: 'gri',
  },
  {
    id: 12,
    polish: 'ciemny niebieski',
    english: 'dark blue',
    turkish: 'koyu mavi'
  },
  {
    id: 13,
    polish: 'beżowy',
    english: 'beige',
    turkish: 'bej',
  },
  {
    id: 14,
    polish: 'jasny',
    english: 'light',
    turkish: 'açık'
  },
  {
    id: 15,
    polish: 'ciemny',
    english: 'dark',
    turkish: 'koyu',
  },
  {
    id: 16,
    polish: 'piwny',
    english: 'hazel',
    turkish: 'ela'
  },
  {
    id: 17,
    polish: 'złoty',
    english: 'golden',
    turkish: 'altın rengi'
  },
  {
    id: 16,
    polish: 'srebrny',
    english: 'silver',
    turkish: 'gümüş rengi'
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
      <h1>Colors</h1>
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