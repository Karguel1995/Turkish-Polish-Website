import water from '../../../../images/DrinkImages/water.jpg'
import tea from '../../../../images/DrinkImages/tea.jpg'
import coffee from '../../../../images/DrinkImages/coffee.jpg'



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