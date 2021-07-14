import React, { useContext, useEffect } from 'react'

import '../../../Scss/Verbs.scss'
import {VerbsContext} from '../store/VerbsStore'
import VerbsContainer from './VerbsContainer'



const verbList = [
    {
        pronoun: 'Ja',
        present: 'piję',
        future: 'będę pić',
        pastMale: 'piłem',
        pastFemale: 'piłam',
    },
    {
        pronoun: 'Ty',
        present: 'pijesz',
        future: 'będziesz pić',
        pastMale: 'piłeś',
        pastFemale: 'piłaś',
    },
    {
        pronoun: 'On / Ona',
        present: 'pije',
        future: 'będzie pić',
        pastMale: 'pił',
        pastFemale: 'piła',
    },
    {
        pronoun: 'My',
        present: 'pijemy',
        future: 'będziemy pić',
        pastMale: 'piliśmy',
        pastFemale: 'piłyśmy',
    },
    {
        pronoun: 'Wy',
        present: 'pijecie',
        future: 'będziecie pić',
        pastMale: 'piliście',
        pastFemale: 'piłyście',
    },
    {
        pronoun: 'Oni / One',
        present: 'piją',
        future: 'będą pić',
        pastMale: 'pili',
        pastFemale: 'piły',
    },
]


const ToDrink = () => {
    
    const {selectedVerbList, setSelectedVerbList} = useContext(VerbsContext)
    useEffect(() => {
        setSelectedVerbList(verbList)
    }, )
    return ( 
        <div className="page">
            <h1>To drink - Pić</h1>
            <VerbsContainer verbList={selectedVerbList} />
</div>
);
}
 
export default ToDrink;

