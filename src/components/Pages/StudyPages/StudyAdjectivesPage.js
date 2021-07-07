import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import character from '../../../images/Adjectives/character.jpg'
import emotions from '../../../images/Adjectives/emotions.jpg'
import appearance from '../../../images/Adjectives/appearance.jpg'
import colors from '../../../images/Adjectives/colors.jpg'

import Character from "./Adjectives/Character";
import Emotions from "./Adjectives/Emotions";
import Appearance from "./Adjectives/Appearance";
import Colors from "./Adjectives/Colors"

const adjectiveList = [
    {
        id: 1,
        name: 'personality',
        path: 'character',
        url: character,
    },
    {
        id: 2,
        name: 'emotions',
        path: 'emotions',
        url: emotions,
    },
    {
        id: 3,
        name: 'appearance',
        path: 'appearance',
        url: appearance,
    },
    {
        id: 4,
        name: 'colors',
        path: 'colors',
        url: colors,
    },
]

const AdjectivesHeader = function () {
    return (
    <>
            <h1>
                Adjectives
            </h1>
            <div className="wordsContainer">
                {adjectives}
            </div>
    </>
    )
}

const adjectives = adjectiveList.map(adjective => (
    <div key={adjective.id} className="wordsSection">
        <Link to={`/study/adjectives/${adjective.path}`} className="pictureContainer">
            <img className="imgForSection"src={adjective.url} alt={adjective.name} />
            <div className="word">
                <p>{adjective.name}</p>
            </div>
        </Link>
    </div>
));

const StudyAdjectivesPage = () => {
    return ( 
        <div className="page">
            <Switch>
                <Route path="/study/adjectives" exact>
                    <AdjectivesHeader />
                </Route>
                <Route path="/study/adjectives/character">
                    <Character />
                </Route>
                <Route path="/study/adjectives/emotions">
                    <Emotions />
                </Route>
                <Route path="/study/adjectives/appearance">
                    <Appearance />
                </Route>
                <Route path="/study/adjectives/colors">
                    <Colors />
                </Route>
            </Switch>
    </div>
     );
}
export default StudyAdjectivesPage; 