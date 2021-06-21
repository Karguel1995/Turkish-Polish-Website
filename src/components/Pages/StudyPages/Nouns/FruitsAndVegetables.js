import apple from '../../../../images/FoodImages/apple.jpg'
import banana from '../../../../images/FoodImages/banana.jpg'
import orange from '../../../../images/FoodImages/orange.jpg'
import strawberry from '../../../../images/FoodImages/strawberry.jpg'
import grapes from '../../../../images/FoodImages/grapes.jpg'
import pear from '../../../../images/FoodImages/pear.jpg'
import watermelon from '../../../../images/FoodImages/watermelon.jpg'
import lemon from '../../../../images/FoodImages/lemon.jpg'
import peach from '../../../../images/FoodImages/peach.jpg'
import plum from '../../../../images/FoodImages/plum.jpg'
import cherry from '../../../../images/FoodImages/cherry.jpg'
import pineapple from '../../../../images/FoodImages/pineapple.jpg'
import raspberry from '../../../../images/FoodImages/raspberry.jpg'
import blueberry from '../../../../images/FoodImages/blueberry.jpg'
import gooseberry from '../../../../images/FoodImages/gooseberry.jpg'
import tomato from '../../../../images/FoodImages/tomato.jpg'
import cucumber from '../../../../images/FoodImages/cucumber.jpg'
import pepper from '../../../../images/FoodImages/pepper.jpg'
import onion from '../../../../images/FoodImages/onion.jpg'
import potato from '../../../../images/FoodImages/potato.jpg'
import carrot from '../../../../images/FoodImages/carrot.jpg'
import beetroot from '../../../../images/FoodImages/beetroot.jpg'
import corn from '../../../../images/FoodImages/corn.jpg'
import lettuce from '../../../../images/FoodImages/lettuce.jpg'
import cauliflower from '../../../../images/FoodImages/cauliflower.jpg'
import broccoli from '../../../../images/FoodImages/broccoli.jpg'
import cabbage from '../../../../images/FoodImages/cabbage.jpg'


import React, { useState } from 'react'
import turkishFlag from '../../../../images/turkey.png'
import polishFlag from '../../../../images/poland.png'

function FoodComponent ({noun}) {
    const [appear, setAppear] = useState(noun.appear);
    const changeToTurkish = () => {
        setAppear('turkish')
        }

    const changeToPolish = () => {
        setAppear('polish')
        }

    const changeToImage = () => {
        setAppear('image')
        }

    return (
        <div key={noun.id} className="wordElement">
            <div className ="wordContainer">
                {appear === 'image' ? (
                    <img className="wordImage" src = {noun.url} alt ={noun.name}/>
                ) : (<p onClick ={changeToImage}>{noun[appear]}</p>)
            }
            </div>
            <div className="flagsContainer">
                    <img className="flagPic" 
                    src={turkishFlag} 
                    alt="Turkish flag" 
                    onClick={changeToTurkish}
                    />

                    <p>{noun.name}</p>

                    <img className="flagPic" 
                    src={polishFlag} 
                    alt="Polish flag" 
                    onClick={changeToPolish}
                    />
                </div>
        </div>
    )
}

