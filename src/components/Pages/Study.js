import '../Scss/Study.scss'
import { NavLink, Switch, Route } from 'react-router-dom';
import StudyHomePage from './StudyPages/StudyHomePage'
import StudyNounsPage from './StudyPages/StudyNounsPage'
import StudyVerbsPage from './StudyPages/StudyVerbsPage'
import StudyAdjectivesPage from './StudyPages/StudyAdjectivesPage'
import Lessons from './StudyPages/Lessons'

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
              <Route path="/study" exact>
                <StudyHomePage/>
              </Route>
              <Route path="/study/nouns" exact>
                <StudyNounsPage/>
              </Route>
              <Route path="/study/verbs" exact>
                <StudyVerbsPage/>
              </Route>
              <Route path="/study/adjectives" exact>
                <StudyAdjectivesPage/>
              </Route>
              <Route path="/study/lessons" exact>
                <Lessons/>
              </Route>
    </Switch> 
    </>

    );
}
 
export default Study;