import React, { useContext, useEffect } from 'react'

import '../../../Scss/Verbs.scss'
import {VerbsContext} from '../store/VerbsStore'
import VerbsContainer from './VerbsContainer'



const verbList = [
    {
        pronoun: 'Ja',
        present: 'czytam',
        future: 'będę czytać',
        pastMale: 'czytałem',
        pastFemale: 'czytałam',
    },
    {
        pronoun: 'Ty',
        present: 'czytasz',
        future: 'będziesz czytać',
        pastMale: 'czytełeś',
        pastFemale: 'czytałaś',
    },
    {
        pronoun: 'On / Ona',
        present: 'czyta',
        future: 'będzie czytać',
        pastMale: 'czytał',
        pastFemale: 'czytała',
    },
    {
        pronoun: 'My',
        present: 'czytamy',
        future: 'będziemy czytać',
        pastMale: 'czytaliśmy',
        pastFemale: 'czytałyśmy',
    },
    {
        pronoun: 'Wy',
        present: 'czytacie',
        future: 'będziecie czytać',
        pastMale: 'czytaliście',
        pastFemale: 'czytałyście',
    },
    {
        pronoun: 'Oni / One',
        present: 'czytają',
        future: 'będą czytać',
        pastMale: 'czytali',
        pastFemale: 'czytały',
    },
]


const ToDo = () => {
    
    const {selectedVerbList, setSelectedVerbList} = useContext(VerbsContext)
    useEffect(() => {
        setSelectedVerbList(verbList)
    }, )
    return ( 
        <div className="page">
            <h1>To read - czytać</h1>
            <VerbsContainer verbList={selectedVerbList} />
</div>
);
}
 
export default ToDo;

