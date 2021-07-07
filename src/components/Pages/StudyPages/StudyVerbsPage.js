import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import ToBe from './Verbs/ToBe'
import ToHave from './Verbs/ToHave'
import ToEat from './Verbs/ToEat'
import ToDrink from './Verbs/ToDrink';
import ToDo from './Verbs/ToDo';
import ToRead from './Verbs/ToRead';

const verbList = [
    {
        id: 1,
        polish: 'być',
        english: 'to be',
        url: 'tobe',
        func: 'ToBe',
    },
    {
        id: 2,
        polish: 'mieć',
        english: 'to have',
        url: 'have',
        func: 'ToHave',
    },
    {
        id: 3,
        polish: 'jeść',
        english: 'to eat',
        url: 'eat',
        func: 'ToEat',
    },
    {
        id: 4,
        polish: 'pić',
        english: 'to drink',
        url: 'drink',
        func: 'ToDrink',
    },
    {
        id: 5,
        polish: 'robić',
        english: 'to do',
        url: 'do',
        func: 'ToDo',
    },
    {
        id: 6,
        polish: 'czytać',
        english: 'to read',
        url: 'read',
        func: 'ToRead',
    },
]

const VerbsHeader = function () {
    return (
    <>
        <h1>
        Verbs
        </h1>
        <div className="containerForVerbs">
            {verbs}
        </div>
    </>
    )
}

const verbs = verbList.map(verb => (
    <div className="verbContainer">
        <Link 
        to={`/study/verbs/${verb.url}`} 
        className="verbElement">
            {verb.english} - {verb.polish}
        </Link>
    </div>
));

const StudyVerbsPage = () => {
    return ( 
        <div className="page">
            <Switch>
                <Route path="/study/verbs" exact>
                    <VerbsHeader />
                </Route>
                <Route path="/study/verbs/tobe">
                    <ToBe />
                </Route>
                <Route path="/study/verbs/have">
                    <ToHave />
                </Route>
                <Route path="/study/verbs/eat">
                    <ToEat />
                </Route>
                <Route path="/study/verbs/drink">
                    <ToDrink />
                </Route>
                <Route path="/study/verbs/do">
                    <ToDo />
                </Route>
                <Route path="/study/verbs/read">
                    <ToRead />
                </Route>
            </Switch>
        </div>
     );
}
 
export default StudyVerbsPage; 