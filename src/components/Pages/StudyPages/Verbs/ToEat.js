import React, { useContext, useEffect } from 'react'

import '../../../Scss/Verbs.scss'
import {VerbsContext} from '../store/VerbsStore'
import VerbsContainer from './VerbsContainer'



const verbList = [
    {
        pronoun: 'Ja',
        present: 'jem',
        future: 'będę jeść',
        pastMale: 'jadłem',
        pastFemale: 'jadłam',
    },
    {
        pronoun: 'Ty',
        present: 'jesz',
        future: 'będziesz jeść',
        pastMale: 'jadłeś',
        pastFemale: 'jadłaś',
    },
    {
        pronoun: 'On / Ona',
        present: 'je',
        future: 'będzie jeść',
        pastMale: 'jadł',
        pastFemale: 'jadła',
    },
    {
        pronoun: 'My',
        present: 'jemy',
        future: 'będziemy jeść',
        pastMale: 'jedliśmy',
        pastFemale: 'jadłyśmy',
    },
    {
        pronoun: 'Wy',
        present: 'jecie',
        future: 'będziecie jeśćć',
        pastMale: 'jedliście',
        pastFemale: 'jadłyście',
    },
    {
        pronoun: 'Oni / One',
        present: 'jedzą',
        future: 'będą jeść',
        pastMale: 'jedli',
        pastFemale: 'jadły',
    },
]


const ToDo = () => {
    
    const {selectedVerbList, setSelectedVerbList} = useContext(VerbsContext)
    useEffect(() => {
        setSelectedVerbList(verbList)
    }, )
    return ( 
        <div className="page">
            <h1>To eat - Jeść</h1>
            <VerbsContainer verbList={selectedVerbList} />
</div>
);
}
 
export default ToDo;

