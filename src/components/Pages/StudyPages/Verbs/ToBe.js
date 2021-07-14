import React, { useContext, useEffect } from 'react'

import '../../../Scss/Verbs.scss'
import {VerbsContext} from '../store/VerbsStore'
import VerbsContainer from './VerbsContainer'



const verbList = [
    {
        pronoun: 'Ja',
        present: 'jestem',
        future: 'będę',
        pastMale: 'byłem',
        pastFemale: 'byłam',
    },
    {
        pronoun: 'Ty',
        present: 'jesteś',
        future: 'będziesz',
        pastMale: 'byłeś',
        pastFemale: 'byłaś',
    },
    {
        pronoun: 'On / Ona',
        present: 'jest',
        future: 'będzie',
        pastMale: 'był',
        pastFemale: 'była',
    },
    {
        pronoun: 'My',
        present: 'jesteśmy',
        future: 'będziemy',
        pastMale: 'byliśmy',
        pastFemale: 'byłyśmy',
    },
    {
        pronoun: 'Wy',
        present: 'jesteście',
        future: 'będziecie',
        pastMale: 'byliście',
        pastFemale: 'byłyście',
    },
    {
        pronoun: 'Oni / One',
        present: 'są',
        future: 'będą',
        pastMale: 'byli',
        pastFemale: 'były',
    },
]

const ToBe = () => {

    const {selectedVerbList, setSelectedVerbList} = useContext(VerbsContext)

    useEffect(() => {
    setSelectedVerbList(verbList)
}, )

    return ( 
        <div className="page">
            <h1>To be - Być</h1>
            <VerbsContainer verbList={selectedVerbList} />

<h2 className="heading">Examples:</h2>
<h3>Present tense</h3>
<p className="text">1. Jestem wysoki - I am tall</p>
<p className="text">2. Czy jesteś w domu? - Are you at home?</p>
<p className="text">3. Jesteśmy w szkole - We are at school</p>
<p className="text">4. Jestem z Polski - I am from Poland</p>
<p className="text">5. Oni są w Hiszpanii - They are in Spain</p>
<p className="text">6. Chcę być silny! - I want to be strong!</p>
<p className="text">7. Gdzie jesteś? - Where are you?</p>
<p className="text">8. Jestem tutaj - I am here</p>
<p className="text">9. Co to jest? - What is that?</p>
<p className="text">10. Kim ona jest? - Who is she?</p>
<p className="text">11. Owoce są dobre! - Fruits are good!</p>
<p className="text">12. Moi rodzice już tu są - My parents are already here</p>
<p className="text">13. Jesteśmy szczęśliwą parą - We are a happy couple</p>
<p className="text">14. Jesteście najlepsi - You are the best</p>
<p className="text">15. Jesteście jeszcze w sklepie? - Are you still in the shop?</p>
<p className="text">16. Twój brat jest z nami - Your brother is with us</p>

<p className="text">17. Proszę, bądź miły - Please, be kind</p>
<p className="text">18. Bądź w domu przed 22 - Be at home before 22</p>
<p className="text">19. Nie bądź głupi - Don't be stupid</p>
<p className="text">20. Bądźmy szczerzy - Let's be honest</p>
<h3>Future tense</h3>
<p className="text">1. Zaraz będę w domu - I will be home soon</p>
<p className="text">2. Dzisiaj będę się uczyć dwie godziny - Today I will study for two hours</p>
<p className="text">3. O której będziesz w domu? - What time will you be home?</p>
<p className="text">4. Co będziesz pić? - What will you drink? </p>
<p className="text">5. To będzie najlepszy rok! - This will be the best year!</p>
<p className="text">6. Tego lata Polska będzie mistrzem Świata - This summer, Poland will be the world champion</p>
<p className="text"></p>

        </div>
     );
}
 
export default ToBe;

