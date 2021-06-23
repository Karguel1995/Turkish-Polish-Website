import water from '../../../../images/DrinkImages/water.jpg'
import sparklingWater from '../../../../images/DrinkImages/sparklingWater.jpg'
import tea from '../../../../images/DrinkImages/tea.jpg'
import coffee from '../../../../images/DrinkImages/coffee.jpg'
import milk from '../../../../images/DrinkImages/milk.jpg'
import juice from '../../../../images/DrinkImages/juice.jpg'
import honey from '../../../../images/DrinkImages/honey.jpg'
import hotChocolate from '../../../../images/DrinkImages/hotChocolate.jpg'
import lemonade from '../../../../images/DrinkImages/lemonade.jpg'
import beer from '../../../../images/DrinkImages/beer.jpg'
import wine from '../../../../images/DrinkImages/wine.jpg'
import vodka from '../../../../images/DrinkImages/vodka.jpg'
import champagne from '../../../../images/DrinkImages/champagne.jpg'



import React, { useState } from 'react'
import turkishFlag from '../../../../images/turkey.png'
import polishFlag from '../../../../images/poland.png'

function DrinkComponent ({noun}) {
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

const Drinks = () => {

    const drinkList = [
        {
                id: 1,
                name: 'water',
                polish: 'woda',
                turkish: 'su',
                url: water,
                appear: 'image',
            },
            {
                id: 2,
                name: 'tea',
                polish: 'herbata',
                turkish: 'çay',
                url: tea,
                appear: 'image',
            },
            {
                id: 3,
                name: 'coffee',
                polish: 'kawa',
                turkish: 'kahve',
                url: coffee,
                appear: 'image',
            },
            {
                id: 4,
                name: 'milk',
                polish: 'mleko',
                turkish: 'süt',
                url: milk,
                appear: 'image',
            },
            {
                id: 5,
                name: 'juice',
                polish: 'sok',
                turkish: 'meyve suyu',
                url: juice,
                appear: 'image',
            },
            {
                id: 6,
                name: 'honey',
                polish: 'miód',
                turkish: 'bal',
                url: honey,
                appear: 'image',
            },
            {
                id: 7,
                name: 'sparkling water',
                polish: 'woda gazowana',
                turkish: 'maden suyu',
                url: sparklingWater,
                appear: 'image',
            },
            {
                id: 8,
                name: 'hot chocolate',
                polish: 'gorąca czekolada',
                turkish: 'sıcak çikolata',
                url: hotChocolate,
                appear: 'image',
            },
            {
                id: 9,
                name: 'lemonade',
                polish: 'lemoniada',
                turkish: 'limonata',
                url: lemonade,
                appear: 'image',
            },
            {
                id: 10,
                name: 'beer',
                polish: 'piwo',
                turkish: 'bira',
                url: beer,
                appear: 'image',
            },
            {
                id: 11,
                name: 'wine',
                polish: 'wino',
                turkish: 'şarap',
                url: wine,
                appear: 'image',
            },
            {
                id: 12,
                name: 'vodka',
                polish: 'wódka',
                turkish: 'votka',
                url: vodka,
                appear: 'image',
            },
            {
                id: 13,
                name: 'champagne',
                polish: 'szampan',
                turkish: 'şampanya',
                url: champagne,
                appear: 'image',
            },
    ]

    const food = drinkList.map(noun => (
        <DrinkComponent key ={noun.id} noun = {noun} />
        )
    )

    return ( 
        <div className="page">
            <h1>Drinks</h1>
            <div className="wordsContainer">
                {food}
            </div>
        </div>
     );
}
 
export default Drinks;