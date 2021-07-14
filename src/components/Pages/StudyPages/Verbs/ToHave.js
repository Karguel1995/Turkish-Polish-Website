import React, { useContext, useEffect } from 'react'

import '../../../Scss/Verbs.scss'
import {VerbsContext} from '../store/VerbsStore'
import VerbsContainer from './VerbsContainer'



const verbList = [
    {
        pronoun: 'Ja',
        present: 'mam',
        future: 'będę mieć',
        pastMale: 'miałem',
        pastFemale: 'miałam',
    },
    {
        pronoun: 'Ty',
        present: 'masz',
        future: 'będziesz mieć',
        pastMale: 'miałeś',
        pastFemale: 'miałaś',
    },
    {
        pronoun: 'On / Ona',
        present: 'ma',
        future: 'będzie mieć',
        pastMale: 'miał',
        pastFemale: 'miała',
    },
    {
        pronoun: 'My',
        present: 'mamy',
        future: 'będziemy mieć',
        pastMale: 'mieliśmy',
        pastFemale: 'miałyśmy',
    },
    {
        pronoun: 'Wy',
        present: 'macie',
        future: 'będziecie mieć',
        pastMale: 'mieliście',
        pastFemale: 'miałyście',
    },
    {
        pronoun: 'Oni / One',
        present: 'mają',
        future: 'będą mieć',
        pastMale: 'mieli',
        pastFemale: 'miały',
    },
]


const ToDo = () => {
    
    const {selectedVerbList, setSelectedVerbList} = useContext(VerbsContext)
    useEffect(() => {
        setSelectedVerbList(verbList)
    }, )
    return ( 
        <div className="page">
            <h1>To have - mieć</h1>
            <VerbsContainer verbList={selectedVerbList} />
</div>
);
}
 
export default ToDo;