const FruitsAndVegetables = () => {

    const foodList = [
                {
                id: 1,
                name: 'apple',
                polish: 'jabłko',
                turkish: 'elma',
                url: apple,
                appear: 'image',
                },
                {
                id: 2,
                name: 'banana',
                polish: 'banan',
                turkish: 'muz',
                url: banana,
                appear: 'image',
                },
                {
                id: 3,
                name: 'orange',
                polish: 'pomarańcza',
                turkish: 'portakal',
                url: orange,
                appear: 'image',
                },
                {
                id: 4,
                name: 'strawberry',
                polish: 'truskawka',
                turkish: 'çilek',
                url: strawberry,
                appear: 'image',
                },
                {
                id: 5,
                name: 'grapes',
                polish: 'winogrono',
                turkish: 'üzüm',
                url: grapes,
                appear: 'image',
                },
                {
                id: 6,
                name: 'pear',
                polish: 'gruszka',
                turkish: 'armut',
                url: pear,
                appear: 'image',
                },
                {
                id: 7,
                name: 'watermelon',
                polish: 'arbuz',
                turkish: 'karpuz',
                url: watermelon,
                appear: 'image',
                },
                {
                id: 8,
                name: 'lemon',
                polish: 'cytryna',
                turkish: 'limon',
                url: lemon,
                appear: 'image',
                },
                {
                id: 9,
                name: 'peach',
                polish: 'brzoskwinia',
                turkish: 'şeftali',
                url: peach,
                appear: 'image',
                },
                {
                id: 10,
                name: 'plum',
                polish: 'śliwka',
                turkish: 'erik',
                url: plum,
                appear: 'image',
                },
                {
                id: 11,
                name: 'cherry',
                polish: 'wiśnia',
                turkish: 'kiraz',
                url: cherry,
                appear: 'image',
                },
                {
                id: 12,
                name: 'pineapple',
                polish: 'ananas',
                turkish: 'ananas',
                url: pineapple,
                appear: 'image',
                },
                {
                id: 13,
                name: 'raspberry',
                polish: 'malina',
                turkish: 'ahududu',
                url: raspberry,
                appear: 'image',
                },
                {
                id: 14,
                name: 'blueberry',
                polish: 'borówka',
                turkish: 'yabanmersini',
                url: blueberry,
                appear: 'image',
                },
                {
                id: 15,
                name: 'gooseberry',
                polish: 'agrest',
                turkish: 'bektaşi üzümü',
                url: gooseberry,
                appear: 'image',
                },
                {
                id: 16,
                name: 'tomato',
                polish: 'pomidor',
                turkish: 'domates',
                url: tomato,
                appear: 'image',
                },
                {
                id: 17,
                name: 'cucumber',
                polish: 'ogórek',
                turkish: 'salatalık',
                url: cucumber,
                appear: 'image',
                },
                {
                id: 18,
                name: 'pepper',
                polish: 'papryka',
                turkish: 'biber',
                url: pepper,
                appear: 'image',
                },
                {
                id: 19,
                name: 'onion',
                polish: 'cebula',
                turkish: 'soğan',
                url: onion,
                appear: 'image',
                },
                {
                id: 20,
                name: 'potato',
                polish: 'ziemniak',
                turkish: 'patates',
                url: potato,
                appear: 'image',
                },
                {
                id: 21,
                name: 'carrot',
                polish: 'marchewka',
                turkish: 'havuç',
                url: carrot,
                appear: 'image',
                },
                {
                id: 22,
                name: 'beetroot',
                polish: 'burak',
                turkish: 'pancar kökü',
                url: beetroot,
                appear: 'image',
                },
                {
                id: 23,
                name: 'corn',
                polish: 'kukurydza',
                turkish: 'mısır',
                url: corn,
                appear: 'image',
                },
                {
                id: 24,
                name: 'lettuce',
                polish: 'sałata',
                turkish: 'marul',
                url: lettuce,
                appear: 'image',
                },
                {
                id: 25,
                name: 'cauliflower',
                polish: '',
                turkish: '',
                url: cauliflower,
                appear: 'image',
                },
                {
                id: 26,
                name: 'broccoli',
                polish: 'brokuł',
                turkish: 'brokoli',
                url: broccoli,
                appear: 'image',
                },
                {
                id: 27,
                name: 'cabbage',
                polish: 'kapusta',
                turkish: 'lahana',
                url: cabbage,
                appear: 'image',
                },
    ]

    const food = foodList.map(noun => (
        <FoodComponent key ={noun.id} noun = {noun} />
        )
    )

    return ( 
        <div className="page">
            <h1>Fruits and Vegetables</h1>
            <div className="wordsContainer">
                {food}
            </div>
        </div>
     );
}
 
export default FruitsAndVegetables;