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
})

  return ( 
    <>
      <h1>To be - Być</h1>
      <VerbsContainer verbList={selectedVerbList} />
      <div className="verbExamples">
        <h2 className="heading">Examples:</h2>
        <h3>Present tense</h3>
        <ul>
          <li>Jestem wysoki - I am tall</li>
          <li>Czy jesteś w domu? - Are you at home?</li>
          <li>Jesteśmy w szkole - We are at school</li>
          <li>Jestem z Polski - I am from Poland</li>
          <li>Oni są w Hiszpanii - They are in Spain</li>
          <li>Chcę być silny! - I want to be strong!</li>
          <li>Gdzie jesteś? - Where are you?</li>
          <li>Jestem tutaj - I am here</li>
          <li>Co to jest? - What is that?</li>
          <li>Kim ona jest? - Who is she?</li>
          <li>Owoce są dobre! - Fruits are good!</li>
          <li>Moi rodzice już tu są - My parents are already here</li>
          <li>Jesteśmy szczęśliwą parą - We are a happy couple</li>
          <li>Jesteście najlepsi - You are the best</li>
          <li>Jesteście jeszcze w sklepie? - Are you still in the shop?</li>
          <li>Twój brat jest z nami - Your brother is with us</li>
          <li>Proszę, bądź miły - Please, be kind</li>
          <li>Bądź w domu przed 22 - Be at home before 22</li>
          <li>Nie bądź głupi - Don't be stupid</li>
          <li>Bądźmy szczerzy - Let's (we) be honest</li>
        </ul>

        <h3>Future tense</h3>
        <ul>
          <li>Zaraz będę w domu - I will be home soon</li>
          <li>Dzisiaj będę się uczyć dwie godziny - Today I will study for two hours</li>
          <li>O której będziesz w domu? - What time will you be home?</li>
          <li>Co będziesz pić? - What will you drink? </li>
          <li>To będzie najlepszy rok! - This will be the best year!</li>
          <li>Tego lata Polska będzie mistrzem Świata - This summer, Poland will be the world champion</li>
          <li>Czy będziecie w domu o 13? - Will you (plural) be home by 1pm? </li>
          <li>Oni będą grać na komputerze dziś wieczorem - They will be playing computer games tonight</li>
        </ul>

      </div>
    </>
  );
}
 
export default ToBe;

