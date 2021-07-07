import '../Scss/Study.scss'
import { NavLink, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import StudyHomePage from './StudyPages/StudyHomePage'
import StudyNounsPage from './StudyPages/StudyNounsPage'
import StudyVerbsPage from './StudyPages/StudyVerbsPage'
import StudyAdjectivesPage from './StudyPages/StudyAdjectivesPage'
import Lessons from './StudyPages/Lessons'

const Study = () => {
  const [activeStudyClass, setActiveStudyClass] = useState(false)
  const handleStudyBarClick = () => {
      setActiveStudyClass(!activeStudyClass);
    }

    return ( 
        <>
        <i className="fas fa-arrow-circle-down" onClick={handleStudyBarClick}></i>
    <div className={`studyNavigation ${activeStudyClass ? 'studyNavActive' : ''}`}>
        <ul>
            <li>
                <NavLink to="/study/nouns" onClick={handleStudyBarClick}>nouns</NavLink>
            </li>
            <li>
                <NavLink to="/study/verbs" onClick={handleStudyBarClick}>verbs</NavLink>
            </li>
            <li>
                <NavLink to="/study/adjectives" onClick={handleStudyBarClick}>adjectives</NavLink>
            </li>
            <li>
                <NavLink to="/study/lessons" onClick={handleStudyBarClick}>lessons</NavLink>
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
    </Switch> 
    </>

    );
}
 
export default Study;