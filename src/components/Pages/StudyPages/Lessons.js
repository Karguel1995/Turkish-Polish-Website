import { Link, Switch, Route } from 'react-router-dom';

import PolishLessons from './PolishLessons';
import TurkishLessons from './TurkishLessons';

import polishFlag from '../../../images/polishFlag.jpg'
import turkishFlag from '../../../images/turkishFlag.jpg'

const Flags = function () {
    return (
            <div className="images-container">
                <div className="single-element language-lesson">
                    <Link to={`/study/lessons/pl/`}>
                        <img className="language-lesson-image"src={polishFlag} alt="learnPolish" />
                        <div className="element-title">
                            <p>Learn Polish</p>
                        </div>
                    </Link>
                </div>
                <div className="single-element language-lesson">
                    <Link to={`/study/lessons/tr/`}>
                        <img className="language-lesson-image"src={turkishFlag} alt="learnTurkish" />
                        <div className="element-title">
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