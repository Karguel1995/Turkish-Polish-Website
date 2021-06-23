import { Link, Switch, Route } from 'react-router-dom';

import PolishLessons from './PolishLessons';
import TurkishLessons from './TurkishLessons';

import polishFlag from '../../../images/polishFlag.jpg'
import turkishFlag from '../../../images/turkishFlag.jpg'

const Flags = function () {
    return (
            <div className="wordsContainer">
                <div className="wordsSection">
                    <Link to={`/study/lessons/pl/`} className="pictureContainer">
                        <img className="imgForLessonSection"src={polishFlag} alt="learnPolish" />
                        <div className="word">
                            <p>Learn Polish</p>
                        </div>
                    </Link>
                </div>
                <div className="wordsSection">
                    <Link to={`/study/lessons/tr/`} className="pictureContainer">
                        <img className="imgForLessonSection"src={turkishFlag} alt="learnTurkish" />
                        <div className="word">
                            <p>Learn Turkish</p>
                        </div>
                    </Link>
                </div>
            </div>
            )
}

const Lessons = () => {
    return ( 
        <div className="page">

            <Switch>
              <Route path="/study/lessons" exact>
                <Flags />
              </Route>
              <Route path="/study/lessons/pl">
                <PolishLessons />
              </Route>
              <Route path="/study/lessons/tr">
                <TurkishLessons />
              </Route>
            </Switch> 
        </div>
     );
}
 
export default Lessons; 