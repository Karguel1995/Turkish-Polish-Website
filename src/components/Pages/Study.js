import '../Scss/Study.scss'
import { NavLink, Switch, Route } from 'react-router-dom';
import StudyHomePage from './StudyPages/StudyHomePage'
import StudyNounsPage from './StudyPages/StudyNounsPage'
import StudyVerbsPage from './StudyPages/StudyVerbsPage'
import StudyAdjectivesPage from './StudyPages/StudyAdjectivesPage'
import Lessons from './StudyPages/Lessons'

import Animals from './StudyPages/Nouns/Animals'
import FruitsAndVegetables from './StudyPages/Nouns/FruitsAndVegetables'
import Drinks from './StudyPages/Nouns/Drinks'
import BasicFood from './StudyPages/Nouns/BasicFood'


import ToBe from './StudyPages/Verbs/ToBe'
import ToHave from './StudyPages/Verbs/ToHave'
import ToEat from './StudyPages/Verbs/ToEat'
import ToDrink from './StudyPages/Verbs/ToDrink';
import ToDo from './StudyPages/Verbs/ToDo';
import ToRead from './StudyPages/Verbs/ToRead';

import Character from './StudyPages/Adjectives/Character';
import Emotions from './StudyPages/Adjectives/Emotions'
import Appearance from './StudyPages/Adjectives/Appearance';

// import PolishLessons from './StudyPages/PolishLessons';


function Paths() {
  return (
  <>
    <Route path="/study/animals">
      <Animals/>
    </Route>
    <Route path="/study/fruitsAndVegetables">
      <FruitsAndVegetables/>
    </Route>
    <Route path="/study/drinks">
      <Drinks/>
    </Route>
    <Route path="/study/basicFood">
      <BasicFood/>
    </Route>

    <Route path="/study/tobe">
      <ToBe />
    </Route>
    <Route path="/study/have">
      <ToHave />
    </Route>
    <Route path="/study/eat">
      <ToEat />
    </Route>
    <Route path="/study/drink">
      <ToDrink />
    </Route>
    <Route path="/study/do">
      <ToDo />
    </Route>
    <Route path="/study/read">
      <ToRead />
    </Route>

    <Route path="/study/character">
      <Character />
    </Route>
    <Route path="/study/emotions">
      <Emotions />
    </Route>
    <Route path="/study/appearance">
      <Appearance />
    </Route>
  </>
  )
}

const Study = () => {
    return ( 
        <>
    <div className="studyNavigation">
        <ul>
            <li>
                <NavLink to="/study/nouns">nouns</NavLink>
            </li>
            <li>
                <NavLink to="/study/verbs">verbs</NavLink>
            </li>
            <li>
                <NavLink to="/study/adjectives">adjectives</NavLink>
            </li>
            <li>
                <NavLink to="/study/lessons">lessons</NavLink>
            </li>
        </ul>
    </div>
    <Switch>
              <Route path="/study/" exact>
                <StudyHomePage/>
              </Route>
              <Route path="/study/nouns">
                <StudyNounsPage/>
              </Route>
              <Route path="/study/verbs">
                <StudyVerbsPage/>
              </Route>
              <Route path="/study/adjectives">
                <StudyAdjectivesPage/>
              </Route>
              <Route path="/study/lessons">
                <Lessons/>
              </Route>
              <Paths />
    </Switch> 
    </>

    );
}
 
export default Study;