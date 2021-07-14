import React, { useContext, useEffect } from 'react'

import '../../../Scss/Verbs.scss'
import {VerbsContext} from '../store/VerbsStore'
import VerbsContainer from './VerbsContainer'



const verbList = [
    {
        pronoun: 'Ja',
        present: 'robię',
        future: 'będę robić',
        pastMale: 'robiłem',
        pastFemale: 'robiłam',
    },
    {
        pronoun: 'Ty',
        present: 'robisz',
        future: 'będziesz robić',
        pastMale: 'robiłeś',
        pastFemale: 'robiłaś',
    },
    {
        pronoun: 'On / Ona',
        present: 'robi',
        future: 'będzie robić',
        pastMale: 'robił',
        pastFemale: 'robiła',
    },
    {
        pronoun: 'My',
        present: 'robimy',
        future: 'będziemy robić',
        pastMale: 'robiliśmy',
        pastFemale: 'robiłyśmy',
    },
    {
        pronoun: 'Wy',
        present: 'robicie',
        future: 'będziecie robić',
        pastMale: 'robiliście',
        pastFemale: 'robiłyście',
    },
    {
        pronoun: 'Oni / One',
        present: 'robią',
        future: 'będą robić',
        pastMale: 'robili',
        pastFemale: 'robiły',
    },
]


const ToDo = () => {
    
    const {selectedVerbList, setSelectedVerbList} = useContext(VerbsContext)
    useEffect(() => {
        setSelectedVerbList(verbList)
    }, )
    return ( 
        <div className="page">
            <h1>To do - Robić</h1>
            <VerbsContainer verbList={selectedVerbList} />
</div>
);
}
 
export default ToDo;

