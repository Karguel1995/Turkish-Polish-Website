import eggs from '../../../../images/BasicFoodImages/eggs.jpg'
import cheese from '../../../../images/BasicFoodImages/cheese.jpg'
import whiteCheese from '../../../../images/BasicFoodImages/whiteCheese.jpg'
import butter from '../../../../images/BasicFoodImages/butter.jpg'
import oil from '../../../../images/BasicFoodImages/oil.jpg'
import yoghurt from '../../../../images/BasicFoodImages/yoghurt.jpg'
import sourCream from '../../../../images/BasicFoodImages/sourCream.jpg'
import sugar from '../../../../images/BasicFoodImages/sugar.jpg'
import flour from '../../../../images/BasicFoodImages/flour.jpg'
import chocolate from '../../../../images/BasicFoodImages/chocolate.jpg'
import bread from '../../../../images/BasicFoodImages/bread.jpg'
import rolls from '../../../../images/BasicFoodImages/rolls.jpg'
import jam from '../../../../images/BasicFoodImages/jam.jpg'
import mushrooms from '../../../../images/BasicFoodImages/mushrooms.jpg'
import bean from '../../../../images/BasicFoodImages/bean.jpg'
import nuts from '../../../../images/BasicFoodImages/nuts.jpg'
import oatmeal from '../../../../images/BasicFoodImages/oatmeal.jpg'
import rice from '../../../../images/BasicFoodImages/rice.jpg'
import pasta from '../../../../images/BasicFoodImages/pasta.jpg'
import cake from '../../../../images/BasicFoodImages/cake.jpg'
import cookies from '../../../../images/BasicFoodImages/cookies.jpg'
import candies from '../../../../images/BasicFoodImages/candies.jpg'
import iceCream from '../../../../images/BasicFoodImages/iceCream.jpg'
import fruits from '../../../../images/BasicFoodImages/fruits.jpg'
import vegetables from '../../../../images/BasicFoodImages/vegetables.jpg'
import spices from '../../../../images/BasicFoodImages/spices.jpg'
import herbs from '../../../../images/BasicFoodImages/herbs.jpg'


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

const BasicFood = () => {

    const foodList = [
        {
                id: 1,
                name: 'egg',
                polish: 'jajko',
                turkish: 'yumurta',
                url: eggs,
                appear: 'image',
        },
        {
                id: 2,
                name: 'cheese',
                polish: 'ser',
                turkish: 'peynir',
                url: cheese,
                appear: 'image',
        },
        {
                id: 3,
                name: 'white cheese',
                polish: 'biały ser',
                turkish: 'Beyaz peynir',
                url: whiteCheese,
                appear: 'image',
        },
        {
                id: 4,
                name: 'butter',
                polish: 'masło',
                turkish: 'tereyağı',
                url: butter,
                appear: 'image',
        },
        {
                id: 5,
                name: 'oil',
                polish: 'olej',
                turkish: 'yağ',
                url: oil,
                appear: 'image',
        },
        {
                id: 6,
                name: 'yoghurt',
                polish: 'jogurt',
                turkish: 'yoğurt',
                url: yoghurt,
                appear: 'image',
        },
        {
                id: 7,
                name: 'sour cream',
                polish: 'śmietana',
                turkish: 'Ekşi krema',
                url: sourCream,
                appear: 'image',
        },
        {
                id: 8,
                name: 'sugar',
                polish: 'cukier',
                turkish: 'şeker',
                url: sugar,
                appear: 'image',
        },
        {
                id: 9,
                name: 'flour',
                polish: 'mąka',
                turkish: 'un',
                url: flour,
                appear: 'image',
        },
        {
                id: 10,
                name: 'chocolate',
                polish: 'czekolada',
                turkish: 'çikolata',
                url: chocolate,
                appear: 'image',
        },
        {
                id: 11,
                name: 'bread',
                polish: 'chleb',
                turkish: 'ekmek',
                url: bread,
                appear: 'image',
        },
        {
                id: 12,
                name: 'rolls',
                polish: 'bułki',
                turkish: 'rulo',
                url: rolls,
                appear: 'image',
        },
        {
                id: 13,
                name: 'jam',
                polish: 'dżem',
                turkish: 'reçel',
                url: jam,
                appear: 'image',
        },
        {
                id: 14,
                name: 'mushrooms',
                polish: 'grzyby',
                turkish: 'mantarlar',
                url: mushrooms,
                appear: 'image',
        },
        {
                id: 15,
                name: 'bean',
                polish: 'fasola',
                turkish: 'fasulye',
                url: bean,
                appear: 'image',
        },
        {
                id: 16,
                name: 'nuts',
                polish: 'orzechy',
                turkish: 'fındık',
                url: nuts,
                appear: 'image',
        },
        {
                id: 17,
                name: 'oatmeal',
                polish: 'owsianka',
                turkish: 'yulaf ezmesi',
                url: oatmeal,
                appear: 'image',
        },
        {
                id: 18,
                name: 'rice',
                polish: 'ryż',
                turkish: 'pirinç',
                url: rice,
                appear: 'image',
        },
        {
                id: 19,
                name: 'pasta',
                polish: 'makaron',
                turkish: 'makarna',
                url: pasta,
                appear: 'image',
        },
        {
                id: 20,
                name: 'cake',
                polish: 'ciasto',
                turkish: 'pasta',
                url: cake,
                appear: 'image',
        },
        {
                id: 21,
                name: 'cookies',
                polish: 'ciastka',
                turkish: 'kurabiye',
                url: cookies,
                appear: 'image',
        },
        {
                id: 22,
                name: 'candies',
                polish: 'cukierki',
                turkish: 'tatlılar',
                url: candies,
                appear: 'image',
        },
        {
                id: 23,
                name: 'ice cream',
                polish: 'lody',
                turkish: 'dondurma',
                url: iceCream,
                appear: 'image',
        },
        {
                id: 24,
                name: 'fruits',
                polish: 'owoce',
                turkish: 'meyve',
                url: fruits,
                appear: 'image',
        },
        {
                id: 25,
                name: 'vegetables',
                polish: 'warzywa',
                turkish: 'sebzeler',
                url: vegetables,
                appear: 'image',
        },
        {
                id: 26,
                name: 'spices',
                polish: 'przyprawy',
                turkish: 'baharat',
                url: spices,
                appear: 'image',
        },
        {
                id: 27,
                name: 'herbs',
                polish: 'zioła',
                turkish: 'otlar',
                url: herbs,
                appear: 'image',
        },
    ]

    const food = foodList.map(noun => (
        <DrinkComponent key ={noun.id} noun = {noun} />
        )
    )

    return ( 
        <div className="page">
            <h1>Basic Food</h1>
            <div className="wordsContainer">
                {food}
            </div>
        </div>
     );
}
 
export default BasicFood;